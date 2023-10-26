class logo {
    constructor(){
        this.text = ''
        this.shape = ''
    }
    rendor(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
    setLetters(letters, colorL){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorL}">${letters}</text>`
    }
    setShape(shape){
        this.shape = shape.rendor()
    }
}

module.exports = logo