const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController'); // Adjust the path as necessary

router.post('/add', projectController.addProject);
router.put('/:pid/edit', projectController.editProject);
router.delete('/:pid/delete', projectController.deleteProject);
router.get('/visible',projectController.getAllProjects);
router.get('/:pid',projectController.getOneProject);
router.post('/vote', projectController.voteProject);
router.post('/copy/:pid',projectController.copyProject);
module.exports = router;

