'user strict'


let version = 'ES6'

let cadena = "Esto no es buena practica"
let otraCadena = 'Es mejor usar comillas simples'
let nuevaCadena = `Nuevo en ${version}` //Template String


let c = console.log(cadena, otraCadena,nuevaCadena)

console.log(cadena.toUpperCase())


console.log(cadena.length)
console.log(cadena[0])

for (let i = 0; i < cadena.length; i++) {
const item = cadena[i];
  console.log(item)  
}



let x = cadena.split(' ').join('').toUpperCase()
console.log(x)

/* cadena.slice(inicio, final)
cadena.substr(inicio, final)
cadena.substring(inicio, desplazamiento)

cadena.match()
cadena.search()
cadena.replace()

cadena.indexOf(clave)
cadena.lastIndexOf(clave)

cadena.charAt(position) //cadena [position]
cadena.charCodeAt(position)

String.fromCharCode(num) */
console.clear()
let numero = 23.7865432
console.log(numero)
console.log(numero.toString())
console.log(numero.toFixed(2))
console.log(numero.toPrecision(4))

console.log(numero.toExponential())
console.log(numero.toLocaleString('es-ES',{style: 'currency', currency: 'EUR'}))