
const express=require('express');
const bodyParser = require('body-parser');
const dbconnection = require('./middlewares/db.middlewares');
const { userrouter } = require('./routes/users.routes');




const app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/user",userrouter) 

app.listen(1234,()=>{
    console.log('a');
})