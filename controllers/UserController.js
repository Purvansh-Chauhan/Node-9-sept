const users=require('../user.json')// sara business logic yahan likha jayega
function getUsers(req,res){
    try{

        res.json(users)
    }catch (err){

    }
}
function getParticularUsers(req,res)
{
    try{
        let id=parseInt(req.params.id);
        let user=users.find((user)=>user.id===id);
        res.json(user)

    }catch(err){
    console.log(err)
    }
}
module.exports={
    getUsers,
    getParticularUsers
};