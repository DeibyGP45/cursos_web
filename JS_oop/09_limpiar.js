/** function limpiar
 * 
 * @description  devuelve un array eliminando los nombres
 *  que empiecen por una letra determinada del array de recibe 
 * @param {String} letra
 * @param {array} aNombres
 * @returns {array}
 */

 function limpiar(letra = '', aNombres = []) {

     const datos = aNombres.slice()

    for (let i = 0; i < aNombres.length; i++) {
        const item = aNombres[i];
        if (item[0].toUpperCase() === letra.toUpperCase()) {
            aNombres.splice(i, 1)
            i--

        }

    }
 return datos
     
 }

 let aUsuarios = ['Rosa', 'Raquel', 'Elena', 'Maria']

 let l = 'r'

console.clear()
console.log(limpiar(l,aUsuarios))
console.log(aUsuarios)





//PARÁMETROS y ELEMENTALES

function algo(h) {

    h = h * h
    return h
}

let z = 4
algo(z)
console.log (z)
//PARÁMETROS y REFERENCIAS 



function cuadrados(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i] * a[i]
    }
    return a // [1,4,9]
}


let x = [1, 2, 3]

cuadrados(x)
console.log(x)