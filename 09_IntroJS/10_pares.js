/**
 * JSDOc
 * @description Programa que calcula y muestra 
 *                  si un nuero es par o impar
 * 
 */

/**
 * JSDOc
 * @description Funcion que calula si un numero es par
 * @param {number}:
 * @returns
 */

    function isPar(n) {

        let r = true

        if (n%2)


            /* console.log( (x%2) ) */

        /* if (r = 0)  {
        console.log('Es par')
            }
            else {
                console.log('Es impar')
            }
        return r */
 

 isPar(12)

 /**
  * @description Función que muestra si es un numero es par o impar
  * @param {number}: n
  * @returns {void}
   */

   function mostrar(n) {
       mensajes = [
            `El numero ${n} es impar `,
           `El numero ${n} es par`
            ]
    let i = Number(isPar(n))
     
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
    
    mostrar(x)
   }
   probar()
   