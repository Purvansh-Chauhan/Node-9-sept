const express=require('express');
const app=express();
const user=require('./routes/users')//index.js main hota hai isko he access kiya jata hai browser k through
//sb se choti file hoti hai index.js


app.use(user)






app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
else{
    console.log("seerver is running on port 3000");
}
})
// localhost:3000/users