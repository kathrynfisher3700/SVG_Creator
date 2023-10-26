class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    rendor(){
        return `<circle cx="150" cy="100" r="80" fill="${color}" />`
    }
}

// module.exports = {Circle, Triangle, Square}
module.exports = Circle