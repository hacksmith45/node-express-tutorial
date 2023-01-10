//there are two ways when it come to fs module (asynchronously/non-blocking or synchronously/blocking)
//asynchronous way of using fs module
const {readFileSync, writeFileSync} = require('fs');
//console.log('start')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first,second)

writeFileSync('./content/result-sync.txt',`Here is the  : ${first}, ${second}`,{ flag:'a' })

//console.log('done with this text')
//console.log('starting the next one')