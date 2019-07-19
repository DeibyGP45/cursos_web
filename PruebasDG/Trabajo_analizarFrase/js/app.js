/**  Crear un programa capaz de analizar una frase:
 * 
 *  número de palabras ✔
 *  longitud media de las palabras
 *  veces cada letra
 *  frecuencia cada letra
 * 
 * 
 * Incorporar un interface Web de entrada y salida
 */

let frase = "He echo lo que he podido profesor"

   {/** function numeroPalabras
    * @description Funcion que cuenta el numero de palabras
    * @param {string} cadena
    * @returns {string}
    */
         
               function numeroPalabras (cadena) {

                  cadena = cadena.split(' ')


                  msg = `El numero de palabras es de ${cadena.length}`

                  console.log(msg)
                 
               }

         numeroPalabras(frase)}



     {/** function mediaPalabras
    * @description Funcion que cuenta la media de las palabras
    * @param {string} cadena
    * @returns {number}
    */
         
    
   function mediaPalabras (cadena) {
      
      let cadenaArray = cadena.split(' ').map(cadena => cadena.length)

      cadenaMedia = cadenaArray.reduce( (cons,n) => (cons + n)/2)

      msg = `La longitud media de las palabras es de ${cadenaMedia.toFixed(2)}`

      console.log(msg)

      }

      
   }
         mediaPalabras(frase)

/////❌/////

   /** function vecesLetra
    * @description Funcion que cuenta (n) las veces que se usado la letra (letra)
    * 
    * 
    * @returns {String} msg
    */
         
   function vecesLetra () {

   }
         vecesLetra ()
   /** function frecuenciaLetra
    * @description Funcion que cuenta (n) la frecuencia que se usado la letra (letra)
    * 
    * 
    * @returns {String} msg
    */
         
   function frecuenciaLetra () {
      
   }
            