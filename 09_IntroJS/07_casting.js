'user strict'

// Operaciones ocn numbers
let x = 2
let y = 3

let z = x * y 

// Operaciones con 
 y = '3'
z = x * y  // Durante la operacion Number (y)
x= '5'
z = x * y


console.log(z) // 6

console.log(z, typeof z) // number
console.log(x, typeof x) //string
console.log(y, typeof y) // string

// Sobrecarga del simbolo '+'

/* +3
2+2
"Hola " + "pepe" */

let w = x + y // No da 8. da '53'
console.log(w, typeof w)

x = 23
y = '20'

w = x + y // Da '2320'
w = w * 1
console.log (w, typeof w)

/**
 * not !
 * 
 * or ||
 * 
 * And &&
 *
 */


function sumar (a = 0 ,b= 0) {

    if (isNaN (a)  || isNaN (b) ||
        typeof a == 'boolean' ||
        typeof b == 'boolean' ||
        typeof a == 'object' ||
        Array.isArray(b)) {
        return 'No se puede sumar'
    }
    // let r = Number(a) +  Number(b)
    //let r = parseFloat(a) +  parseFloat(b)
     let r = +a + +b
    return 'la suma total es ' + r
}

console.log(sumar())

console.log(sumar(2,2))
console.log(sumar(2,0))
console.log(sumar(0,2))
console.log(sumar(2,'5'))
console.log(sumar('2','5'))
console.log(sumar(2,'yolo'))
console.log(sumar('porque','yolo'))
console.log(sumar(2, true))
console.log(sumar({}, {}))
console.log(sumar([], []))