const yaml = require('js-yaml')
const fs = require('fs')
const path = yaml.load(fs.readFileSync('config.yml', 'utf8'))

exports.path = path.path