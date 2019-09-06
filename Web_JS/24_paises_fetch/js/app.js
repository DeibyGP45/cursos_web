
export function app() {
    console.log("Cargada app")

    const usersURL = 'https://restcountries.eu/rest/v2/region/'

    const imgPais = 'https://restcountries.eu/data/'


    ///Nodos DOM


    let inId = document.querySelector('#in-id')
    console.log(inId)


    let optPais = document.querySelector('#span_pais')


    //Asociación de manejadores de eventos


    inId.addEventListener('change', onClickPais)

    // funciones de manejadores de eventos

    async function onClickPais() {
        let url = usersURL + inId.value
        console.log(url)


        let response = await fetch(url)

        let data = await response.json()


        data = data.map(item => `<option  value="${item.alpha3Code.toLowerCase()}">${item.translations.es}</option>`)

        optPais.innerHTML = '<option value="">Elige pais:</option>' + data

        //String.toLowerCase()

        let selectPais = document.querySelector('.opt_pais')

        let banderaPais = document.querySelector('#bandera-pais')

        selectPais.addEventListener('change', onclickBandera)


        async function onclickBandera() {

            console.log(selectPais.value)

            let url = imgPais + selectPais.value + '.svg'

            console.log(url)

            let data = `<img class="bandera" src="${url}"></img>`

            console.log(data)

            banderaPais.innerHTML = data
        }

    }
}