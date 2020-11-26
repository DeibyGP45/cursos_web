const Factorial = require("./30_factorial.js")

/**
 * 1 - Funcion booleana que comprueba 
 *      que un valor puede ser tratado como número
 * 
 * 2 - Función que comprueba que es un número válido
 *      para poder calcular un factorial
 * 
 * 3 - Función que calcula el factorial de un número
 *      En caso de valores no válido, gemera un error    
 * 
 * 4 - Función que muestra (renderiza) los resultados por pantalla
 * 
 * Al menos para las 3 primeras, realizar tests unitarios
 *  
 */

try {
 const n = 21
 const f_21 = new Factorial(n)   
 console.log(f_21)
 f_21.renderizar()

 new Factorial(70). renderizar()
 const n = ''
 const f_21 = new Factorial(n)   
 console.log(f_21)
 f_pepe.renderizar()


} catch (error) {
    console.log(error.message)

    new Factorial(70).renderizar()

    new Factorial(170).renderizar()
}
f_21.factorial = 1

console.log(f_21)