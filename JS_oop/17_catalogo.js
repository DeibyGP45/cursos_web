// Crear un catalogo con funciones constructivas

/*
 Crear un objeto usado  para representar un articulo de una tienda.
 una descripcion,
 un codigo,
 un precio,

 Metodos

 -Permitir el calculo de su correspondiente IVA
 -Mostrar los daros por pantalla 
*/

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

const artTotal = [art1, art2, art3];

//console.log (art3)

artTotal[0].mostrar();


//art2.mIVA()



