const express = require('express');
const router = express.Router();
const partsController = require('../controllers/parts');

router.post('/', partsController.createPart);
router.get('/', partsController.getParts);

module.exports = router;