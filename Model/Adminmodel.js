const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
username:String,
password:String,
role:String

})




const adminModel = mongoose.model('admindetail', AdminSchema);



module.exports= adminModel;