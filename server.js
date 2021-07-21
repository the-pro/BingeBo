const express = require('express')

const app = express()
const fs = require('fs')
const process = require('process')
const cors = require('cors')
const episodes= require('./routes/episodes')
const series= require('./routes/series')
app.options('*', cors())
app.use(cors())

app.post('/series',series.getSeries())
app.post('/episodes/:series',episodes.getEpisodes())

app.listen(process.env.port || 3000)