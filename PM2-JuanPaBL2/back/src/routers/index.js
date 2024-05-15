const {Router} = require('express')

const router = require('./router')

router.use('/', router) //-->gestiona las consultas que se hagan despues de /movie/

module.exports = router;