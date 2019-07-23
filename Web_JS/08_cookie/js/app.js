import { setCookie, getCookie } from "./cookie.js";

export function app() {

    console.log('Cargada app')

    //Nodos
    let aBotones = document.querySelectorAll('button')

    let output = document.querySelector('output')

    // Manejadores

    aBotones.forEach((btn) => { btn.addEventListener('click', onClick) });

    checkCookie('visitas')


    /////////////////////

    function onClick(ev) {
        switch (ev.target.textContent) {
            case 'Iniciar':
                console.log('Iniciar')
                setCookie('visitas', 0, 5)

                break;
            case 'Vaciar':
                setCookie('visitas', 0 , -2)
                break;
            case 'Mostrar':
                break;
            default:
                location.reload()
                break;
        }
    }

    function checkCookie() {

        let numVisitas = getCookie('visitas');

        if (numVisitas !== '') {

            setCookie("visitas", ++numVisitas, 5);
        }
    }


}






/* let btnIniciar  = document.querySelector('#btn-iniciar')
        let btnVaciar  = document.querySelector('#btn-vaciar')
        let btnMostrar  = document.querySelector('#btn-mostrar')
        let btnRecargar  = document.querySelector('#btn-recargar') */


// document.cookie = "UseName" console.log(document.cookie) 