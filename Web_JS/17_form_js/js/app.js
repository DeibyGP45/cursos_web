import {validation, validationFinal} from "./validacion.js"

export function app() {
    console.log("Cargada app")

    // Nodos del DOM

    let form = document.querySelector('[name="complete-post"]')
    //let btnReseet = document.querySelector('')
    let aFormData = document.querySelectorAll('.form_data') //
    let aCheckBox = document.querySelectorAll('[type="checkbox"]')
    let aSelects = document.querySelectorAll('select')
    let aRadioSitio = document.querySelectorAll('[name="sitio"]')

    let dlgConfirm = document.querySelector('.dlg-confirm')
    let aDlgBtn = document.querySelectorAll('.dlg-confirm button')


    let oDatos = {

        userName: '',
        userPasswd: '',
        email: '',
        dni: '',
        birthDate: '',
        cv: '',
        info: '',
        isOk: 'on', //is=Ok
        curso: '',
        sitio: ''
    }

    let oDatosPretty =  {
        userName: 'Nombre de Usuario',
        userPasswd: 'Contraseña',
        email: 'Correo electrónico',
        dni: 'DNI',
        cv: 'Formación',
        birthDate: 'Fecha de nacimiento',
        info: 'Más información',
        isOk: 'Condiciones aceptadas',
        curso: 'Curso',
        sitio: 'Sitio',    
    }




    // Definir manejadores

    form.addEventListener('submit', onSubmit)
    aDlgBtn.forEach(btn => btn.addEventListener('click', onClickDlg)) //

    let aNodosValidables = nodosValidables()
    validacion()

    // funciones manejadoras de evento

    function onSubmit(ev) {

        ev.preventDefault()

        console.log('Iniciando Submit')

        let aNodos = []

        
        aFormData.concact(aCheckBox).concact(aSelects).push(aRadioSitio)
        , aCheckBox, aSelects, aRadioSitio [0]

        if (!validationFinal(nodosValidables)) {

            return
        }
            aFormData

function nodosValidables() {

        aFormData.forEach(
            item => oNodos.push(item))

        aCheckBox.forEach(
            item => oNodos.push(item))

        aSelects.forEach(
            item => oNodos.push(item))

        aNodos.push(aRadioSitio[0])    
        return aNodos.filter(item => !item.checkValidity())
    }
        

        oDatos.sitio = getRadio(aRadioSitio)

        aNodos.filter

        renderModal()

        dlgConfirm.showModal()

        console.log(oDatos)
        console.dir(aSelects[0])

    }


    

    function onReset(params) {

        ev.preventDefault()
        console.dir(aSelects[0])
    }


    function getRadio(aNodos) {

        for (let i = 0; i < aNodos.length; i++) {
            const item = aNodos[i];
            if (item.checked) {
                return item.value}
        }
 }
        function onClickDlg (ev) {

            if(ev.target.textContent.toLowerCase() === 'Sí') { 
                form.submit()
            } 
            dlgConfirm.close()
        }

        function renderModal() {

            let html = ''

            for (const key in oDatos) {
                    const value = oDatos[key];
                    if( key == 'userPasswd'){

                        html += `<li> ${oDatosPretty[key]} --> ******* </li>`

                    } else if (key === 'isOk') {
                        html += `<li>${oDatosPretty[key]}</li>`
                    } else {
                    html += `<li> ${oDatosPretty[key]} --> ${value} </li>`
                    }
                }

                dlgConfirm.children[1].innerHTML = html
                dlgConfirm.showModal()
            }
       


    }