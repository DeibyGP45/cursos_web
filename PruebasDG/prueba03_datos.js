const { Elemento, Empresa } = require('./prueba03.js')

module.exports = {}

const el01 =('Libro A', 20, 2)

const el02 = new Elemento('Lapiz HB',2, 10)

const cliente  = new Empresa ("david a","Santiago 6","639218173")

const librerEmpresa = new Empresa ("LIBRER SA","Av Foso 12","645273756")


module.exports.el01 = el01
module.exports.el02 = el02
module.exports.cliente = cliente
module.exports.librerEmpresa = librerEmpresa