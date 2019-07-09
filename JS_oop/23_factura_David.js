
const empresa = {
        Nempresa:'Noseque SA',
        direccion:'C/ lola 23',
        teléfono:'915427583',
        Nif:''
    }

const infoEmpresa = {
        Nfactura: 015,
        IVA: 0.21,
        fPago: ['Contado','Tarjeta','Online'],
        fecha:new Date(2019,7,4),
    }

function Factura(clientes, elementos) {

    

    this.clientes = clientes
    this.elementos = elementos
    
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

Factura.prototype.comprarElemento = function (Elemento) {
    this.elementos.push(Elemento)
} 




//----------------------------------

const cl01 = new Cliente ('David garcia','C/ mari','698532675','50363458d')

const el01 = new Elemento ('Paquete','45','2')

const factura01 = new Factura ()

console.log(factura01)