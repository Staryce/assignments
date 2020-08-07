const myModule = require('./mymodule.js')

const dirPath = process.argv[2]
const ext = process.argv[3]


// mymodule(dirPath, ext, (err, files) => {
   
// })

myModule(dirPath, ext, (err, aRay) => aRay.forEach(file => (console.log(file))))

// if (err) return console.log(err)