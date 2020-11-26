let handler = setTimeout( ()  => {
    console.log('hola')
},4000)

setTimeout(() => {
    clearTimeout(handler)
}, 3000)

let i = 0
setInterval(  () => {
    console.log(++i)
},100)