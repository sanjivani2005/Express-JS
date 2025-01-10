const express = require('express');
const employeeRouter=express.Router();

employeeRouter.get('/',(req,res)=>{
    res.send("employees portal ")
}).get('/getEmp', (req,res)=>{
    res.send(`Employee fetch sucessfully `)
}

).post('/postEmp', (req,res)=>{
    res.send(`Employees posted successfully `)
}
);
    module.exports = employeeRouter;