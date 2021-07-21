const fs = require('fs')
const fileType = require('file-type')
const path = require('path')
const pathToSeries =path.resolve( __dirname,'frontend/src/assets/series')

exports.getSeries = () => (req,res) => {
    try{
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
    } catch(error) {
        res.status(404).json({
            message: "No directory found for the videos"
        })
    }
}