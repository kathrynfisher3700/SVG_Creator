
const { writeFile } = require('fs');

class Shape {
    constructor (letters, colorL, shape, colorS) {
        this.letters = letters,
        this.colorL = colorL,
        this.shape = shape,
        this.colorS = colorS
    }
}

class Circle extends Shape {
    constructor(letters, colorL, shape, colorS){
        super(letters, colorL, shape, colorS)
    };

    create = function () {
        fs.writeFile("logo.svg",
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="${colorS}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorL}">${letters}</text>

</svg>` , (err) =>
err ? console.error(err) : console.log('Thank You!'))
    };
}

class Triangle extends Shape {
    constructor(letters, colorL, shape, colorS){
        super(letters, colorL, shape, colorS)
    }
}
class Square extends Shape {
    constructor(letters, colorL, shape, colorS){
        super(letters, colorL, shape, colorS)
    }
}

module.exports = Circle;
module.exports = Triangle;
module.exports = Square;