
/**
 * 1 - Funcion booleana que comprueba que un valor puede ser tratado como numero 
 * 
 * 2 - funcion que comprueba que es un numero válido para poder calcular un factorial
 * 
 * 
 * 3- Función que calcula el factorial de un numero 
 *          en caso de valores no validos , genera un error
 * 
 * 4- funcion que muestra (renderiza) los resultados  por pantalla 
 * 
 * Al menos las 2 primeras, realizar test unitarios
 * 
 */

/**
 * @description Funcion booleana que comprueba que un valor puede ser tratado como numero 
 *
 * @param {number} n 
 * 
 * @returns {boolean}
 */
function isValidNumber (n) {

let r = true

    if (
        typeof n == 'boolean' ||
        typeof n == 'string'||
        typeof n == 'object'||
        typeof n == NaN
        ) {
            r = false
        }


    return r
    
}

console.log(isValidNumber(45))

/* function ComprobarFactorial () {
    
} */


/** --3---
 * @descriptionFunción que calcula el factorial de un numero 
 *          en caso de valores no validos , genera un error
 * @param {*} n 
 */
function calcularFactorial(n = 0) {

let r = 0

let factorial

return r
    
}