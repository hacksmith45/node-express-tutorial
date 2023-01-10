const http = require('http');

/* const server = http.createServer((req,res) => {
    res.write('welcome to our server')
    res.end()
}) */


//using EVENT EMITTER 
const server = http.createServer()
//emits request event
//subscribe to it / listen for it / respond to it

server.on('request',(req,res) => {
  res.write('welcome');
  res.end();
})

server.listen(5000)
