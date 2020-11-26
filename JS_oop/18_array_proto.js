

const aDatos = ['Luis', 'Juan', 'Rosa', 'maria']

console.log(aDatos.__proto__)
console.log(Array.prototype)


Array.prototype.saludar = function () {
    console.log('Hola soy un array')
  }

Array.prototype.push = function (nombre) {
    console.log('Hola,' + nombre)
  }  
  
  aDatos.push('Ernesto')
  aDatos.saludar('Pepe')

  console.log(aDatos)

  const aOtros = []
  aOtros.push('gato')
  console.log(aOtros)