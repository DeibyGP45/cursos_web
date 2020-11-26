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
    if(isNaN(m) || isNaN(n)) {
        throw new Error ('Paramentros no numericos')
    }
    let r = true
    if (m%n) { // m%n != 0
        r = false
    }
    return r
}



/**
 * @description  Muestra un array con los multiplos de n
 * @param {number} n 
 * @param {array} aDatos 
 * @returns {void}
 */
function mostrarMultiplos(n,aDatos) {
    console.log(`los multiplos de ${n}`)
    console.log(`En el array ${aDatos} son`)
    console.log(extraerMultiplos(n,aDatos))
}

/** funcion extraerMultiplos
 * @description extraer de un array los multiplos de n
 * @param {number}: n
 * @param {array}: aDatos
 * @returns {array}
 */


 function extraerMultiplos (n = 0, aDatos = []) {

    let r = []
for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    if (isMultiplo(item,n)) {
        /* r[r.length]= item */
        r.push(item)
        
    }
}
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

module.exports = {}
module.exports.isMultiplo = isMultiplo
module.exports.extraerMultiplos = extraerMultiplos
module.exports.mostrarMultiplos = mostrarMultiplos

{
   let aDatos = [1,2,3,4,5,6,7,8,9]
   mostrarMultiplos(2,aDatos)
}
