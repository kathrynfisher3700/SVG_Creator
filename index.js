const { writeFile } = require('fs/promises')
const inquirer = require('inquirer')
// const {Circle, Triangle, Square} = require('./lib/shapes')
const Circle = require('./lib/shapes')
const Logo = require('./lib/logo')




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
  .then(({letters, colorL, shape, colorS}) => {
    let circle = new Circle();
    circle.setColor(colorS)
   logo.setShape(shape)
  logo.setLetters(letters, colorL)
  return writeFile('logo.svg', logo.rendor())
  })




