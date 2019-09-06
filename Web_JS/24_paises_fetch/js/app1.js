
export function app() {
    console.log("Cargada app")

    const usersURL = 'https://restcountries.eu/rest/v2/region/'

    const imgPais = 'https://restcountries.eu/data/'


    const store = 'userName'

    ///Nodos DOM

    //let btnBorrar = document.querySelector('#btn_borrar')

    let inId = document.querySelector('#in-id')
    console.log(inId)

    let btnBuscar = document.querySelector('#btn_buscar')

    let optPais = document.querySelector('#span_pais')


        ///

    //Asociación de manejadores de eventos

    btnBuscar.addEventListener('click', onClickPais)

    inId.addEventListener('change', onClickPais)

    // funciones de manejadores de eventos


    ///ES2017

    async function onClickPais(ev) {
        let url = usersURL + inId.value
        console.log(url)


            let response = await fetch(url)

                let data = await response.json()


                data = data.map( item =>  `<option  value="${item.alpha3Code.toLowerCase()}">${item.translations.es}</option>`)

                optPais.innerHTML = '<option value="">Elige pais:</option>' +  data

                //String.toLowerCase()
                
             let selectPais = document.querySelector('.opt_pais')

            let banderaPais = document.querySelector('#bandera-pais')

            selectPais.addEventListener('change', onclickBandera ) 
                 
                    
                    async function onclickBandera(ev) {

                        //valor del pais (value)
                        console.log(selectPais.value)
                
                        let url =  imgPais + selectPais.value + '.svg'
                
                      console.log(url) 

                      let data= `<img class="bandera" src="${url}"></img>`

                            console.log(data)

                        banderaPais.innerHTML = data
                    }
                
                }
}