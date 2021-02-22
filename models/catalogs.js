var db=require('./database');//chèn model database vào đế kết nối db
var data=[]; //biến để chứa dữ liệu đổ về cho controller

exports.list = function() {
    let sql = `SELECT * FROM catalog`;
    db.query(sql, function(err, d) {
        if (err) throw err;        
        data= d;
    });
    return data;
}

exports.create = function(ten, dathang, anhien) {
    let sql = `INSERT INTO catalog (nameCatalog, icon, showHide) 
    VALUES ('${ten}', '${dathang}', '${anhien}')`
    db.query(sql, function (err, d){
        if(err) throw err;
        data = d[0];
    });
    return data;
}
exports.update = function(id, ten, dathang, anhien) {
    let sql = ` UPDATE catalog
    SET  nameCatalog='${ten}', icon='${dathang}', showHide='${anhien}'
    WHERE id='${id}' `;
    db.query(sql, function (err, d){
        if(err) throw err;
        data = d[0];
    });
    return data;
}
//tra ve 1 gia tri san pham
exports.detail = function(id) {
    let sql = `SELECT * FROM catalog WHERE id=${id}`;
    db.query(sql, function(err, d){
        if(err) throw err;
        data = d[0];
    });
    return data;
}
exports.delete = function(id) {
    let sql = `DELETE FROM product WHERE id=${id} `
    db.query(sql, function(err,d ){
        if(err) throw err;
        data = d[0]
    })  
}