export class App {

    constructor() {
        console.log("Cargada app")

// Nodos del DOM

    this.aBtns = document.querySelectorAll('button')
    /* this.btnNormal = document.querySelector('#btn-normal')
    this.btnSuper = document.querySelector('#btn-super') */

    this.inNombre = document.querySelector('#in-nombre')
    this.outSaludo = document.querySelector('#out-saludo')

    this.inNombre2 = document.querySelector('#in-nombre2')
    this.outSaludo2 = document.querySelector('#out-saludo2')

    /* Otra opción serio  */

    /* const Nodos = { 
        btnNormal : document.querySelector('#btn-normal'),
        btnSuper : document.querySelector('#btn-super'),
        inNombre : document.querySelector('#in-nombre'),
        outSaludo : document.querySelector('#out-saludo')
    } */


    //Manejadores de eventos

    this.aBtns.forEach( (btn) => {btn.addEventListener('click', this.onBtnClick.bind(this))}) // bind --fijar

    //btnNormal.onclick = saludar
    // 
    //btnSuper.onclick = protestar
    // btnSuper.addEventListener('click', onBtnClick)

    this.inNombre2.addEventListener('input', this.escribirContinuo.bind(this))

    console.log(this)
    }

onBtnClick(ev) {
        let message
            console.log(ev.target.id)
            switch (ev.target.id) {
                case 'btn-normal':
                    message = `Hola ${this.inNombre.value}, te saludo desde una function`
                    break;

                case 'btn-super':
                            message = 'Dont touch my botton'
                    break;
                default:
                    message = 'Boton sin funcionar'
            } 

            console.log(this)
                this.outSaludo.value = message
        }

escribirContinuo () {
        this.outSaludo2.value = `Hola ${this.inNombre2.value}, te saludo desde una function`
        

    /* function saludar() {
        outSaludo.textContent =
        `Hola ${inNombre.value}, te saludo desde una function`
    }

    function protestar () {
        outSaludo.value = 'Dont touch my botton'
    } */


    }
  
}







