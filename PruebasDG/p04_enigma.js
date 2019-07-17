
/** Crear n programa con funciones de desencriptacion y encriptacion.
 * el algoritmo sera simplemtente sustituir cada caracter por 
 * el correspondiente a la suma  de su codigo UTF + el
 *  numero fijo usado como clave.
 * 
 * 
 */

/** Function Encriptar
 * 
 * @description
 * @param {String} frase
 * @param {Array} cadenaFrase
 * @returns {} cadenaFrase
 * 
 */

    function encriptarLetras(frase = '') {

            let cadenaFrase = []
            let cadenaFrase2 = ''

            for (let i = 0; i < frase.length; i++) {
                const caracter = frase[i];
                   cadenaFrase.push(caracter.charCodeAt())
                   cadenaFrase2 += JSON.stringify(caracter.charCodeAt())  
                     }
                 //console.log(cadenaFrase)
                 console.log(cadenaFrase2)
                 //JSON.stringify
            }
           
        encriptarLetras('Eres el mejor')

        
       
   

    


/** Function
 * 
 * @description encriptar una frase 
 * @param {array}
 * @return {number}
 * 
 */

 const frase = 'Desencriptado'

 function encriptar () {

 }
//console.log(String.fromCharCode(450))

//console.log('a'.charCodeAt())

