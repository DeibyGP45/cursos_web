let handler = setTimeout( ()  => {console.log('hola')},4000)

setTimeout(() => {clearTimeout(handler)}, 3000)