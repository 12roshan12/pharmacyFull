const express = require("express")
const { addUser, fetchUsers, fetchusersbyid } = require("../controllers/users.controller")
const { getUser } = require("../models/user.models")


const userrouter = express.Router()

userrouter.post("/adduser",addUser)

userrouter.get("/getuser",fetchUsers)

userrouter.post("/getuserbyid",fetchusersbyid)



module.exports = {
    userrouter
}