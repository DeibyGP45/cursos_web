
   //Gestion de errores
   
   const  x = 67
   let z = 45

   try {
       /* x = 56 */
       //throw 'Probando error'
       z = z + x
       console.log('z vale', z)
   } catch (error) {
       console.log ('Perdona, se ha producido un error')
       if (error.name) {
            console.log(error.name, error.message)

       } else {

        console.log(error)
       }

   }

    console.log ('x vale', x)

    function sumar(a,b) {return a + b}

    sumar(8,9)