
/**
 * 
 * @description recoge un objeto a tantos niveles como contenga
 *              y vrea un string con la informacion
 * @param {object} obj
 * @returns {string} 
 */

 function objectToString(obj = {}) {
     let cadena = ``
     for (let key in obj) {
         if (obj.hasOwnProperty(key)) {
             const value = obj[key];
             if (typeof value == 'object' && !Array.isArray(value)) {
                 cadena += `${key}: ${objectToString(value)}`
                    
             } else if (Array.isArray(value)) {

            
             }
             
            else {
                if ( !isNaN(key)) {key++}
                 cadena += `${key}: ${value}
`
             }
             
             
         }
     }
     return cadena
 }

 let p2 = {
    nombre: 'rosa',
    edad: 31,
    isAlumno: true,
    
}

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

let cadena = objectToString(p1)
console.log(cadena)

console.log ("...............")

let aDatos = ['perro','gato']

for (const i in aDatos) {
    if (aDatos.hasOwnProperty(i)) {
        const value = aDatos[i];
        console.log(`la propiedad prop ${i} vale ${value}`)
        
    }
}