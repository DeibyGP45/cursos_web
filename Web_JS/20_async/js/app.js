
export function app() {
    console.log("Cargada app")

            const usersURL = 'https://jsonplaceholder.typicode.com/users/'
            const http = new XMLHttpRequest()


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

   function onClickBorrar (ev) {

        inId.value = ''
        spanSaludo.innerHTML = inId.value
    } 

    /* function onInputNombre (ev) {
        
        spanSaludo.innerHTML = ev.target.value
    } */

    function onClickBuscar (ev) {
        if (inId.value < 0 || inId.value > 10) {
            return
        }
            let url = usersURL + '/' + inId.value

            
            http.addEventListener('readystatechange', leerDatos)
            
            http.open('GET', url)       /// Abre conexion
            http.send()                  /// manda datos 


        }

        ///AJAX
        

        /// funcion del evento AJAX

        function leerDatos(ev) {

            if(http.readyState == 4 && http.status == 200) {
                let data = JSON.parse(http.responseText) 
                console.log(http.responseText)
                spanSaludo.innerHTML = data.username
            }

            
        }


}