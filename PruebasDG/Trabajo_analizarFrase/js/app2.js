export class App {

    constructor () {

        // nodo DOM

this.numeroPalabras = document.querySelector('#n-palabras')

this.outResult = document.querySelector('#out-result')

        //Manejadores

this.numeroPalabras.addEventListener('click',this.resultPalabra.bind(this))

    console.log(this)
}
resultPalabra() {
    
    this.outResult.value = `Probando`
}



}