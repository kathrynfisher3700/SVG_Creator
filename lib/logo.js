const {Circle, Triangle, Square} = require('./shapes')

class Logo {
    constructor(){
        this.text = ''
        this.design = ''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.design}${this.text}</svg>`
    }
    setLetters(letters, colorL){
        this.text = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${colorL}">${letters}</text>`
    }
    setShape(shape){
         this.design = shape.render()
    }
}

module.exports = Logo