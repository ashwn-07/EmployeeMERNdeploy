const express = require("express");
const router = express.Router();
require("mongoose");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const adminModel = require("../Model/Adminmodel");
const empmodel = require("../Model/Employeemodel");

const jwt = require("jsonwebtoken");

// api to login 

router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const admin = await adminModel.findOne({ username: email });
    const user = await empmodel.findOne({ EmailId: email });
    console.log(admin, user)

    try {
        if (admin) {
            if (password == admin.password) {

                jwt.sign({ email: email, id: admin._id }, "admin", { expiresIn: "1d" },
                (error, token) => {
                    if (error) {
                        res.json({ message: "Token not generated" });
                    } else {
                        res.status(200).json({
                            message: "Logged in as ADMIN",
                            token: token,
                            user: admin,
                        });
                    }
                }
            );

                
            } else {
                res.status(200).json({ message: "Invalid Password" });
            }
        } else if (user) {
            if (password == user.password) {
                jwt.sign({ email: email, id: user._id }, "emp", { expiresIn: "1d" },
                    (error, token) => {
                        if (error) {
                            res.json({ message: "Token not generated" });
                        } else {
                            res.status(200).json({
                                message: "Logged in as USER",
                                token: token,
                                user: user,
                            });
                        }
                    }
                );

               
            } else {
                res.status(200).json({ message: "Invalid Password" });
            }
        } else {
            res.status(200).json({ message: "User does not exist" });
        }
    } catch (error) {
        res.status(404).json({ message: "Erorr logging in", err: error });
    }
});

module.exports = router;
