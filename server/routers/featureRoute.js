const Router = require('express')
const router = new Router()
const featureController = require('../controllers/featureController')

router.post('/', featureController.create)
router.get('/', featureController.getAll)

module.exports = router