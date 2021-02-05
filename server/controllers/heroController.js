const uuid = require('uuid')
const path = require('path')
const {Hero} = require('../models/models')


class HeroController {
  async create(req, res){
    try {
      let {feature, name, featureTypeId} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const hero = await Hero.create({feature, name, featureTypeId, img: fileName})

      return res.json(hero)
    } catch (e) {
      console.log(e)
    }
  }

  async getAll(req, res) {
    const heroes = await Hero.findAll()
    return res.json(heroes)
  }
}

module.exports = new HeroController()