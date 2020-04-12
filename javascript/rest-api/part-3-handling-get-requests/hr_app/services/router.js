const express = require('express');
const router = new express.Router();
const employees = require('../controllers/employees.js');
const meta = require('../controllers/meta.js');
const equipe = require('../controllers/equipe.js');

router.route('/employees/:id?')
  .get(employees.get);


router.route('/meta/:codigo?')
  .get(meta.get);


router.route('/meta/equipe/:equipe?')
  .get(meta.get);


router.route('/equipe/:codigo?')
  .get(equipe.get);


module.exports = router;
