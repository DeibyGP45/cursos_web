
export function app() {
    console.log("Cargada app")


    let btnSalir = document.querySelector('#btnSalir')
    let dlgCancelar = document.querySelector('#dlgCancelar')
     let btnCancelar = document.querySelector('#btnCancelar')
    let handler

    btnSalir.addEventListener('click', onClick)
    btnCancelar.add

    

    function onClick() {
        let url = 'https://www.google.com/'

        handler = setTimeout(() => {location.assign(url)},2000)

        dlgCancelar.sho

        
        // location.assign(url)
        // out.value = msg ElementOutPut
        // out.textContent = msg
        btnCancelar = document.querySelector('#btnCancelar')
        btnCancelar.addEventListener('click', onCancelar)
    }
}

function onCancelar() {
    clearTimeout(handler)
    dlgCancelar.close()
    out.innerHTML = ''
}