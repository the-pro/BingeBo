const frisby = require('frisby')
const Joi = frisby.Joi

const URL = 'http://localhost:3000'

describe('/episodes/:series', () => {
    it('POST retrieve episodes for a given series', () => {
      return frisby.post(URL + '/episodes/NoSuchSeries')
        .expect('status', 404)
        .expect('jsonTypes', {
          message: Joi.string()
        })
        .expect('json',{
            message: "No such series found"
        })
    })
  })