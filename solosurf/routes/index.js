var express = require('express');
var router = express.Router();
var genController = require('../controller/general_controller');
router.get('/', genController.showView);

module.exports = router;
