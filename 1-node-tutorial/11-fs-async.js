//there are two ways when it come to fs module (asynchronously/non-blocking or synchronously/blocking)
//synchronous way of using fs module
const {readFile, writeFile} = require('fs');

console.log('start')
readFile('./content/first.txt', 'utf8',(err,result) => {
    if(err){
        console.log(err)
        return;
    }
    //console.log(result)
    const first = result
    readFile('./content/second.txt','utf8',(err,result) => {
        if(err){
            console.log(err)
            return;
        }
        const second = result
        writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,(err,result) => {
           if(err){
             console.log(err)
             return;
           }
           console.log('done with this task')
        })
    })
})

console.log('starting next task')