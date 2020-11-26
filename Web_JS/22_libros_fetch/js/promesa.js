function algoAsync() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let n = Math.random()
            if (n < 0.8) {

                //OK
                resolve(n)

            } else {

                //error
                reject(n)
            }

        }, 1000)

    })

}

/* algoAsync()
.then( datos  => console.log('You Win!! Score: ' + datos) )
.catch( error => console.log('You Lose!! Score: ' + error) ) */

function main() {
    
}

main()

    (async () => {
        try {
            let datos = await algoAsync()
            console.log('You Win!! Score: ' + datos)
        } catch (error) {
            console.log('You Lose!! Score: ' + error)
        }
    })()
 