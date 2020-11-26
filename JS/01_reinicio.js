'use strict'

/* Datos 


    Indefeinidos:

        -undefined

    Primitivos:
        -Number
        -string
        - boolean
        - string

    Referenciados: 
    
        -objects

        -Array
        -Date
        -Error
        -RegExp
        -Math
        -Json
        .Function
    
*/

/*  Variables:

    -Tipos: dinámicos y débiles (implicitos al valor)
    -Ciclo de vida:
        - Declaración : inicializacion : asignación
        */

// let x: String
let x = 34 //Declaracion + inicialización
let y = miFuncion


//...
//...
x = 45 // asignación 
x = x * 2 // asignación por expresiones

/* Ámbito
    -global
    - local

    al bloque => let / const
    a la función=> var */

    let a = 31 //global
    let b = 67
    console.log('Variable global', a)

    //hoisting de funciones declaradas y variables var (solo la declaración)
    function prueba() {

        let a = 12 // Local a la función
        let b = 67
        var z = 7
        console.log('Variable local a la función', a)

        if (true) {
            let a = 78 // local al bloque
            var z = 70 // 
            console.log('Variable local al bloque', a) //
            console.log(b)
        }
       console.log(a)
       console.log(z)
    } 

    var w = 9
    w = 7
    w =34

    prueba()

    /* Constantes
        -Ciclo de vida: declaracion + inicialización 
        */

        

       // let x 
        const IVA = 1.26
        IVA = 1.34

/* Constantes refernciadas -> es constante la referencia  */

    const user = {nombre = 'Pepe',  edad: 34}

    user.nombre = 'Juan'  
    user.edad = 45
    console.log (user)
    //user = {nombre = 'Pepe',  edad: 34} -> Error
    //user = 34 -> Error

    console.log(a)

    izar()

    function izar () {
        console.log('Izado')
        console.log ('z vale ', z)
        var z = 7

    }

    /* lo que pasa realmente
        function izar () {
        console.log('Izado')
        console.log ('z vale ', z)
        z = 7
        
    } */

    /** Casting
     * Cambio de tipo temporal durante una operación
     * 
     * 
     */

     // Casting a srting
     let n = 23
     let msg  = 'Juan tiene ' + n + ' años'// 'Juan tiene 23 años'
     console.log(typeof n)

        // Casting a number
     let indice = '34'
     let incremento = indice * 0.10


     //En JS TODOS LOS DATAS HACEN CASTING A NUMBER -> NaN

     let tipo = 'indefinido'
     let sueldo = 23 * tipo
     let datoraro = 23 / 0

     console.log('sueldo: ', sueldo)
     console.log('datoRaro: ', datoRaro)

     //En JS TODOS LOS DATAS HACEN CASTING A BOOLEAN-> NaN

     // Casting a boolean
     let w 
//Falsy
w = false
w = undefined
w = null
w = 0
w = ''
w = NaN

//True
w = true
w = 23
w = -34
w = ''
w = 'Pepe'
w = {}
w = []

if (w) {
    // if (boolean(w)) {
    console.log('Positivo')
}

// Operadores en JS
// Aritméticos: + - * / %

// En C#

// 6/3 = 2
// 7/3 = 2, 7%3 = 1
// parseInt (7/3) // 2
// 7%3 // 1

let aDatos = [1,2,3,4,5,6,7,8,9]
n%3 == 0

// Operadores de asignacion

let x =45
x = 86

// Operadores de comparacion

//Igualdad
(x == 67) // false

(x == 86) // true

(x == '86') // true

//Identidad
(x === '86') // false

//Otros >, <,>=,<=

//Negación !

//no igualdad

(x != '86') //false

// no Identidad !

(x !== '86') // true
