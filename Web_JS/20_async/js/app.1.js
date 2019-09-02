
export function app() {
    console.log("Cargada app")

    const usersURL = 'https://jsonplaceholder.typicode.com/users/'


    const store = 'userName'

    ///Nodos DOM

    let btnBorrar = document.querySelector('#btn_borrar')

    let inId = document.querySelector('#in-id')

    let btnBuscar = document.querySelector('#btn_buscar')

    let spanSaludo = document.querySelector('#span_saludo')

    //Asociación de manejadores de eventos

    btnBuscar.addEventListener('click', onClickBuscar)

    btnBorrar.addEventListener('click', onClickBorrar)

    //inNombre.addEventListener('input', onInputNombre)

    //**inNombre.addEventListener('change', onChangeNombre)



    // funciones de manejadores de eventos

    function onClickBorrar(ev) {

        inId.value = ''
        spanSaludo.innerHTML = inId.value
    }

    /* function onInputNombre (ev) {
        
        spanSaludo.innerHTML = ev.target.value
    } */

    function onClickBuscar(ev) {
        let url = usersURL + '/' + inId.value
        ajax('GET', url, leerDatos)

    }

    ///AJAX


    /// funcion del evento AJAX

    function leerDatos(http) {

        if (http.readyState == 4 && http.status == 200) {
            let data = JSON.parse(http.responseText)
            console.log(data)
            if (data) {
                spanSaludo.innerHTML = data.username
            } else { spanSaludo.innerHTML = ', registro no valido' }
        } else {

            spanSaludo.innerHTML = ', tenemos un problema'
            //location.assign('./error.html')
        }


    }

    function ajax(metodo, url, callback) {
        const http = new XMLHttpRequest()
        http.addEventListener('readystatechange', () => { callback(http) })

        http.open(metodo, url)
        http.send()

    }
}