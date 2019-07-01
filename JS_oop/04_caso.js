'use strict'



/** function comprobarCaso
 * @description: Comprobar si la cadena tiene:
 *  solo mayúsculas (0)
 *  solo minúsculas (1)
 *  mayúsculas y minúsculas (2)
 * 
 * @param {strict} cadena
 * @returns {number}
 * 
 */

 function comprobarCaso(cadena = '') {
     let r = 2
    if (cadena === cadena.toUpperCase()) { //eres solo may
        r = 0
    } else if (cadena === cadena.toLowerCase()) { //eres solo minus
        r = 1
    }
     return r
 }

 function mostrarComprobacionDeCaso (cadena = '') {
     const msg =[
    'Solo mayúsculas',
    'Solo minusculas',
    'mayusculas o minusculas'
    ]
    console.log(msg[comprobarCaso(cadena)])
 }

 mostrarComprobacionDeCaso()


module.exports = {}
module.exports.comprobarCaso = comprobarCaso
module.exports.mostrarComprobacionDeCaso = mostrarComprobacionDeCaso




    //////////


/*  let cadena = ''


 for (let index = 0; index < array.length; index++) {
     const element = array[index];
     
 } */