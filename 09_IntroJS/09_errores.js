/** Separación de responsabilidades */

function codificar (edad) {

    let mensaje = ['Eres aun joven','Eres Joven','Empieza a tener cuidado','Lo siento por ti']
    
    let i = 3

    if (!isValidNumber(edad)) {i = -2}

    if (edad <= 0) {i = -1}
    
        if (edad < 18) {i = 0}

        else if (edad < 35) {i = 1}

        else if (edad < 50) { i = 2}

    return i
}

function responder (edad) {

        let mensaje = ['Eres aun joven','Eres Joven','Empieza a tener cuidado','Lo siento por ti']

        let i = codificar(edad)

        if (typeof i == 'number' && (i >= 0 || i <= 3)) {
            console.log(`Con ${edad} años`,mensaje[i])
            } else
             {console.log('Error')}
}

let e = 2
e = 18
e = 25
e = 35
/* e = 45
e = 55
e = 65
e = -3
e = 'Pepe' */




responder(e)

e = 'Pepe'
e = '34'
e = true
e = false
e = {}
e = []
e = undefined
e = ''

console.log(e, isValidNumber(e))

///////

function isValidNumber(n) {
    r = true
    if ( isNaN(n) || typeof n == 'boolean' || Array.isArray(n)) {}
}
  
   return r