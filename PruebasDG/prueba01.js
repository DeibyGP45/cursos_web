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

    const fecha = new Date()
    const america = new Date(1999, 7, 4) 
    const zx = new Date('1996-12-22')


    console.log(fecha.valueOf())
    console.log(america.valueOf())
    console.log(zx)

    let meses = (fecha.getMonth()) //+1
     meses = meses +1

console.log(meses)



