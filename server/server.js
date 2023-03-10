const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
var port = 1123
app = express()

app.use(cors())

var con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "glosowanie"


})

con.connect(function(err){
    if(err) console.log(err)
 console.log("Connection successful")
})

app.get("/", function(req, res){
    res.send("Done")
})

app.get("/select", function(req, res){

    var sql = "SELECT * FROM glosowanie"

    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        res.send(result)
    })
})

app.get("/add/:pesel", function(req, res){
    var pesel = req.params.pesel
    
   
    var sql = `INSERT INTO glosowanie(Pesel) VALUES ('${pesel}') `

    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        else console.log("dodano")
        res.send(result)
    })

})

// app.get("/delete/:ID", function(req, res){

//     const ID = req.params.ID
//     var sql = `DELETE FROM todolist WHERE ID = ${ID}`

//     con.query(sql, function(err, result, fields){
//         if(err) console.log(err)
//         else console.log("usunięto")
//         res.send(result)
//     })


// })

app.listen(5523)

