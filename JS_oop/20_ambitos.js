// Como se haria Si exixstiera ambito privado / publico
const dado = {
     _valor: null,
    set: function() {
        this._valor = parseInt(Math.random() * 6) +1},
    get: function () {
        return this._valor
    }
}

    for (let i = 0; i < 20; i++) {
       dado.set()
        // dado._valor = 6 No debo
        console.log(dado.get())
    } 

    // get = leer un valor privado
    // set = establecer un valor privado





    /* function Dado() {
        let _valor= null
    }
    Dado.prototype.lanzar = function() {
        this._valor = parseInt(Math.random() * 6) +1
    }

    const dado = new Dado ()

    for (let i = 0; i < 20; i++) {
       dado.lanzar()
       console.log(_valor)
    } */

    // ES5 ( 2015) Javascript Accesors (Getters and setters)

    const persona  = {
        nombre: 'Pepe',
        apellido: "Perez'
        edad:23,
        _curso: '',
        get curso() {return this._curso},
        set curso(curso) {this._curso = curso},
        get NombreCompleto() {
            return `${this.nombre} ${this.apellido}`}
    }

    persona.curso = 'Angular'
    persona._curso = "JS"
    console.log(persona.curso)
    console.log (persona.NombreCompleto)