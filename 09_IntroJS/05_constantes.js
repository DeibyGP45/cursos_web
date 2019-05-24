let a = 4
console.log (a)
a = 5
console.log (a)
a = 6
console.log (a)
a =  564
console.log (a)

// ES6

const b = 6

if (true) {
    const c = 7 
    console.log(b) //6
    console.log(c) //7

}

console.log(b) //6
// console.log(c) //Error

//////////////

const datos =  [10, 22, 36]
const persona = {nombre: 'pepe', edad: 22}

datos [datos.length] = 63
datos.push(43)

persona.altura = 178
persona.edad = 23
 
console.log(datos)
console.log(persona)