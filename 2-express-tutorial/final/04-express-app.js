const express = require('express');
const path = require('path')
const app = express();

//setup static and middleware
app.use(express.static('./public'))



app.get('/',(req,res) => {
res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//you can also add to static assets
//SSR-where will use template engines
})


app.all('*',(req,res) => {
    res.status(404).send('resource not found')
})

app.listen(5000,() => {
    console.log('server is listening on port 5000....')
})