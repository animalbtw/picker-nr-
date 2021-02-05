const Router = require('express')
const router = new Router()
const heroRouter = require('./heroRouter')
const featureRouter = require('./featureRoute')

router.use('/hero', heroRouter)
router.use('/heroFeature', featureRouter)

module.exports = router;