const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host:"localhost",
    password:"Selvam66#",
    database:"peoplelist"
});
app.get("/get", (req, res) => {
    const sqlSelect = "SELECT * FROM peoplelist.peoples";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/create",(req,res)=>{
    console.log(req.body);
const name = req.body.name;
const age = req.body.age;
const country = req.body.country;



db.query("INSERT INTO peoples (name, age, country) VALUES(?,?,?)",
[name,age,country],
(err,result)=>{
if (err){
    console.log(err);
} else{
    res.send("values inserted");
}

}
)


});

app.listen(3001, ()=>{
    console.log("the server is running");
});