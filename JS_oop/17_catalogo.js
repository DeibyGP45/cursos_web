// Crear un catalogo con funciones constructivas

/* const art1 = {
	descripcion: 'Libro',
	codigo: 456,
	precio: 8, 
} */


function Articulo(descripcion, codigo, precio) {
		this.descripcion = descripcion
		this.codigo = codigo
		this.precio = precio
}
	Articulo.prototype.mIVA = function () {
		 return this.precio * 1.21
		
	}

	Articulo.prototype.online = true

	Articulo.prototype.mostrar = function () {
		let msg = 
	`
		Producto : ${this.descripcion}

		Codigo: ${this.codigo}
		Importe : ${this.precio} 		Mas IVA: ${this.mIVA()}
		`
		console.log(msg)
	}


const art1 = new Articulo ("Libro",456,8)
const art2 = new Articulo ("Mesa",121,60)
const art3 = new Articulo ("Silla",560,30)

console.log (art1)
console.log (art2)
console.log (art3)

art1.mostrar()


//art2.mIVA()



