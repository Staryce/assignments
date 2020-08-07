const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const loc = process.argv[3]
const server = http.createServer((req, resp) => {
    if (req){
    fs.createReadStream(loc).pipe(resp)}
})
server.listen(port)