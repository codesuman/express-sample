const express = require('express');
const router = express.Router();

const {getBook} = require('../controller/book')

router.route('/:id')
    .get(getBook)

module.exports = router;

