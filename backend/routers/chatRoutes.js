const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');


router.post('/:pid',chatController.chat);
router.get('/getchat/:pid', chatController.getchat);

module.exports = router;