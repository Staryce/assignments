const http = require('http')
const port = process.argv[2]


const server = http.createServer((req, resp) => {
    const url = new URL('https://' + port + req.url)
    const iso = url['searchParams'].get('iso')
    const date = new Date(iso)
    resp.writeHead(200, { 'Content-Type': 'application/json' })
    // console.log(date)
    const path = url['pathname']
    if (path == '/api/parsetime') {
        const jsonResponse = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds(),

        }
        resp.write(JSON.stringify(jsonResponse))
    }
    // console.log(path)
    if (path == '/api/unixtime') {
        const jsonResponse = {
            "unixtime": date.getTime(),
        }
        resp.write(JSON.stringify(jsonResponse))
    }
    
    // console.log(path)


    // console.log(iso)





    resp.end()
})


server.listen(port)