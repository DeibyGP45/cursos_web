'user strick'

// Valores primitivos
// (number, string, boolean, undefined)

let tonta

tonta = 4

let a = 2
let b = a // asignación de Valor 

console.log('Al crear b',a,b)

b = b * b 
a = a / 2

console.log('valor de b', b) //4
console.log('valor de  a', a) //1

//Valor referenciados

let p1 = {nombre: 'epe', edad: 34}

let p2 = p1 // Asignacion de referencia 
p1.nombre ='Juan'

console.log (p1) //

console.log (p2)

//////

let a1 = {nombre: 'Raquel', edad: 34}
let a2 = {nombre: 'Maria', edad: 45}
let a3 = {nombre: 'Juan', edad: 19}


function inscribirEnJs(alumno) {

    if (alumno) {

    alumno.curso= 'JS'
}

}

inscribirEnJs(a1)
inscribirEnJs(a2)
inscribirEnJs(a3) // paso por referencia
console.log(a1)
console.log(a2)
console.log(a3)

////

function sumar (a,b) {return a + b}

sumar(3,7)

////////

let saldo = 1000

function invertir (x) {
    let z = Math.random ()
    let rendimiento = (x + z) / 10
    return (x + rendimiento).toFixed(2)
    //x = x * 2
     return x
    }

    let z = invertir(500)

saldo = invertir(saldo) // Paso por valor 

console.log(saldo)