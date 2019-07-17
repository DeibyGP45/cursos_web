export function app() {

    console.log("Cargada app")



    // Nodos del DOM

    const aBtns = document.querySelectorAll('button')
    /* const btnNormal = document.querySelector('#btn-normal')
    const btnSuper = document.querySelector('#btn-super') */

    


    const inNombre = document.querySelector('#in-nombre')
    const outSaludo = document.querySelector('#out-saludo')

    const inNombre2 = document.querySelector('#in-nombre2')
    const outSaludo2 = document.querySelector('#out-saludo2')


    /* Otra opción serio  */

    /* const Nodos = { 
        btnNormal : document.querySelector('#btn-normal'),
        btnSuper : document.querySelector('#btn-super'),
        inNombre : document.querySelector('#in-nombre'),
        outSaludo : document.querySelector('#out-saludo')
    } */


    //Manejadores de eventos

    aBtns.forEach( (btn) => {btn.addEventListener('click', onBtnClick)})

    //btnNormal.onclick = saludar
    // btnNormal.addEventListener('click', onBtnClick)
    //btnSuper.onclick = protestar
    // btnSuper.addEventListener('click', onBtnClick)

    inNombre2.addEventListener('input', escribirContinuo)

    

    function onBtnClick(ev) {
        let message
            console.log(ev.target.id)
            switch (ev.target.id) {
                case 'btn-normal':
                    message = `Hola ${inNombre.value}, te saludo desde una function`
                    break;

                case 'btn-super':
                            message = 'Dont touch my botton'
                    break;
                default:
                    message = 'Boton sin funcionar'
            } 
                outSaludo.value = message
        }


    function escribirContinuo () {
        outSaludo2.value = `Hola ${inNombre2.value}, te saludo desde una function`
        

    /* function saludar() {
        outSaludo.textContent =
        `Hola ${inNombre.value}, te saludo desde una function`
    }

    function protestar () {
        outSaludo.value = 'Dont touch my botton'
    } */


    }
  
}







