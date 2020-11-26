

function Direccion (calle, numero, ciudad, pais) {
    this.calle = calle
    this.numero = numero
    this.ciudad = ciudad
    this.pais = pais
    
}

function Mascota(nombre,especie) {
    this.nombre = nombre
    this.especie = especie
}



function Persona(nombre,edad,direccion) {
    this.nombre = nombre
    this.edad = edad
    this.direccion = direccion // Asociacion (atributos)
    this.mascota = []
}

Persona.prototype.comprarMascota = function (mascota) {
    this.mascota.push(mascota) //Depedencia (metodo)
} 

function Alumno(nombre, edad, direccion) {
    this.cursos = []
    Persona.prototype.constructor.call(this, nombre, edad, direccion)
}

Alumno.prototype = new Persona()

Alumno.prototype.constructor = Alumno

Alumno.prototype.inscribirse = function (curso) {
    this.cursos.push(curso)
}

//-------------------------------------------------------------------------

const a1 = new Alumno('Pepe',34,new Direccion('C/ Pez',7,'Cadiz','España'),
        'Pagina Web'
)

console.log(a1)
console.log(a1 instanceof Alumno)
console.log(a1 instanceof Persona)
console.log(a1 instanceof Object)
 Persona.prototype

const p1 = new Persona('pepe', 34,new Direccion ('C/ Pez',7,'Cadiz','España'));

const m1 = new Mascota('Amedio','mono')
const m2 = new Mascota('Lui','perro')

a1.inscribirse(`Paginas Web`)

p1.comprarMascota(m2) //Inyeccion de dependencia 
console.log(p1)
/*
console.log(m2.nombre)
console.log(p1.mascota[0].nombre) */



