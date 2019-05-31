/**
 * JSDOc
 * @description Programa que calcula y muestra 
 *                  si un nuero es par o impar
 * 
 */

/**
 * JSDOc
 * @description Funcion que calula si un numero es par
 *      Puede devolver: -2, -1, true, false
 * @param {number}:
 * @returns {*}
 */

    function isPar(n) {

        let r = true

        if (!isValidNumber) {
            //Excepción; no es un numero
            return -2
            else if (isEntero(n)) {
                //Excepción; no es entero
            }else if (n%2) { r = false}
            return r 

        


            /* console.log( (x%2) ) */

        /* if (r = 0)  {
        console.log('Es par')
            }
            else {
                console.log('Es impar')
            }
        return r */
 }

 isPar(12)

 /**
  * @description Función que muestra si es un numero es par o impar
  * @param {number}: n
  * @returns {void}
   */

   /**
    * @description Funcion que conprueba si una expresión es convertible an un numero valido rechazando arrays, booleans, null , undefined, '' y string no numéricos
    * @param {*} n 
    * @returns {boolean}
    */

   function mostrar(n) {
       mensajes = [
            `El numero ${n} es impar `,
           `El numero ${n} es par`,
           `El numero ${n} no es entero`
            ]
    
            let i = Number(isPar(n))
            if (i<0) {//Codigo d error
            i = -i + 1 // -1 -> 2 // -2 -> 3}
     
    console.log(mensajes[i])
   }

   function probar () {

        let x 
    x = 1
    x = 2
    x = 345
    x = 0
    x = -4
    x = -5
    x = 4.3
    x = -56.7
    x = 'pepe'
    x = '56'
    //mostrar(x)
    console.log(isEntero(x))

    function isValidNumber(n) {
        r = true
        if ( isNaN(n) || typeof n == 'boolean' || Array.isArray(n)) {}
    }

    /**
     * 
     * @param {number}: n
     * @returns
     * 
     */
      
       return r


    
    mostrar(x)
   }
   probar()