const frisby = require('frisby')
const Joi = frisby.Joi

const URL = 'http://localhost:3000'

describe('/series', () => {
    it('POST retrieve all the series in the directory', () => {
      return frisby.post(URL + '/series')
        .expect('status', 200)
        .expect('jsonTypes', {
          series: Joi.array(),
          names: Joi.array()
        })
    })
  })