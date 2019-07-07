// Crear un catalogo con funciones constructivas

const art1 = {
	descripcion: 'Libro',
	codigo:'',
	precio:'', 
}


function Articulo(descripcion,codigo,precio) {
		this.descripcion = descripcion
		this.codigo = codigo
		this.precio = precio
}
Articulo.prototype.mIVA = function () {this.precio * 1.21}
const art2 = new Articulo ("Mesa",121,60)
const art3 = new Articulo ("Silla",60,30)


console.log (art2)
console.log (art3)


