const {Circle, Triangle, Square,} = require('./shapes')


// A testing suite for Triangle
describe ('Triangle', () => {
    describe('render',() =>{
        it('should create triangle points and blue color for svg', () => {
            const shapeT = new Triangle();
            shapeT.setColor("blue");
            expect(shapeT.render()).toEqual('<polygon points="150 15, 300 300, 0 300" fill="blue"/>');
        });
    });

});

// A testing suite for Circle
describe ('Circle', () => {
    describe('render',() =>{
        it('should create circle points and green color for svg', () => {
            const shapeC = new Circle();
            shapeC.setColor("green");
            expect(shapeC.render()).toEqual('<circle cx="150" cy="150" r="80" fill="green"/>');
        });
    });

});
// A testing suite for Square
describe ('Square', () => {
    describe('render',() =>{
        it('should create square points and red color for svg', () => {
            const shapeS = new Square();
            shapeS.setColor("red");
            expect(shapeS.render()).toEqual('<rect x="80" y="80" width="150" height="150" fill="red"/>');
        });
    });

});

