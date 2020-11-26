


/**función formatoDni 
 * @description Dar formato numero al DNI
 * @param {number | string} dni
 * @returns {number}
 */

 function formatoDni(dni) {
    if (typeof dni === 'number'){ return dni}
    let r = 0
    let cadenaDNI = ''
    for (let i = 0; i < dni.length; i++) {
        const caracter = dni[i];
            if (  caracter != ' ' && !isNaN(caracter)) { //Se añaden dos reglas tanto para las separaciones como para los demás caracteres
                cadenaDNI += caracter
            }
        
    }
    return Number(cadenaDNI)
     
 }

/**función 
 * @description función que devuelve una letra según 
 * @param {number | string} dni
 * @returns {string}
 */

console.clear()

 function letraDNI(dni) {
const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
let r = ''
return aLetras[formatoDni(dni)%23]

 }


 export function comprobarDNI () {


    const letraUser = cadena[cadena.length -1]
    const letraCalculada = letraDNI(cadena)

     return (letraUser.toUpperCase() === letraCalculada.toUpperCase())

 }