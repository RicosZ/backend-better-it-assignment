const express = require("express");
// const session = require('express-session')
const WordController = require("../controllers/words.controller");
const router = express.Router();

router.post('/add',WordController.addWord);
router.delete('/delete',WordController.deleteWord);

router.get('/get',WordController.getWordByCategoryId);

module.exports = router;