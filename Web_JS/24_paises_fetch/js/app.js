
export function app() {
    console.log("Cargada app")

    const usersURL = 'https://restcountries.eu/rest/v2/region/'

    const imgPais = 'https://restcountries.eu/data/'

    const infoURL = 'https://restcountries.eu/rest/v2/alpha/'


    ///Nodos DOM


    let inId = document.querySelector('#in-id')
    //console.log(inId)

    let optPais = document.querySelector('#span_pais')



    //Asociación de manejadores de eventos


        inId.addEventListener('change', onClickPais)


    // funciones de manejadores de eventos

    async function onClickPais() {

        let url = usersURL + inId.value

        //console.log(url)


        let response = await fetch(url)

        //console.log(response)

        let data = await response.json()


        data = data.map(item => `<option  value="${item.alpha3Code.toLowerCase()}">${item.translations.es}</option>`)

        optPais.innerHTML = '<option value="">Elige pais:</option>' + data

        //String.toLowerCase()

        let selectPais = document.querySelector('.opt_pais')

        let banderaPais = document.querySelector('#bandera-pais')


        let infoDatos = document.querySelector('#info-datos')///

        selectPais.addEventListener('change', onclickBandera)

        selectPais.addEventListener('change', onClickInfo)


        async function onclickBandera() {

            //console.log(selectPais.value)

            let url = imgPais + selectPais.value + '.svg'

            //console.log(url)

            let data = 
                        `<img class="bandera" src="${url}"></img>`

            //console.log(data)

            banderaPais.innerHTML = data
        }


        async function onClickInfo() {

            let url = infoURL + selectPais.value

           // console.log(url)

            let response = await fetch(url)

            //console.log(response)

            let data = await response.json()

            //console.log(data.languages[0].name)


            data = 
                `<h3>${data.translations.es}</h3>
                <p>${data.name}</p>

                <table>
                    <tr>
                        <th>Capital:</th>
                        <td>${data.capital}</td>
                    </tr>
                    <tr>
                        <th>Población:</th>
                    <td>${data.population}</td>
                    </tr>
                    <tr>
                        <th>Idioma:</th>
                        <td>${data.languages[0].name}</td>
                    </tr>
                    <tr>
                        <th>Región:</th>
                        <td>${data.region}</td>
                    </tr>
                    <tr>
                        <th>Subregión:</th>
                        <td>${data.subregion}</td>
                    </tr>
                </table>
                `

        infoDatos.innerHTML = data
    }

    }

}