// Should every message have its own file? NO
// Should every message be appended to one file? YES
// What metadata should we store along with the message (date/time, etc.)? USERNAME
// What format should we store data (one line per message, csv, JSON, etc.)? json file

const http = require('http') //package
const port = 8001
const fs = require('fs')    //package

const server = http.createServer((req, resp) => {
    const url = new URL('https://' + port + req.url)
    const path = url['pathname']
   
    if (path == '/messages' && req.method == 'GET') {
            console.log(req.body)
            fs.readFile("messages.json",(err, data) => {
                // const jsonResponse = { //this is a JSON obj we are creating
                //     "messages": data.toString(),
            
                // }
                // console.log("jsonResponse")
                console.log(data.toString())
                // if (err)
                resp.writeHead(200, { 'Content-Type': 'application/json' })
                
                resp.write(data.toString())
                
                
                resp.end()
                //     console.log(err)
                //     cb(err, data)
                //     return(JSON.parse(data.toString()))
                    
            })
        // console.log(msg1)
       
    } else if (path == '/messages' && req.method == 'POST'){
        console.log('here')
        console.log(req.body)
        const text = url.searchParams.get('text')
        fs.readFile('messages.json', (err, data) => {
            if (err) {
                res.write(500)
                resp.end()
            }
            
            data = JSON.parse(data)
            const message = {
                text: text,
                username: data.username
            }
            data.messages.push(message)

            
        })
        resp.writeHead(200, { 'Content-Type': 'application/json' })
        resp.end()
        

    } else{ //(path == '/massages') 
        resp.writeHead(404)
        resp.write('Nice try, hehe')
        resp.end()
    }


})

server.listen(port)

// have it sorted by user,
//then have those separated by message

//each msg will have a date and time

//one user tied to many messages - one -to-many

//as a person adds, it gets added to db
