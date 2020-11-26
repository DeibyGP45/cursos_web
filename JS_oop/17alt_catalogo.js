
/*
 Crear un objeto usado  para representar un articulo de una tienda.
 una descripcion,
 un codigo,
 un precio,

 Metodos

 -Permitir el calculo de su correspondiente IVA
 -Mostrar los daros por pantalla 
*/

/** Funtion (class) Libro
 * 
 * @property {string} descripcion 
 * @property {string} codigo 
 * @property {number} precio 
 * @property {number} iva 
 * @property {object} calcularIVA
 * @property {void} mostrar  
 */

function Libro(descripcion, codigo, precio) {
    this.descripcion = descripcion
    this.codigo = codigo
    this.precio = precio
    
}
// estetico

    Libro.prototype.iva = 0.04
    Libro.prototype.calcularIVA = function () {
         return {iva: this.precio * this.iva,
                total: this.precio + (this.precio * this.iva)
        }
           
    }
    Libro.prototype.mostrar = function () {

        const importe = this.calcularIVA()

        let msg = 
`       Producto : ${this.descripcion}
        Codigo: ${this.codigo}
        Importe : ${this.precio.toFixed(2)}
        IVA: ${importe.iva.toFixed(2)}
        Total: ${importe.total.toFixed(2)}`

        console.log(msg)

    }

    const l1 = new Libro ("ranas",'4w5e6r',22)
    l1.mostrar()
    const l2 = new Libro ("Mesa",'1n2h1r',22)
    l2.mostrar()
    const l3 = new Libro ("Silla",'x5y6n0',10)
    l3.mostrar()
    l3.iva = 0.12
    
    
    
    
