
export function app() {
    console.log("Cargada app")

    const store = 'userName'

    ///Nodos DOM

    let btnPulsar = document.querySelector('#btn_pulsar')

    let inNombre = document.querySelector('#in-nombre')

    let spanSaludo = document.querySelector('#span_saludo')

    let btnGuardar = document.querySelector('#btn_guardar')

    //Asociación de manejadores de eventos

    btnGuardar.addEventListener('click', onClickGuardar)

    btnPulsar.addEventListener('click', onClickBorrar)

    inNombre.addEventListener('input', onInputNombre)

    //**inNombre.addEventListener('change', onChangeNombre)


    // inicializacion de valores

    let user = localStorage.getItem(store)
    if (user) {
        inNombre.value = user
        spanSaludo.innerHTML = user
    }

    // funciones de manejadores de eventos

    function onClickBorrar (ev) {

        inNombre.value = ''
        spanSaludo.innerHTML = inNombre.value
        localStorage.removeItem(store)
    }

    function onInputNombre (ev) {
        
        spanSaludo.innerHTML = ev.target.value
    }

    function onClickGuardar (ev) {

        localStorage.setItem(store, inNombre.value)
        }
    /* function onChangeNombre(ev) {
        console.log('change', ev.target.value)
    } */
}