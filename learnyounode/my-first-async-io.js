const fs = require('fs')

fs.readFile(process.argv[2], 'utf-8', (err, text) => {
    if (err) return console.log(err)
    

   console.log(text.split('\n').length-1)

})
    
    // const contents = fs.readFile(process.argv[2])
    // const lines = contents.toString().split('\n').length - 1
    // console.log(lines)
