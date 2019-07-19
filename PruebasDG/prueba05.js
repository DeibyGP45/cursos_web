{//Ejemplo Cantidad de MediaArray
/**
 * @description Funcion que calcula la media de n (un tanto de ...) numeros independientes 
 * @param {...[]number} aDatos
 */

function numeroMedia(...aDatos) { //Los tres puntos son la los Datos restantes
    let r = 0
    for (let i = 0; i < aDatos.length; i++) {  
        const item = aDatos[i];
        r += item 
    }
    return r / aDatos.length
}
console.log(numeroMedia(2, 3, 5, 7, 8, 100))

}

{// EJEMPLO DE ARRAY.MAP
 let cadena = [1, 3, 5, 9]
    
    let cadenaDoble = cadena.map( cadena =>  cadena * 2) // Nue variable = Array.map ( Array => Array *2  )
    
console.log(cadenaDoble)
}

{// ARRAY.REDUCE
    let cadena2 =  [2, 4, 5, 6]

    let cadenaSumar = cadena2.reduce((cons,n) => cons + n )

    console.log(cadenaSumar)

}

let cadena = "Esto no es buena practica"

let x = cadena.split(' ').join('').toUpperCase()
console.log(x)


