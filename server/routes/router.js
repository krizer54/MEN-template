const { application } = require('express');
const express = require('express');
const route = express.Router()

route.get("/", (req,res)=> {
    res.render("index")
})

route.get("/add-user", (req,res)=> {
    res.render("add_user")
})
module.exports = route