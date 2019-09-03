
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

    btnBuscar.addEventListener('click', onClickBuscar2017)

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

        ///ES2017

    async function onClickBuscar2017(ev) {
        let url = usersURL + '/' + inId.value

        try {

            response = await fetch(url)

            if (response.status == 200) {
                data = await response.json()
                spanSaludo.innerHTML = data.username
            } else {
                //spanSaludo.innerHTML = ', hay un error de conexion'
                throw (new Error(response.status))
            }
        } catch (error) {

            spanSaludo.innerHTML = ', datos no encontrados, Error:' + error
        }


    }

    ///AJAX


    /// funcion del evento AJAX

    function leerDatos(http) {

        /* if (http.readyState == 4 && ) {
            
        } */

        if (http.readyState == 4) {

            if (http.status == 200) {



                console.log(data)
                if (data) {

                } else if (http.readyState == 4) {

                }
            } else {

                spanSaludo.innerHTML = ', tenemos un problema'


            }
        }

    }

    function ajax(metodo, callback) {
        const http = new XMLHttpRequest()
        http.addEventListener('readystatechange', () => { callback(http) })

        http.open(metodo, url)
        http.send()

    }
}