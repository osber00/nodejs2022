const write = require('fs')

const texto = "Texto a escribir en el archivo "
write.writeFileSync('./archivos/archivo3.txt',texto,{flag:'a'})