let aDatos = [1,2,3,4,5,6,7,8,9]

//Ejemplo e iteración y condición

let limite = 10
let maximo = 100
let acumulador = 0
let contador = 0


for (let i = 0; i < limite; i++) {
    contador = i
    console.log(i)
    if(acumulador + (i*i) > maximo){
        break
    }
    acumulador += (i*i)
}


console.log (acumulador, contador)

/**JSDoc
 * Saber si un numero es múltiplos de tres,
 * Seleccionar en un array los que lo sean, 
 * guardarlos en otro array y mostrarlo por pantalla
 * 
 */


 /**function isMultiplo
  * @description calcula devuelve true si un numero m es multiplo de n
  * @param {number}: m
  * @param {number}: n
  * @returns {boolean}
  */
function isMultiplo(m = 0,n = 0) {
    let r = true
    if (n%m) { // n%m != 0
        r = false
    }
    return r
}

//Espectativas
//isMultiplo(2,20) -> true
console.log('isMultiplo(2,20) debe dar true')
//Prueba
console.log(isMultiplo(2,20))


//Espectativas
//isMultiplo(2,21) -> false
console.log('isMultiplo(2,21) debe dar false')
//Prueba
console.log(isMultiplo(2,21))

//Espectativas
//isMultiplo(3,21) -> false
console.log('isMultiplo(3,21) debe dar true')
//Prueba
console.log(isMultiplo(3,21))

//Espectativas
//isMultiplo(3,-21) -> false
console.log('isMultiplo(3,-21) debe dar true')
//Prueba
console.log(isMultiplo(3,-21))


/** funcion extraerMultiplos
 * @description extraer de un array los multiplos de n
 * @param {number}: n
 * @param {array}: aDatos
 * @returns {array}
 */

 function extraerMultiplos (n, aDatos) {

    let x = []
    return r
 }







//if (n%m == 0) //if (!(n%m))

isMultiplo()




{/*

console.log(i)

for (let i = 0; i < array.length; i++) {
    const element = array[i];
}
n%3 == 0 */}

