var modelProducts = require('../models/products'); //nhúng model vào và đặt tên model
var modelCatalogs = require('../models/catalogs');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let listPro = modelProducts.list();//cách gọi hàm trong model, để có dữ liệu từ db
    res.render("admin/products_list", {list:listPro});
});

router.get('/addpro', function(req, res, next) {
    let list = modelCatalogs.list();
    res.render("admin/product_add", {listCat:list}); 
});
router.post('/addpros', function(req, res, next) {
    // <!-- name / desc / detail / price / discount / amount / sold / idcat / showHide -->
    let ten = req.body.name;
    let mota = req.body.desc;
    let chitiet = req.body.detail;
    let gia = req.body.price;
    let giamgia = req.body.discount;
    let soluong = req.body.amount;
    let daban = req.body.sold;
    let img = req.body.img;
    let idCat = req.body.idCat;
    let anhien = req.body.showHide;
// ten, mota, chitiet, gia, giamgia, daban, idCat, anhien
    modelProducts.create(ten, mota, chitiet, gia, giamgia,soluong, daban, img, idCat, anhien);
    res.redirect('/pro');
});
router.post('/updatepro', function(req, res, next) {
    let id = req.body.id;
    let ten = req.body.name;
    let mota = req.body.desc;
    let chitiet = req.body.detail;
    let gia = req.body.price;
    let giamgia = req.body.discount;
    let soluong = req.body.amount;
    let daban = req.body.sold;
    let img = req.body.img;
    let idCat = req.body.idCat;
    let anhien = req.body.showHide;

    modelProducts.update(id, ten, mota, chitiet, gia, giamgia,soluong, daban, img, idCat, anhien);
  res.redirect('/pro');
});

router.get('/edit/:id', function(req, res, next) {//tham số id để biết record cần chỉnh
  let id = req.params.id;

  let detail = modelProducts.detail(id);
  let list = modelCatalogs.list();

  res.render('admin/product_edit', {d:detail, listCat:list});
});
router.get('/delete/:id', function(req, res) { //tham số id để biết record cần xóa
  let id = req.params.id;
  modelCatalogs.delete(id);
  res.redirect('/pro')
});

module.exports = router;