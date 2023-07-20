const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const empmodel = require("../Model/Employeemodel");
const jwt = require("jsonwebtoken");



//to view employee for user
router.get("/employeelist/:token", (req, res) => {
    const token = req.params.token;

    jwt.verify(token, "emp", async (error, decoded) => {
        if (decoded && decoded.email) {
            const data = await empmodel.find({}, { password: 0 });

            res.status(200).json({ token: token, empdetails: data });
        } else {
            res.status(401).json({ message: "Access denied!! Unauthorized User" });
        }
    });
});

//to get employee details for ADMIN
router.get("/employeelistadmin/:token", async (req, res) => {
    
    
    
    const token = req.params.token;

    jwt.verify(token, "admin", async (error, decoded) => {
        if (decoded && decoded.email) {
            const data = await empmodel.find({});

            res.status(200).json({ token: token, empdetails: data });
        } else {
            res.status(401).json({ message: "Access denied!! Unauthorized User" });
        }
    });
    
   
});

//to add employee
router.post("/addemployee",  async (req, res) => {
    newemp = req.body;

    try {
        await empmodel(newemp).save();
        res.status(200).json({ message: "Employee Added" });
    } catch (error) {
        res.status(404).json({ message: "Error! Employee was not  Added" });
        console.log(error);
    }
});

//to edit employee
router.put("/editemployee/:id", async (req, res) => {
    newdata = req.body;
    id = req.params.id;

    try {
        await empmodel.findByIdAndUpdate(id, newdata);
        res.status(200).json({ message: "Data Updated" });
    } catch (error) {
        res.status(404).json({ message: "Error! Employee was not  Added", error });
        console.log(error);
    }
});

//to delete employee
router.delete("/deleteemp/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await empmodel.findByIdAndDelete(id);

        res.status(200).json({ message: "Deleted Successfully" });
    } catch (error) {
        res.status(404).json({ message: "Cannot Delete", err: error });
    }
});

module.exports = router;
