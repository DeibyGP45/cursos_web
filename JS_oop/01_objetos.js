const obj = new Object()

const pulga = 123
let garrapata

const animal1 = {
    nombre:'Rufo',
    edad: 3,
    raza: 'perro',
    parasitos: [pulga, garrapata]
}


const persona1 = {
    
    nombre: 'pepe',
    edad: 23,
    mascotas : [animal1]
}


animal1.peso = 12


/* const animal2 = ['Jake', 6,'caballo', 134]
 */
const animales = ['Rufo','Jake','Peggy']

const participantes = [persona1, animal1]

console.log(animal1)
console.log(animal1.nombre)
let propiedad = 'raza'
console.log(animal1['raza']) //Nunca se usa
console.log(animal1[propiedad])
