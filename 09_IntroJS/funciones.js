'use strict'

//undefined
//boolean
//number (int,float)
//string
//object

function sample() {

        //ES06
    /* let saludo = '' // declarar variable -> tipo undefined

    saludo = 'Hola' // inicializar  la variable */
    let saludo = 'Hola' // declarar + inicializar

    //MAL PRACTICA

    // curso = 'JavaScript' //inicializar la variable

    /* let szia  
    let ar */

    // Declaración de a función
    console.log (saludo)

}
let saludo = 'hello'



function saludar(nombre = 'amigo') {

let saludo = 'Hola '

console.log (saludo + nombre)

}

// Invocación , ejecución uso de una función
saludar('Pepe')
saludar('Maria')
saludar()

 // console.log(saludo)




/******************** FUNCION SUMA  ***********************/

    //Separación de responsabilidades o interes
        //(separation of concerns - Edger W. Dijkstra)

 /**
  * 
  * Funcion Suma
  * recibe 2 parametros
  * devule
  * 
  * @param{number}
  * @param{number}
  * @returns {number}
  * 
  * 
  */


 function suma(x = 0 ,y = 0) {
     
  let z = x + y
  return z

 }
/**
 * @description recibe dos paramnetros y devuelve la suma de ambos
 * @param {number} cadena 
 */
 

 /**
  * 
  * Funcion Mostrar
  * 
  * recibe un texto y lo saca por pantalla
  * 
  * @param {string number}
  * @returns {void}
  */

 function mostrar(cadena = '') {
     console.log(cadena)
 }


/*  0/4 =0
 4/0 =Infinito
 0/0 = Indeterminado */

 
 // JS Doc

 /**
  * 
  * Funcion Division
  * @description recibe 2 parametros y devuelve
  * 
  * @param{number}
  * @param{number}
  * @returns {number}
  * 
  * 
  */
 
 function division(x = 0 ,y = 1) {
  
    return x / y
  
   }

   function multiplicación(x = 0 ,y = 1) {
  
    return x * y
  
   }
  
/**
  * 
  * Funcion Restar
  * recibe 2 parametros
  * devule
  * 
  * @param{number}
  * @param{number}
  * @returns {number}
  * 
  * 
  */


 function resta(x = 0 ,y = 0) {
     
    let z = x - y
    return z
  
   }

function probar () {
    let x = 2
    let y = 3

        mostrar(suma(x,y)) 
        mostrar(suma(x)) 
        mostrar(suma(undefined,y)) 
        mostrar(suma())
        mostrar(suma(x,y)) 
        mostrar()
        mostrar(division(x,y))
        mostrar(division(x,y))
        mostrar(resta(x,y))
}

probar()

