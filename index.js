const {writeFile} = require('fs/promises')
const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
const {Circle, Triangle, Square,} = require('./lib/shapes')
const Logo = require('./lib/logo')
const { log } = require('console')




inquirer
  .prompt([
    {
      type: "maxlength-input",
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
      type: "list",
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
    const {letters, colorL, shape, colorS} = response
    let logo = new Logo()
    logo.setLetters(letters, colorL)

    let newShape;
    switch(shape) {
      case 'circle':
        newShape = new Circle()
        break;
      case 'triangle':
        newShape = new Triangle()
        break
      case 'square':
        newShape = new Square()
    }
    newShape.setColor(colorS)
    logo.setShape(newShape)
    return writeFile('logo.svg', logo.render(), console.log('Generated logo.svg'))
  })

  
  
  
