class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = color
    }
}

//These functions will be pulled into the logo.js file - setshape function
class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="150" r="80" fill="${this.color}"/>`
    }

}
class Triangle extends Shape {
    render(){
        return `<polygon points="150 15, 300 300, 0 300" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render(){
        return `<rect x="80" y="80" width="150" height="150" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Triangle, Square,}
