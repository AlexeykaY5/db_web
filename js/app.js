const mysql = require('mysql');

const conn = mysql.createConnection({

    host: "localhost",
    user: "root",
    database: "webjspy",
    password: ""

});

conn.connect(err => {
    if(err){
        console.log(err);
        return err;
    }else{
        console.log("db ok")
    }
});

let query ="SELECT * FROM `produkts`"
conn.query(query, (err, result, field) => {
    // console.log(err);
    console.log(result);
    // console.log(field);
});