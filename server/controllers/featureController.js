const {FeatureType} = require('../models/models')

class FeatureController {

  async create(req, res) {
    const {feature_type} = req.body
    const type = await FeatureType.create({feature_type})
    return res.json(type)
  }

  async getAll(req, res) {
    const type = await FeatureType.findAll()
    return res.json(type)
  }
}

module.exports = new FeatureController()