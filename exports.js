var mysql = require('mysql');
var connection = mysql.createConnection({
      host     : '35.202.128.244',
      user     : 'root',
      password : 'hw630926',
      database : 'dbtest'
});

connection.connect();
exports.handler = (event, context,callback) => {
    console.log("starting");
    connection.query("SELECT * FROM student",function(err,rows,fields){
        console.log("rows : "+ rows);
        callback(null);
    });
};