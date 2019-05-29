let x =34
/* x = 5 */
console.log(x >= 0)

if (x >= 0) {
    
    console.log('Positivo')

}
else {

    console.log('negativo')
}

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
else {
    console.log('negativo')
}

let k =4
k = 34
k = '46'
k = '34 Pepes'
k = false
k = true
k = undefined
k = {}
k = []
k = [4, 8]


/* console.log (number(k)) */

let q = 5

if (q != 0) {
console.log('q tiene valor')

} else{
    console.log('q es 0')
}

if (q === 0) {
    console.log('q es exactamente 0')
    
    }

    var nota = 0 

    /* if (nota == 0) {

        console.log('Has sacado la nota minima')
    } */

    if (nota != true) {
 console.log('Has sacado la nota minima')    
    }

   /*  let b = !!nota
    let b = Boolean(nota) */


    let edad = 53


/** Separacion de responsabilidades */

function codificar (edad) {

    let mensaje = ['Eres aun joven','Eres Joven','Empieza a tener cuidado','Lo siento por ti']
    
    let i = 3

        if (edad < 18) {i = 0}

        else if (edad < 35) {i = 1}

        else if (edad < 50) { i = 2}

    return i
}

function responder (edad) {

    let mensaje = ['Eres aun joven','Eres Joven','Empieza a tener cuidado','Lo siento por ti']

console.log(`Con ${edad} años`,mensaje[codificar(edad)])
}

let e = 23

responder(e)