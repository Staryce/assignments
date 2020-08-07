const fs = require('fs')
const path = require('path')

const dirPath = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(dirPath, (err, files) => {
    if (err) return console.error(error)
    files.forEach(file => {
        if (path.extname(file) === ext)
        console.log(file)
        // const fileExt = path.extname(file)
    })
    
        // // if (fileExt === ext){
            
        // }
    
})

// check if the file extension matches the ext variable (frm process.argv)
// if it does, console.log the file