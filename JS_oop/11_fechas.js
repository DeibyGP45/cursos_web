
let x = {} //new Object()

let a = [] //new Array()

new String()

let c = 'pepe'
c.toLocaleUpperCase() // implícitamente new String (c)
let n = 223
n.toFixed(2) // implícitamente new Number(n)

function algo() {} // new function()

// otros Objetos 

const d = new Date()
const e = new Error('msg')
const r = new RegExp()
const r1 = / /

// Objetos no instanciables

Math.random()
Math.PI
// JSON.stringify
// JSON.parse()

const fecha = new Date()
const america = new Date(1492, 6, 4)
const zz = new Date(62252763449)
const zx = new Date('1971-12-22')


console.log(fecha.valueOf())
console.log(america.valueOf())
console.log(zz)
console.log(zx)

// Mostrar fechas 

console.log(fecha)
console.log(fecha.toString())
console.log(fecha.toUTCString())
console.log(fecha.toJSON())
console.log(fecha.toLocaleString())
console.log(fecha.toUTCString())
console.log(fecha.toDateString())

// Operaciones con las fechas

// get | getters
// set | setters


console.log(fecha.getTime())
console.log(fecha.getTimezoneOffset())
console.log(fecha.getMonth())
console.log(fecha.getDay())
// console.log(fecha.setDate())
console.log(fecha.getFullYear())

console.clear()

/** Function fechaEs
 * @description función que recibe una fecha en formato Español
 * @param {string} 
 * @returns {string} msg
 * 
 *  */



function fechaEs(fecha =  '') {
    
let ameses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 

let adias = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

     if (typeof fecha === 'string') {
         fecha = new Date (fecha)
        }

  

     let sMes = ameses[fecha.getMonth()]
     let sSemana = adias[fecha.getDay()]
     let sDia = fecha.getDate()
     let sYear = fecha.getFullYear()



   

    return msg = `Hoy es ${sSemana} ${sDia} de ${sMes} de ${sYear}`
    

}
let f = '1996-2-16'
console.log(fechaEs(f))


//
function fechaEspShort(fecha) {
    return no
}
