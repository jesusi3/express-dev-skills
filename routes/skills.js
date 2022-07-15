var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

//GET /
router.get('/', skillsCtrl.index);
//Get /skills/new
router.get('/new', skillsCtrl.new);
//GET /:id
router.get('/:id', skillsCtrl.show);
//Get /
router.post('/', skillsCtrl.create);
//Delete functionality
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
