const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')
const checkAuth = async(req,res,next)=>{
    // console.log("hello auth")
    const {token}= req.cookies
    // console.log(token) // check token 
    if(!token){
        req.flash('error', 'unauthorised user please login')
        res.redirect('/')
    } else {
        const verifyToken = jwt.verify(token,'chirag@123')
        // console.log(verifyToken)
        const data = await UserModel.findOne({_id:verifyToken.ID})    
        // console.log(data)
        req.userdata=data
        next()
    }
  }
  module.exports =checkAuth  