import { comprobarDNI } from "./helper.js";

export function validation () {

    let userName = document.querySelector('#userName')
    userName.addEventListener('input', onUserInput)
    //userName.addEventListener('input', onUserInput)
    userName.addEventListener('blur', onUserInput)


    function onUserInput(ev) {

        let nodo = ev.target.ne

        console.dir(nodo)
        // if (!nodo.validity.valid) {
            if (!nodo.checkValidity()) {


            nodo.nextElementSibling.innerHTML =
            nodo.validationMessage

            nodo.nextElementSibling.hidden = false
        }

        

        

    }
    
}

export function validacionFinal(nodos) {
    console.dir(nodos)
    let r = false
    nodos.some(nodo => {
        if( !nodo.checkValidity()) {
            nodo.nextElementSibling.innerHTML = 
                nodo.validationMessage
            nodo.nextElementSibling.hidden = false
            r = false  
            return true  
        } else {
            r = true
            nodo.nextElementSibling.hidden = true
        }
    });
    
    return r
}
