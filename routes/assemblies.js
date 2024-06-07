const express = require('express');
const router = express.Router();
const assembliesController = require('../controllers/assemblies');

router.post('/', assembliesController.createAssembly);
router.get('/', assembliesController.getAssemblies);
router.get('/:id', assembliesController.getAssemblyById);
router.put('/:id', assembliesController.updateAssembly);
router.delete('/:id', assembliesController.deleteAssembly);

module.exports = router;