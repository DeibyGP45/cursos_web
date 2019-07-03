/** function limpiar
 * 
 * @description  eliminar de un array los nombres que empiecen por una letra determinada
 * @param {String} letra
 * @param {array} aNombres
 * @returns {array}
 */

 function limpiar(letra = '', aNombres = []) {

    for (let i = 0; i < aNombres.length; i++) {
        const item = aNombres[i];
        if (item[0].toUpperCase() === letra.toUpperCase()) {
            aNombres.splice(i, 1)
            i--

        }

    }

     
 }

 let aUsuarios = ['Rosa', 'Raquel', 'Elena', 'Maria']



 limpiar('r',aUsuarios)
console.log(aUsuarios)

