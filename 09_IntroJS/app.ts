console.log ('Hola amigos')

//Tipos primitivos

undefined //tipo undefined

20 // Tipo number
'Alejandro' // Tipo string
true //Tipo boolean

// Tipos complejos y referenciados

// {nombre: 'pepe',"edad": 27} Tipo objeto

//Tipado fuerte o débil
// Tipado estático o dinamico

// JS es de tipado débil y dinamico

// En TypeScript el tipado puede ser fuerte
let b: number // Tipo number , sin valor 
b = 3
/* b = 'pepe' Error de tipos */ 

/* a: Int //Tipo int, sin valor
a = 3
a = 'pepe' // */

let a 
console.log (a)
console.log (typeof a) // Undefined
a = 2
console.log (a)
console.log (typeof a) // number
a = 25
console.log (a)
console.log (typeof a) 
a = 'pepe' // "pepe"
console.log (a)
console.log (typeof a)
a = false 
console.log (a)
console.log (typeof a)

let precio = 45.60
let producto = 'gafas'
/* precio = producto error de tipos */
 