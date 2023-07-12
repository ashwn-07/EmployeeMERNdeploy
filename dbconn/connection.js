const express = require('express')
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ashwin07:Glorymanglory@cluster0.wmjugph.mongodb.net/EmployeeMERN")
.then(() => {
    console.log(" DB connection Successfull")
})

.catch((err)=>{
    console.log(`error connecting: ${err}`)
})