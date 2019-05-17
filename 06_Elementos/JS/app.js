function main() {
    document.querySelector('#btnInfo').addEventListener('click', mostrar)

    document.querySelector('#btnClose').addEventListener('click', cerrar)


        function mostrar() {
            document.querySelector('#dlg-sample').open = true
            }
        function cerrar() {
            document.querySelector('#dlg-sample').open = false
            }
}

function main2() {
    let modal = document.querySelector ('dlg-sample')

    document.querySelector ('#btnInfo').addEventListener(
        'click', onClick)

        document.querySelector ('#btnCerrar').addEventListener(
            'click', onClick)

        function onClick() {

            if(!modal.open) {modal.open = false}

            modal.open = !modal.open

        }

    }


document.addEventListener('DOMContentLoaded', main)