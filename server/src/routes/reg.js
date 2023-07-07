const express = require("express");
const routerReg = express.Router()

routerReg.post("/reg",(req,res) => {
    console.log(req.body)
    res.send("This Is RegisterPage")
})


module.exports = routerReg;