const http = require('http')
const map = require('through2-map')
const port = process.argv[2]
const server = http.createServer((req, resp) => {
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(resp)
})
server.listen(port)