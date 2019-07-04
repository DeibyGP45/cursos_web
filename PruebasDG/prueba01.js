'use strict'

let anumbers = [45, 38, 28, 13, 83]

/**
 * 
 * @description ordenar los numeros en orden
 * @param {number}
 * @returns {Array}
 */

 function ordenar(n) {
    n.sort((a,b) => a-b)
    console.log(n)
     
 }
    console.log(ordenar(anumbers))