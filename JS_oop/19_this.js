 // 4 formas de ejecutar una funcion
 //patrone de invocación 
 //cambian el significado de this

function algo() {
    console.log(this)
}



 // function

 algo()  //this es proccess (node) o window (browser)

 //Metodo

 const o = {nombre: 'Pepe', edad: 23}
 o.algo = algo //This es el objeto al que pertenece el metodo
 o.algo()

 //Constructora

 const nuevo = new algo() //This es el nuevo objeto construido

 //Indirectamente(apply o call)

 const otro = {

    tipo: 'Perro',
    nombre: 'Rufo'
 }

 //algo.call()
 algo.apply(otro) //This el objeto que "toma prestada" la función

 console.log('------------------------')

 const persona = {nombre: 'Pepe'}

 persona.saludar = function(){
     console.log (`Hola soy ${this.nombre}`)
 }

 persona.saludar()

 setTimeout(persona.saludar, 1000);
 setTimeout(persona.saludar.bind(this) ,2000);

  console.log('------------------------')

  // En las funciones Arrow, this ees consisitente
  //SIMEPRE es la propia función

  persona.saludarArrow = () => {
    console.log (`Hola soy ${this.nombre}`)
}

persona.saludarArrow()

algoArrow = () => {
    console.log(this)
}

algoArrow()

setTimeout(persona.saludarArrow, 1000);
 setTimeout(algoArrow ,2000);