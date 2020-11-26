export function app() {

    console.log('cargando')

    //

    let btnSaludar = document.querySelector('.btn_saludar')
    let outSaludo = document.querySelector('output')

    //

    btnSaludar.addEventListener('click', onClick)

    //

    function onClick() {

            console.log('ok')

            
        let html = 'Hola a tos'

        outSaludo.innerHTML = html
    }
}