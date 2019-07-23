export class App {

    constructor () {

    console.log('Cargada app') 
    
    this.btnPlayPause = document.querySelector('#btn-playPause')
    //this.btnReset = document.querySelector('#btn-reset')
    this.output = document.querySelector('output')
    this.handle = 0
    this.time = 0


    this.btnPlayPause.addEventListener('click',this.play)
   // this.btnReset.addEventListener('click', this.reset)
}

    play() {

        this.handle = setInterval( () => {
            this.time += 1
             this.render()
        },1000)

    }

    pause() {
        clearInternal(this.handle)
    
    }

    reset () {
        this.time = 0
        this.render()

    }

    render() {

        this.output.value = this.time
    }

}
