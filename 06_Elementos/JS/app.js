/* import dialogPolyfill from'../../node_modules/dialog-polyfill/index.js'
 */
function main() {

   /*  let modal = document.querySelector ('#dlg-sample'); */

    // dialogPolyfill.registerDialog(modal)
    // Now dialog acts like a native <dialog>.
    


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
    /* let modal = document.querySelector ('dlg-sample') */

    document.querySelector ('#btnInfo').addEventListener(
        'click', onClick)

        document.querySelector ('#btnCerrar').addEventListener(
            'click', onClick)

      /*   function onClick() {

            if(!modal.open) {modal.open = false}

            modal.open = !modal.open

            if(!modal.open) {
                dialog.showModal();
            }
 */
        }


function canvas () {

    let c = document.querySelector('#cnv-sample').getContext('2d')
    c.fillRect(0, 60, 100, 50);

}


document.addEventListener('DOMContentLoaded', main)
document.addEventListener('DOMContentLoaded', canvas)