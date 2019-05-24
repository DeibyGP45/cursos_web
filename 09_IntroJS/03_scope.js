'use strict'

// Variable de ambito global

var antes = 2

let a = 2
let b = 4 

function prueba () {
    //variable de ámbito local  a la funcion

    var int = 3 
    let i = 6
    let b = 9

    if (true) {
        
        //variable de ambito local a la funcion
        var z = 4 
        //variable de ambito local al bloque if
        let w = 7

        console.log ('Es verdad')
        console.log( 'desde el if', a) //2
        console.log( 'desde el if', b) //9
        console.log( 'desde el if', w) //7


    }

    console.log(a) //2
    console.log(b) //9

 // c = 3 esto daria un error debido al user strict

console.log ( 'desde la progrmna', a) //2
console.log ( 'desde la funcion', b) //4
 // console.log( 'desde la funcion', w) //Error
console.log( 'desde la funcion', z) 

}

prueba()


function ejemplo ( ) {
    if (true) {
         let v = 3
         
    }

    console.log(v)
}

function sample ( ) {

    /* console.log(v) */
}

ejemplo()
sample()