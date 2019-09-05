
export function app() {
    console.log("Cargada app")

    const usersURL = 'https://www.googleapis.com/books/v1/volumes?maxResults=20&fields=items(volumeInfo(authors%2Ctitle))&q='


    const store = 'userName'

    ///Nodos DOM

    let btnBorrar = document.querySelector('#btn_borrar')

    let inId = document.querySelector('#in-id')

    let btnBuscar = document.querySelector('#btn_buscar')

    let spanSaludo = document.querySelector('#span_saludo')

    //Asociación de manejadores de eventos

    btnBuscar.addEventListener('click', onClickBuscar2017)

    btnBorrar.addEventListener('click', onClickBorrar)

    inId.addEventListener('change', onClickBuscar2017)

    // funciones de manejadores de eventos

    function onClickBorrar(ev) {

        inId.value = ''
        spanSaludo.innerHTML = inId.value
    }


    ///ES2017

    async function onClickBuscar2017(ev) {
        let url = usersURL + inId.value
        console.log(url)

        try {

            let response = await fetch(url)

            if (response.status == 200) {
                let data = await response.json()
                console.log(data)
                spanSaludo.innerHTML = data.items.map(item =>


                    `<li class="titulo">

                    ${item.volumeInfo.title}

                        <p class="autor">${item.volumeInfo.authors.join(' & ')}</p>

                        </li>`

                ).join('')


                //items.volumeInfo.title
                //
            } else {
                //spanSaludo.innerHTML = ', hay un error de conexion'
                throw (new Error(response.status))
            }
        }
        catch (error) {

            spanSaludo.innerHTML = `<p>:(</p>` + error
        }
    }

    ///AJAX


    /// funcion del evento AJAX

    function leerDatos(http) {

        if (http.readyState == 4) {

            if (http.status == 200) {
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