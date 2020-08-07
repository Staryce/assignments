const http = require('http')
const bl = require('bl')
// const concat = require('concat-stream')
let url = process.argv[2]
http.get(url, function (response) {
    response.pipe(bl(function(err, data) {
        if (err) {
            return console.error(err) 
            
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)    
    }
    ))
})
//     let count = 0
//     let concat = ''
//     response.on('data', (snip => {
//         // console.log(snip)
//         count += snip.length
//         concat += snip
//     }))
//     response.on('end', () => {
//         console.log(count)
//         console.log(concat)
//     })
// }