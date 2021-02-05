const Router = require('express')
const router = new Router()
const heroController = require('../controllers/heroController')

router.get('/', heroController.getAll)
router.post('/', heroController.create)

module.exports = router