const express=require("express")
const route=express.Router()

const {createUser,findAllUser,findUserById,deleteUser,updateUser,deleteAllUser}=require("../controller/userController")
route.post("/create/user",createUser)
route.get("/find/user",findAllUser)
route.get("/single/user/:id",findUserById)
route.delete("/delete/user/:id",deleteUser)
route.delete("/delete/all/user",deleteAllUser)
route.put("/update/user/:id",updateUser)

module.exports=route