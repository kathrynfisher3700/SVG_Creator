class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${color}" />`
    }

}
class Triangle extends Shape {
    render(){
        return `<polygon points="200,10 250,190 160,210" fill="${color}" />`
    }
}
class Square extends Shape {
    render(){
        return `<rect x="30" y="30" width="30" height="30" fill="${color}"/>`
    }
}

module.exports = {Circle, Triangle, Square,}
