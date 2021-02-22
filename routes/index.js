var modelProducts = require('../models/products'); //nhúng model vào và đặt tên model
var modelCatalogs = require('../models/catalogs');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let listPro = modelProducts.list();
  let listCat = modelCatalogs.list();

  res.render('index', {lp:listPro, lc:listCat} );
});

router.get('/sp', function(req, res, next) {
  let listPro = modelProducts.list();
  let listCat = modelCatalogs.list();

  res.render('clients/products', {lp:listPro, lc:listCat} );
});
router.get('/detail/:id', function(req, res, next) {
  let id = req.params.id;
  let listPro = modelProducts.list();
  let listCat = modelCatalogs.list();

  res.render('clients/details', {lp:listPro, lc:listCat} );
});

module.exports = router;
