const {writeFile} = require('fs/promises')
const inquirer = require('inquirer')
const {Circle, Triangle, Square} = require('./lib/shapes')
const logo = require('./lib/logo')

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter letters displayed. 3max",
      name: "letters",
      maxLength: 3,
    },
    {
      type: "input",
      message: "Letter color",
      name: "colorL",
    },
    {
      type: "checkbox",
      message: "Choose a shape.",
      name: "shape",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "Shape color",
      name: "colorS",
    },
  ])
  .then((response) => {
    const { letters, colorL, shape, colorS } = response
    
    fs.writeFile('logo.svg', shape.setColor(colorS),logo.rendor(), logo.setLetters(letters,colorL), logo.setShape(shape) 
    ), (err) => err ? console.error(err) : console.log('Thank You!'))
  })




