const mongoose = require ('mongoose');
const EmployeeSchema = mongoose.Schema({
    EmployeeName:String,
    EmailId:String,
    password:String,
    Designation:String,
    Salary:Number,
    Location:String
})



const EmpModel = mongoose.model('employeedetail', EmployeeSchema)

module.exports =EmpModel;