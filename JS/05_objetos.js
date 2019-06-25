//Si estamos en Java, C##, PHP ...
// Los objetos dependen de clases

// class Persona {}
// p1  = new Persona ()
// p2 = new persona()


//EN JS tenemos objetos literales
// basados en la notación JSON

let p1 = {
    nombre: 'pepe',
    edad: 33,
    direccion:{
        calle:'C/ pez',
        numero:'12',
        ciudad:'Madrid',
        pais:'España',
        
    },
    aficiones:['pintar','musica','montañismo'],
    isAlumno: true,

}

let p2 = {
    nombre: 'rosa',
    edad: 31,
    isAlumno: true,
    
}

p1.altura = 179
p1.colorPelo = "moreno"
console.log(p1)


console.log(p1.nombre)
console.log(p2.edad)
console.log(p1.aficiones[0])

let prop = 'edad'

console.log(p2[prop])

for(const prop in p2) {
    const value = p2[prop];
    console.log(`la propiedad prop ${prop} vale ${value}`)
}

console.log ("...............")

console.log('Mostrar ' + p1)

for(const prop in p2) {
    const value = p2[prop];
    console.log(`la propiedad prop ${prop} vale ${value}`)