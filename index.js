const express = require('express')

const app = express()
const fs = require('fs')
const fileType = require('file-type')
const path = require('path')
const cors = require('cors')
const pathToSeries =path.resolve( __dirname,'frontend/src/assets/series')
app.options('*', cors())
app.use(cors())
app.post('/series',(req,res) => {
    let series = []
    let names = []
    let files =  fs.readdirSync(pathToSeries)
    for(const file of files){
        let currFile = path.resolve(pathToSeries,file)
        if(fs.lstatSync(currFile).isDirectory()){
            series.push(currFile)
            names.push(file)
        }
    }

    res.status(200).json({
        series: series,
        names: names
    })
})

app.post('/episodes/:series',async (req,res)=> {
    let series = req.params.series
    let episodes = []
    let names = []
    let folder = path.resolve(pathToSeries,series)
    console.log(folder)
    let files = fs.readdirSync(folder)
    for(const file of files){
        let currFile = path.resolve(folder,file)
        let type = await fileType.fromFile(currFile)
        if(type.mime.startsWith('video')){
            episodes.push(currFile)
            names.push(file)
        }

    }

    res.status(200).json({
        episodes: episodes,
        names:names
    })
})

app.listen(3000)