const fs = require('fs')
const utils = require('../utils')
const path = require('path')
const pathToSeries = utils.path

exports.getSeries = () => (req,res) => {
    try{
        let series = []
        let names = []
        let files =  fs.readdirSync(pathToSeries)
        if(files.length === 0){
            res.status(200).json({
                series: series,
                names: names
            })

            return
        }

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
    } catch(error) {
        res.status(404).json({
            message: "No directory found for the videos"
        })
    }
}