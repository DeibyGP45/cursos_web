
export function app() {
    console.log("Cargada app")

    const usersURL = 'https://restcountries.eu/rest/v2/region/'


    const store = 'userName'

    ///Nodos DOM

    //let btnBorrar = document.querySelector('#btn_borrar')

    let inId = document.querySelector('#in-id')

    let btnBuscar = document.querySelector('#btn_buscar')

    let spanSaludo = document.querySelector('#span_saludo')

    let selectPais = document.querySelectorAll('#span_saludo option')

    let banderaPais = document.querySelector('#bandera-pais')

    //Asociación de manejadores de eventos

    btnBuscar.addEventListener('click', onClickPais)

    inId.addEventListener('change', onClickPais)

    selectPais.addEventListener('click', onclickBandera)


    //inId.addEventListener('change', onClickBuscar2017)

    // funciones de manejadores de eventos


    ///ES2017

    async function onClickPais(ev) {
        let url = usersURL + inId.value
        console.log(url)

        try {

            let response = await fetch(url)

            if (response.status == 200) {
                let data = await response.json()

                data = data.map( item =>  `<option id="${item.name}">${item.translations.es}</option>`)

                spanSaludo.innerHTML = '<option value="">Elige pais:</option>' +  data

                
           
            } else {
                //spanSaludo.innerHTML = ', hay un error de conexion'
                throw (new Error(response.status))
            }
        }
        catch (error) {
            spanSaludo.innerHTML = ''
        }
    }
    
    async function onclickBandera(ev) {
        let url = usersURL + inId.value
        console.log(url)

        try {

            let response = await fetch(url)

            if (response.status == 200) {
                let data = await response.json()

                data = data.map( item =>  `<option id="${item.name}">${item.translations.es}</option>`)

                banderaPais.innerHTML = '<option value="">Elige pais:</option>' +  data

                
           
            } else {
                //banderaPais.innerHTML = ', hay un error de conexion'
                throw (new Error(response.status))
            }
        }
        catch (error) {
            banderaPais.innerHTML = ''
        }
    }
}