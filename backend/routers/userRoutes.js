const express = require('express');
const { getMyData, updateMyData, getMyProjects, getUserById } = require('../controllers/userController');
const router = express.Router();

router.get('/my',  getMyData);

router.put('/my',  updateMyData);

router.get('/my/project',  getMyProjects);

router.get('/:userid',  getUserById);

module.exports = router;