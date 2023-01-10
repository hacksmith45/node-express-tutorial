const http = require('http')
const fs = require('fs')


 http.createServer((req,res) => {
     const filestream = fs.createReadStream('./content/big.txt','utf8')
     filestream.on('open',() => {
     filestream.pipe(res)
     })
     filestream.on('error',(err) => {
          res.write(err)
          res.end()
     })
}).listen(5000)