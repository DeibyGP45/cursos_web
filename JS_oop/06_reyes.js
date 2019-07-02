{
// Saber si x esta dentro de la lista // comprobar en que posicion esta // si no se encuentra , false


/** function Comprobar
 * @description Saber si nombre esta dentro de la lista // 
 * @param {string} nombre
 * @returns {Array}
 */
const aReyes = ['Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose','Amadeo','Alfonso','Juan Carlos']

function isNombreRey(nombre) {
    
        for (let i = 0; i < aReyes.length; i++) {
        const item = aReyes[i];
                if ( nombre.toUpperCase() == item.toUpperCase()) {
                return [true,i]
            } 
        }
        return [false, -1]
}

function mostrarIsRey(nombre) {

    isNombreRey(nombre)

    let [isRey, position] = isNombreRey(nombre)

    const mensajes = [
        `El nombre ${nombre.toUpperCase()}, no ha sido usado por ningun rey de España`,
        `El nombre ${nombre.toUpperCase()}, ha sido usado por algun rey de España y es el numero ${++position} de la lista`

    ]


    console.log(mensajes[+isRey])
}

    //mostrarIsRey('fernandao')
    //mostrarIsRey()
    //mostrarIsRey('luis')

    console.log(aReyes.indexOf('Fernando'))

    // ES 2016 (ES7)

    console.log(aReyes.includes('Fernando'))
 }