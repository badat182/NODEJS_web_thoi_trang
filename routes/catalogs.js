var modelCatalogs = require('../models/catalogs'); //nhúng model vào và đặt tên model
var modelProducts = require('../models/products');

var express = require('express');
var router = express.Router();
// ROUTER CHO CATALOG
router.get('/', function(req, res, next) {
    let listCat = modelCatalogs.list();//cách gọi hàm trong model, để có dữ liệu từ db
    res.render("admin/catalog_list", {list:listCat});
});

router.get('/addcat', function(req, res, next) {
    res.render("admin/catalog_add"); 
});
router.post('/addcats', function(req, res, next) {
    let ten = req.body.nameCat;
    let dathang = req.body.order;
    let anhien = req.body.showHide;

    modelCatalogs.create(ten, dathang, anhien);
    res.redirect('/cat');
});
router.post('/update', function(req, res, next) {
  let id = req.body.id;
  let ten = req.body.nameCat; 
  let dathang = req.body.order;
  let anhien = req.body.showHide;

  modelCatalogs.update(id, ten, dathang, anhien);
  res.redirect('/cat');
});

router.get('/edit/:id', function(req, res, next) {//tham số id để biết record cần chỉnh
  let id = req.params.id;
  let detail = modelCatalogs.detail(id);
  res.render('admin/catalog_edit', {d:detail});
});



router.get('/delete/:id', function(req, res) { //tham số id để biết record cần xóa
  let id = req.params.id;
  modelCatalogs.delete(id);
  res.redirect('/cat')
});
//ROUTER CHO SAN PHAM


module.exports = router;