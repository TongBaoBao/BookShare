const express = require('express')
const router = express.Router()
const userApi = require('./api/user')

const router = express.Router();

router.post("/api/user/login",userApi.loginByUserName);

module.exports = router;
