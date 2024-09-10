const express=require('express');
const router=express.Router();
const UserController=require('../controllers/UserController');
//const users=require('../user.json');//sara business logic controller mein likha jayega routes usko access karega
router.get('/users',(req,res)=>{
    UserController.getUsers(req,res)//index.json se users.js mein aa k humko mil gaya users ab ye execute hoga
})
//localhost/users/10
router.get('/users/:id',(req,res)=>{
    UserController.getParticularUsers(req,res)
})
module.exports=router;

