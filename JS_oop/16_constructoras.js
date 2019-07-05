
//Objeto JSON o literal

const saludo = 'Hola amigos'

console.log('Hola amigos')

const p1 = {
    nombre: 'Pepe',
    edad:23,
    altura: 178,
    país: 'España',

}


function Persona(nombre, edad, altura, pais) {
    this.cerebro = true
    this.nombre = nombre
    this.edad = edad
    this.altura = altura
    this.pais = pais
    this.profesion = ''
}
Persona.prototype.cerebro = true

Persona.prototype.saludar = function (otro = 'amig@') {
        let msg = `Hola ${otro}, soy ${this.nombre}`
        console.log(msg)
        }

Persona.prototype.serContratado = function (puesto) {
        this.profesion = puesto
        }        


const p2 = new Persona('Pepo', 23, 180 ,'Bulgaria')
const p3 = new Persona('pepa', 27, 179, 'Italia')
/* delete p2.cerebro
p2.ia = true */

console.log(p1)
console.log(p2)
console.log(p3)

p2.serContratado('medico')
p3.serContratado('CEO')
p2.cerebro = false

p2.saludar(p3.nombre)
p3.saludar(p2.nombre)

console.log(p2.cerebro)


console.log('p1', p1 instanceof Persona)
console.log('p2', p2 instanceof Persona)
console.log('p3', p3 instanceof Persona)