const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ashwin07:Glorymanglory@cluster0.wmjugph.mongodb.net/EmployeeMERN")
.then(()=>{
    console.log("Connected to DB successfully")
})

.catch((err) => {
    console.log(`Cannot connect to db ERR: ${err}`)
})