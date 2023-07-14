const User=require("../model/userModel")

const createUser=async(req,res)=>{
    try {
       const{id,name,email,phone}=req.body;
       let response=new User(req.body)
       await response.save()
       res.status(200).json({status:true,message:response})
    } catch (error) {
       res.status(500).json({status:false,message:error.message})
        
    }
}

const findAllUser=async(req,res)=>{
    try {
     
       let response=await User.find().sort({createdAt:-1})
       res.status(200).json({status:true,message:response})
    } catch (error) {
       res.status(500).json({status:false,message:error.message})
        
    }
}

const findUserById=async(req,res)=>{
    try {
     
       let response=await User.findOne({_id:req.params.id})
       res.status(200).json({status:true,message:response})
    } catch (error) {
       res.status(500).json({status:false,message:error.message})
        
    }
}

const deleteUser=async(req,res)=>{
    try {
     
       let response=await User.deleteOne({_id:req.params.id})
       res.status(200).json({status:true,message:response})
    } catch (error) {
       res.status(500).json({status:false,message:error.message})
        
    }
}
const updateUser=async(req,res)=>{
    try {
     
       let response=await User.updateOne({_id:req.params.id},{$set:req.body})
       res.status(200).json({status:true,message:"User update succefully"})
    } catch (error) {
       res.status(500).json({status:false,message:error.message})
        
    }
}

const deleteAllUser=async(req,res)=>{
    try {
     
       let response=await User.deleteMany()
       res.status(200).json({status:true,message:response})
    } catch (error) {
       res.status(500).json({status:false,message:error.message})
        
    }
}
module.exports={createUser,findAllUser,findUserById,deleteUser,updateUser,deleteAllUser}