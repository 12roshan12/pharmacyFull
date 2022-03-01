const mysql = require("mysql")


const dbconnection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "pharmaDB",
    port: "3306"

});

dbconnection.connect((e) => {

    if (e) {
        console.log("error connecting to database");
        throw new(e)

    }

    else {
        console.log("dbconnection seccessful");
    }
})

dbconnection.query("CREATE TABLE IF NOT EXISTS users(id int primary key auto_increment , username varchar(50) unique, password text, email text)",[],(err,res)=>{

    if(err){
        dbconnection.end(()=>{
            console.log("error creating user");
        })
    }
})

module.exports = dbconnection
