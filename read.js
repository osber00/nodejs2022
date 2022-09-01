const fs = require('fs')

const archivo1 = fs.readFileSync('./archivos/archivo1.txt','utf-8')
const archivo2 = fs.readFileSync('./archivos/archivo2.txt',{
    encoding: 'utf-8'
})

console.log(archivo1);
console.log(archivo2);