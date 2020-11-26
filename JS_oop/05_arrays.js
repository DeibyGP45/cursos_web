let objeto = {} //new Object()


let aDatos = [2, 8, 9 , 76, 'pepe'] // new Array()

// aDatos[aDatos.length] = [87, 90]
//aDatos[aDatos.length] = 56

aDatos.push(87,56)

aDatos[100] = 9

console.log (aDatos[78])


/** función randomArray
 * @description función que devuelve un array de n numeros aleatorios enteros y positivos menores o iguales a 100
 * @param {number} n
 * 
 * @returns {Array}
 */

function randomArray(n = 0) {
    const r = []
        for (let i = 0; i < n; i++) {
        r[i] =  parseInt(Math.random() * 100)
    }
    
    return r
}

console.log(String(randomArray(20)))

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
console.log(letraDNI('50324945'))
console.log(letraDNI('50.324.945'))
console.log(letraDNI('0050324945'))
console.log(letraDNI('50 32 49 45'))
console.log(letraDNI('50/32-494.5'))


