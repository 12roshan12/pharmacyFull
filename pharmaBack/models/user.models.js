const dbconnection = require("../middlewares/db.middlewares")



const createUser = (username,password,email)=>{
   return new Promise((resolve,reject)=>{
    dbconnection.query("INSERT INTO users (username,password,email) VALUES(?,?,?) " ,[username,password,email],(err,res)=>{
        if(err){
            resolve({err:err,out:null})
        }
        else{
            resolve({err:null,out:res})
        }
    }) 
   })

}

const getUser = ()=>{
    return new Promise((resolve,reject)=>{
     dbconnection.query("SELECT  * FROM users  " ,[],(err,res)=>{
         if(err){
             resolve({err:err,out:null})
         }
         else{
             resolve({err:null,out:res})
         }
     }) 
    })
 
 }

 const getuserbyid = (username)=>{
    return new Promise((resolve,reject)=>{
     dbconnection.query("SELECT  * FROM users WHERE username =? " ,[username],(err,res)=>{
         if(err){
             resolve({err:err,out:null})
         }
         else{
             resolve({err:null,out:res})
         }
     }) 
    })
 
 }

 
module.exports = {
    createUser,
    getUser,
    getuserbyid
}