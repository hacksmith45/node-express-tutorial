//http module for setting up our web server
const http = require('http')

//it contains two objects which are parameters
//the first parameter represents the incoming request and the second is what we are sending back
const server = http.createServer((req,res) => {
  if(req.url === '/'){
     res.write('Welcome to our home page')
     res.end()
  }
  else if(req.url === '/about'){
     res.write('Welcome to our about page')
     res.end()
  }
  else{
    res.write(`<h1>Oops!!!</h1> <p>we cant seem to take your request</p> <a href="/">Back Home</a>`)
    res.end()
  }
 
 
})


server.listen(5000)