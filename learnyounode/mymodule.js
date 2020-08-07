const fs = require('fs')
const path = require('path')

// const dirPath = process.argv[2]
// const ext = process.argv[3]

function myModule(dirPath, ext, callback) {
    const aRay = []
    fs.readdir(dirPath, (err, files) => {
        if (err) return callback(err)

        files.forEach(file => {
            if (path.extname(file) === '.' + ext)
            aRay.push(file)
            // console.log(file)
            
            
        })
        callback(err, aRay)
        
    })
}
module.exports = myModule