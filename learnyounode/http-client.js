const http = require('http')

let url = process.argv[2]
// console.log(url)
http.get(url, response =>{
    response.on('data', function(data){
        console.log(data.toString())
    })
})