var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

//GET /
router.get('/', skillsCtrl.index);
//GET /:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
