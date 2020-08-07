const net = require('net');
// takes in port from command line
port = process.argv[2]
// create server takes a callback function, passing the socket
const server = net.createServer(function(socket){
    // arguement in socket.end calls socket.write ; here we write to the socket our function
    socket.end(getFormattedDate() + '\n') 
})
function getFormattedDate(){
    let date = new Date()
    let year = date.getFullYear()
    let month = ("0" + (Number(date.getMonth()) + 1)).slice(-2) // starts at 0
    let day = ("0" + Number(date.getDate())).slice(-2) // returns the day of month
    let hours = ("0" + Number(date.getHours())).slice(-2)
    let minutes = ("0" + Number(date.getMinutes())).slice(-2)
    let full = `${year}-${month}-${day} ${hours}:${minutes}`
    return full
}
// begins listening at the port provided by the command line
server.listen(port)