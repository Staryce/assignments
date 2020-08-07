const http = require('http')
const port = 8001
const fs = require('fs')

const server = http.createServer((req, resp) => {
    const url = new URL('https://' + port + req.url)
    const path = url['pathname']
    
    if (path == '/messages') {
        
            fs.readFile("messages.txt",(err, data) => {
                const jsonResponse = {
                    "messages": data.toString(),
                }
                // console.log("jsonResponse")
                console.log(data.toString())
                // if (err)
                resp.writeHead(200, { 'Content-Type': 'application/json' })
                resp.write(JSON.stringify(jsonResponse))
                resp.end()
                //     console.log(err)
                //     cb(err, data)
                //     return(JSON.parse(data.toString()))
                    
            })
        // console.log(msg1)
        
    }    

})

server.listen(port)