const express = require("express");
const routerLogin = express.Router()

routerLogin.post("/login",(req,res) => {
    console.log(req.body)
    res.send("This Is LoginPage")
})


module.exports = routerLogin;