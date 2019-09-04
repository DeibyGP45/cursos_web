
export function app() {
    console.log("Cargada app")

    const USERS = 'http://localhost:3000/users'

    let aUsers = []

    getDatos()

    ///Nodos DOM


    let aInputs = document.querySelectorAll('input')
    let btnAdd = document.querySelector('#btn-add')
    let tbUsuarios = document.querySelector('#tb-usuarios')


    let btnBorrar = [] // Toman valor tras renderizar la tabla 
    let btnEditar = []

    //let dlgBorrar = document.querySelector(dlg-borrar)


    //Asociación de manejadores de eventos


    btnAdd.addEventListener('click', onClickAdd)


    // funciones de manejadores de eventos

    function onClickAdd() {
        let oUser = {
            nombre: aInputs[0].value,
            edad: aInputs[1].value
        }
        console.log(oUser)
        let cabecera = new Headers({
            'Content-Type': 'application/json'
        })

        fetch(USERS, {
            method: 'POST',
            headers: cabecera,
                body: JSON.stringify(oUser)
        }).then( response => response.json())
        .then( data => {
                if(data.id > 0) {

                }
        } )
    }

    function onEditar(ev) {
        console.log('editar', ev.target.parentElement.dataset.id)
        let id 
        if (ev.target.tagName == 'TD') {
            id = ev.target.dataset.id
        } else {
            ev.target.parentElement.dataset.id
        }
    }

    function onBorrar(ev) {
        console.log('borrar', ev.target.dataset.id)
    }


    function getDatos() {
        fetch(USERS)
            .then(response => response.json())
            .then(data => {
                aUsers = data
                renderData()
            })

    }


    ///ES2017



    function renderData() {
        let html =`
            <tr>
                <th>id</th>
                <th>nombre</th>
                <th>edad</th>
            </tr>`
            aUsers.forEach(item => html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.edad}</td>
                <td class="btn-editar" data-id="${item.id}">✍</td>
                <td class="btn-borrar"" data-id="${item.id}">❌</td>
            </tr>
            ` );
        tbUsuarios.innerHTML = html
        actualizarBotones()
        
    }

    function actualizarBotones() {



        btnEditar = document.querySelectorAll('.btn-editar')
        btnBorrar = document.querySelectorAll('.btn-borrar')



        btnBorrar.forEach(item => addEventListener('click', onBorrar))
        btnEditar.forEach(item => addEventListener('click', onEditar))

    }

    function renderError(error) {
        pError.innerHTML = 'error de conexión: ' + error
    }


    function ajax(metodo, callback) {
        const http = new XMLHttpRequest()
        http.addEventListener('readystatechange', () => { callback(http) })

        http.open(metodo, url)
        http.send()

    }
}