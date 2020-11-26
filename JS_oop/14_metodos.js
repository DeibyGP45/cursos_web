const o = {
    id: 123,
    nombre:'Pedro',
    conocidos: ['Juan', 'Raul', 'Elena', 'Lola'],
    mostrarID:function () {
    console.log(this.id)
    },
    saludar : function (otro = 'amigo') {
        
        if (this.isConocidos(otro)) {
            console.log(`Hola ${otro}, ¿como estas?`)
        }
        console.log(`hola ${otro} soy ${this.nombre}`)},
    isConocidos: function (otro) {
            return this.conocidos.some(item => item.toLocaleLowerCase() === otro.toLocaleLowerCase())
        }
}


o.mostrarID()
o.saludar('Juan')
o.saludar()
o.saludar('Pepi')
console.log(o.isConocidos('Julio'))