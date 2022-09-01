import path from "path";

const archivo = path.join('public','/dist','\image','main.css');
console.log(archivo);
console.log(path.basename(archivo));
console.log(path.dirname(archivo));
console.log(path.parse(archivo));