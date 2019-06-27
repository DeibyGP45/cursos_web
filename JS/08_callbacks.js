function calcular (a,b,operacion, callback) {
let msg = `El resultado de una ${operacion} con ${a} y ${b} es `
return msg + callback(a,b)  
}

function producto (a,b) {return a*b}

console.log (calcular(4,6,'sumar',(x,y) => x + y))
console.log (calcular(4,6,'restar',(x,y) => x - y))
console.log (calcular(4,6,'producto',producto))
