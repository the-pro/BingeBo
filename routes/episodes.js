const fileType = require('file-type')
const path = require('path')
const utils = require('../utils')
const fs = require('fs')
const pathToSeries = utils.path

exports.getEpisodes = () => async (req,res) => {
    try{
        let series = req.params.series
        let episodes = []
        let names = []
        let folder = path.resolve(pathToSeries,series)
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
    } catch(error) {
        res.status(404).json({
            message: "No such series found"
        })
    }
}