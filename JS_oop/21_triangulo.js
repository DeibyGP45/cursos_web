
function Triangulo (lado1 = 0,lado2 = 0,lado3 = 0) {

    this._lado1 = lado1
    this._lado2 = lado2
    this._lado3 = lado3


    //get lados () {}
    //get Perimetro() {}
   // get Tipo() {}

}

Triangulo.prototype.getLados = function() {

    // iguales , desiguales

if (this._lado1 === this._lado2 && this._lado2 === this._lado3) {
                return 'igual'
            } else { return 'desigual'}

            return this
}

Triangulo.prototype.getPerimetro = function() {

    // suma de todos los lados 

    return (this._lado1 + this._lado2 + this._lado3)
}

Triangulo.prototype.getTipo = function() {

    let tipo = ['equilatero', 'isosceles', 'escaleno']
 
    if (this._lado1 === this._lado2 && this._lado2 === this._lado3 && this._lado3 === this._lado1) {
        return tipo[0]
    } else if (this._lado1 !== this._lado2 && this._lado2 !== this._lado3 && this._lado3 !== this._lado1) { return tipo[2]}

   return tipo[1]
}



const tri1 =  new Triangulo (8,6,9)
const tri2 =  new Triangulo (8,6,8)
const tri3 =  new Triangulo (5,5,5)


console.log(tri1.getPerimetro())
console.log(tri1.getLados())
console.log(tri1.getTipo())

console.log(tri2.getPerimetro())
console.log(tri2.getLados())
console.log(tri2.getTipo())

console.log(tri3.getPerimetro())
console.log(tri3.getLados())
console.log(tri3.getTipo())