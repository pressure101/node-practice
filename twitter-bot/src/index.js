import { createServer } from 'http'

createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/plain'})
    response.end('Hello you beautiful soul.\n')
}).listen(8080)

console.log('Server running on port 8080')