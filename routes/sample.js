const express = require('express');
const router = express.Router();

const {getSample} = require('../controller/sample')

router.route('/')
    .get(getSample)

module.exports = router;

