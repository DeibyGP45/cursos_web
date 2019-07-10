

function Factura(clientes) {

    const empresa = {
            Nempresa:'Noseque SA',
            direccion:'C/ lola 23',
            teléfono:'915427583',
            Nif:'203948543s'
        }

    const infoEmpresa = {
            Nfactura: 015,
            IVA: 0.21,
            fPago: ['Contado','Tarjeta','Online'],
            fecha:new Date(2019,7,4),
        }

    this.empresa = empresa
    this.infoEmpresa = infoEmpresa
     
    this.clientes = clientes
    this.elementos = []
    

}

    function Cliente(Ncliente,direccion, telefono,nif) {


        this.Ncliente = Ncliente
        this.direccion = direccion
        this.telefono = telefono
        this.nif = nif
        
    }


function Elemento (descripcion,precioUnidad,cantidad) {

    this.descripcion = descripcion
    this.precioUnidad = precioUnidad
    this.cantidad = cantidad
    //this.importeTotal = importeTotal

}


//----------------------------------
//Factura.prototype.



Factura.prototype.mostrar = function () {
		let msg = 
    `
        ${this.empresa.Nempresa}
        ${this.empresa.direccion}
        ${this.empresa.teléfono}
        ${this.empresa.Nif}

        Cliente: ${this.clientes}

        ${this.infoEmpresa.Nfactura}
        ${this.infoEmpresa.IVA}
        ${this.infoEmpresa.fPago[1]}
        ${this.infoEmpresa.fecha}


		Productos : ${this.elementos}

		`
		console.log(msg)
	}

Factura.prototype.comprarElemento = function (Elemento) {
    this.elementos.push(Elemento)
} 

Factura.prototype.ImporteFactura = function () {}

/* Factura.prototype.ToString() = function () {
    return `${this.descripcion},${this.precioUnidad},${this.cantidad}`
} */

//----------------------------------


const cl01 = new Cliente ('David garcia','C/ mari','698532675','50363458d')

const el01 = new Elemento ('Paquete','45','2')


const factura01 = new Factura (cl01)

factura01.comprarElemento(el01)

console.clear()

console.log(factura01.elementos)
console.log(factura01.mostrar())