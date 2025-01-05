const {User} = require('../models/userModel')
exports.setProfile =async (req,res)=>{
    try{
        const {username,email,number} = req.body
        const user =await User.create({username,email,number})
        if(user){
            return res.status(201).json({message:"User created successfully",id:user._id})
        }
    }catch(e){
        return res.status(403).json({error:e.message})
    }
    return res.status(403).json({error:"Something went wrong"})
}
exports.getProfile = async(req,res)=>{
    try{
        const {id} = req.body
        const user =await User.find({_id:id})
        if(user){
            return res.status(200).json({user,message:"Fetched data"})
        }
    }catch(e){
        return res.status(403).json({error:e.message})
    }
    
    return res.status(403).json({message:"Something went wrong"})
}
exports.updateProfile = async(req,res)=>{
    try{
        const {id,username,email,number} = req.body
        const user =await User.findOneAndUpdate({_id:id},{username,email,number},{new:true})
        if(user){
            return res.status(204).json({message:"User information updated"})
        }    
    }catch(e){
      return  res.status(403).json({error:e.message})
    }
    return res.status(403).json({error:"Something went wrong"})
}
exports.deleteProfile =async (req,res)=>{
    try{
        const {id} = req.body
        const user =await User.findOneAndDelete({_id:id},{new:true})
        return res.status(204).json(user)
    }catch(e){
        return res.status(403).json({error:e.message})
    }
}