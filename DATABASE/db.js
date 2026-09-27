const mysql = require("mysql2");

//creating  connection 

const db = mysql.createConnection({
    host :"localhost",
    user:"root",
    password:"darkness",
    database:"week3"
});


const student ={
    name:"google",
    email:"anything.google.com",
    age:100
}
db.connect((error)=>{
    if(error){
        console.log("Database Connection Failed :"+error.message);
        return;
    }

    console.log("The Database Is Connected Successfully");

    db.query("SHOW DATABASES",(error,results)=>{
        if(error){
            console.log(error.message);
            return;
        }
        console.log(results);
    })

    db.query("SELECT * FROM students",(error,results)=>{
        if(error){
            console.log(error.message);
            return;
        }
        console.log(results);
    })

    db.query("INSERT INTO students(name,email,age) VALUES(?,?,?)",[student.name,student.email,student.age],(error,results)=>{
        if(error){
            console.log("error:"+error.message);
            return;
        }
        console.log("data is inserted");
        console.log("student ID:",results.insertId);
    })

    db.query("UPDATE students SET name =? WHERE id =?",["nagesh",1],(error,result)=>{
        if(error){
            console.log("error:"+error.message);
            return;
        }
        console.log("student updated");
        console.log("UPDATED:",result.affectedRows);
    })
    
    db.query("DELETE FROM students WHERE id =?",[2],(error,result)=>{
        if(error){
         console.log("error:",error.message);
         return;
        }
        console.log(`student having id: ${result.deletId} is deleted`);
        console.log(`row effected :`,result.affectedRows);
    })
});


module.exports = db;
