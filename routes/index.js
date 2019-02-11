var express = require('express');
var router = express.Router();
var db = require('../db.js');
var mysql = require('mysql');

/* GET home page. */
var con = db.connection(mysql);
router.get('/', function (req, res, next) {
  res.render('index', { title: 'COMPILER 2019' });
});

router.route('/main')
  .get(function (req, res) {
    res.render('main')
  })

router.route('/welcome')
  .get(function (req, res) {
    res.render('welcome')
  })

router.route('/admin')
  .get(function (req, res) {
    res.render('admin')

  })
router.route('/admin1')
  .get(function (req, res) {
    var password = req.body.password,
      insertQuery = 'select * from pubgm'
    con.query(insertQuery, function (err, rows, field) {
      if (err) {
        res.status(500).send
          (
            {
              status: 'err with err' + err
            }
          )
      }
      else {
        res.status(200).send
          (
            {
              status: 'success'
            }
          )
      }
    })
  })


router.route('/gd-daftar')
  .get(function (req, res) {
    res.render('graphicDesign')
  })

  .post(function (req, res) {
    var nama = req.body.nama,
      nomorHp = req.body.nomorHp,
      email = req.body.email,
      insertQuery = 'insert into graphicdesign (nama, nomorHp, email) values (?,?,?);'
    con.query(insertQuery, [nama, nomorHp, email], function (err, rows, field) {
      if (err) {
        res.status(500).send
          (
            {
              status: 'err with err' + err
            }
          )
      }
      else {
        res.status(200).send
          (
            {
              status: 'success'
            }
          )
      }
    })
  })




router.route('/MAI-daftar')
  .get(function (req, res) {
    res.render('MAI')
  })

  .post(function (req, res) {
    var nama = req.body.nama,
      nomorHp = req.body.nomorHp,
      institusi = req.body.institusi,
      email = req.body.email,
      insertQuery = 'insert into mai (nama, nomorHp, institusi, email) values (?,?,?,?);'
    con.query(insertQuery, [nama, nomorHp, institusi, email], function (err, rows, field) {
      if (err) {
        res.status(500).send
          (
            {
              status: 'err with err' + err
            }
          )
      }
      else {
        res.status(200).send
          (
            {
              status: 'success'
            }
          )
      }
    })
  })

router.route('/wd-daftar')
  .get(function (req, res) {
    res.render('webDesign')
  })

  .post(function (req, res) {
    var nama = req.body.nama,
      nomorHp = req.body.nomorHp,
      institusi = req.body.institusi,
      email = req.body.email,
      insertQuery = 'insert into webdesign (nama, nomorHp, institusi, email) values (?,?,?,?);'
    con.query(insertQuery, [nama, nomorHp, institusi, email], function (err, rows, field) {
      if (err) {
        res.status(500).send
          (
            {
              status: 'err with err' + err
            }
          )
      }
      else {
        res.status(200).send
          (
            {
              status: 'success'
            }
          )
      }
    })
  })

router.route('/qc-daftar')
  .get(function (req, res) {
    res.render('quesscomp')
  })

  .post(function (req, res) {
    var nama = req.body.nama,
      nomorHp = req.body.nomorHp,
      sekolah = req.body.sekolah,
      email = req.body.email,
      insertQuery = 'insert into quesscomp (nama, nomorHp, sekolah, email) values (?,?,?,?);'
    con.query(insertQuery, [nama, nomorHp, sekolah, email], function (err, rows, field) {
      if (err) {
        res.status(500).send
          (
            {
              status: 'err with err' + err
            }
          )
      }
      else {
        res.status(200).send
          (
            {
              status: 'success'
            }
          )
      }
    })
  })




router.route('/pubgm-daftar')
  .get(function (req, res) {
    res.render('pubgm')
  })

  .post(function (req, res) {
    var nama = req.body.nama,
      nomorHp = req.body.nomorHp,
      namaTim = req.body.namaTim,
      email = req.body.email,
      insertQuery = 'insert into pubgm (nama, nomorHp, namaTim, email) values (?,?,?,?);'
    con.query(insertQuery, [nama, nomorHp, namaTim, email], function (err, rows, field) {
      if (err) {
        res.status(500).send
          (
            {
              status: 'err with err' + err
            }
          )
      }
      else {
        res.status(200).send
          (
            {
              status: 'success'
            }
          )
      }
    })
  })


module.exports = router;