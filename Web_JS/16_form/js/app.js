
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
        birthDate: '',
        cv: '',
        info: '',
        isOk: 'on', //is=Ok
        curso: '',
        sitio: ''


    }




    // Definir manejadores

    form.addEventListener('submit', onSubmit)
    aDlgBtn.addEventListener('click', onClickDlg) //

    // funciones manejadoras de evento

    function onSubmit(ev) {

        ev.preventDefault()

        console.log('Iniciando Submit')

        aFormData.forEach(item => oDatos[item.value] = item.value)
        aCheckBox.forEach(item => oDatos[item.value] = item.checked)
        aSelects.forEach(item => oDatos[item.value] = item.value)
        oDatos.sitio = getRadio(aRadioSitio)

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

                return item.value
            }
        }

        function onClickDlg(ev) {

            if(ev.target.textContent.toLowerCase() === 'Sí') {

                //Enviar de verdad
                form.submit()
            } 
            dlgConfirm.close()
        }

        function renderModal(params) {

            let html = ''

            for (const key in oDatos) {
                    const value = oDatos[key];
                    if( key == 'userPasswd'){

                        html += `<li> ${key} --> ******* </li>`

                    } else {
                    html += `<li> ${key} --> ${value} </li>`
                    }
                }

                dlgConfirm.children[1].innerHTML = html
                dlgConfirm.showModal()
            }
        }


    }