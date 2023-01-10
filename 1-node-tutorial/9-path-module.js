const path = require('path')

//a separator property that returns a platform specific separator
console.log(path.sep)
// the path.join() method which joins a sequence of paths segments

const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath)

// basename() method to access the base file or root file
const base = path.basename(filePath)
console.log(base)

//to get the extension name of a file
const extensionName = path.extname(base)
console.log(extensionName)

//path.resolve() method -it accepts a sequence of paths or path segments and resolves it into an absolute path

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)