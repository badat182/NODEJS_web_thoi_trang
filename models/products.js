var db=require('./database');//chèn model database vào đế kết nối db
var data=[]; //biến để chứa dữ liệu đổ về cho controller

exports.list = function() {
    let sql = `SELECT * FROM product`;
    db.query(sql, function(err, d) {
        if (err) throw err;        
        data= d;
    });
    return data;
}

exports.create = function(ten, mota, chitiet, gia, giamgia, soluong, daban, img, idCat, anhien) {
    let sql = `INSERT INTO product (nameProduct, description, detail, price, discount, 
    amount, da_ban, img, id_catalog, showHide) 
    VALUES ('${ten}', '${mota}', '${chitiet}', '${gia}', '${giamgia}', '${soluong}', '${daban}', '${img}', '${idCat}', '${anhien}')`
    db.query(sql, function (err, d){
        if(err) throw err;
        data = d[0];
    });
    return data;
}
// id, nameProduct, description, detail, price, discount, da_ban, img, id_catalog, showHide 
exports.update = function(id,ten, mota, chitiet, gia, giamgia, soluong, daban, img, idCat, anhien) {
    let sql = ` UPDATE product
    SET id='${id}', nameProduct='${ten}', description='${mota}', detail='${chitiet}', price='${gia}', 
    discount='${giamgia}', amount='${soluong}', da_ban='${daban}', img='${img}', id_catalog='${idCat}', showHide='${anhien}'

    WHERE id='${id}' `;
    db.query(sql, function (err, d){
        if(err) throw err;
        data = d[0];
    });
    return data;
}
//tra ve 1 gia tri san pham
exports.detail = function(id) {
    let sql = `SELECT * FROM product WHERE id=${id}`;
    db.query(sql, function(err, d){
        if(err) throw err;
        data = d[0];
    });
    return data;
}
exports.delete = function(id) {
    let sql = `DELETE FROM product WHERE id=${id}`
    db.query(sql, function(err,d ){
        if(err) throw err;
        data = d[0]
    })  
}
