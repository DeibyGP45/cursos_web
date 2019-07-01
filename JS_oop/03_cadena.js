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

