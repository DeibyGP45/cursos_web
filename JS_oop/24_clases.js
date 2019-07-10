
/* ES5

function Coche() {
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.energia = energia
    this.precio = precio


}



Coche.prototype.arrancar = function name(params) {
    console.log('run, run')
    //return This
}

Coche.prototype.ver = function () {
    console.log(this)
} */

/** ES6 - ES2015
 *
 * Modulos import / export
 * 
 * arros funtions ( this consistente)
 * 
 * let y const
 * template string (``)
 * destructuring spread y rest
 * for-in
 * clases
 * promesas
 * 
 * 
 */

 // 

 // 


class Vehiculo {
    constructor(marca,modelo, color, energia, precio) {

            this.marca = marca
            this.modelo = modelo
            this.color = color
            this.energia = energia
            this.precio = precio
    }

    arrancar() {
        console.log('run, run')
        return this
    }

        ver() {
            console.log(this)
        }




}

class Coche extends Vehiculo {

    constructor(marca,modelo, color, energia, precio, volante,radio) {
            super(marca,modelo, color, energia, precio)
            this.volante = volante
            this.radio = radio
    }
}

class Moto extends Vehiculo {

    constructor(marca,modelo, color, energia, precio,manillar) {
            super(marca,modelo, color, energia, precio)
            this.manillar = manillar
    }

    arrancar() {
        super.arrancar() 
            console.log('run, run, run')
            return this
            }
    hacerCaballitos() {
       console.log('caballitohecho')
       return this
    }
}

let cadena = ''

const c1  = new Vehiculo ('Audi', 'A3','Purpura','Hibrido',20000,'deportivo','MP3')

c1.arrancar().ver()

const m1 = new Moto ('Kawasaki', 'Ninja', 'Verde', 'gasolina', 19000, 'extra')

m1.arrancar().hacerCaballitos().ver()

console.log(m1 instanceof Moto)
console.log(m1 instanceof Vehiculo)
console.log(m1 instanceof Object)
console.log(m1 instanceof Coche)