export function app() {
    console.dir(document)
    console.log(document)

    console.log("Cargada app")



    // Nodos del DOM

    const btnNormal = document.querySelector('#btn-normal')
    const btnSuper = document.querySelector('#btn-super')
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

    //btnNormal.onclick = saludar
    btnNormal.addEventListener('click', saludar)
    //btnSuper.onclick = protestar
    btnSuper.addEventListener('click', protestar)

    inNombre2.addEventListener('input', escribirContinuo)




    function saludar() {
        outSaludo.textContent =
        `Hola ${inNombre.value}, te saludo desde una function`
    }

    function protestar () {
        outSaludo.value = 'Dont touch my botton'
    }

    function escribirContinuo () {
        outSaludo2.value = `Hola ${inNombre2.value}, te saludo desde una function`
        
    }
  
}







