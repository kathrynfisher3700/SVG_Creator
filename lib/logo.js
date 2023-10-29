const {Circle, Triangle, Square} = require('./shapes')

class Logo {
    constructor(){
        this.text = ''
        this.design = ''
    }
    //The final step, this completes the svg information with chosen shape, text, and colors
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.design}${this.text}</svg>`
    }
    //This adds the prompted letters and colors to the render
    setLetters(letters, colorL){
        this.text = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${colorL}">${letters}</text>`
    }
    //This will render the specific shape that the users enters, using the file shapes.js
    setShape(shape){
         this.design = shape.render()
    }
}

module.exports = Logo