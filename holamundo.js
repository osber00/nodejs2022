console.log('Hello World')

const semana = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']

const newSemana = semana.map(dia => `Día ${dia}`)
const filtro = semana.filter(hoy => {
    if (hoy != 'jueves') {
        return hoy
    }
})

const infoUser = (nombre,email)=>{
    return `El nombre del usuario es ${nombre} y su email es ${email}`
}



console.log(newSemana)
console.log(filtro)
console.log(infoUser('Marcos López','marcos@example.com'));
console.log(__dirname);
console.log(__filename);
console.log(process);