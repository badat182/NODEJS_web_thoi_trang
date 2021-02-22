//Database trả về kết nối với cơ sở dữ liệu
var mysql = require('mysql');
var db = mysql.createConnection({
   host: 'localhost', 
   user: 'root', 
   password: '', 
   database: 'corzastore'
}); 
db.connect(function(err) {
   if (err) throw err;
   console.log('Database da ket noi!');
});
module.exports = db;