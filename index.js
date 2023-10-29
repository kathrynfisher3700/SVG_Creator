//Requires fs, specifially writeFile
const {writeFile} = require('fs/promises')
//Required for prompt and input recording
const inquirer = require('inquirer')
//Required to set maximum length on letter input
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
//Imported classes 
const {Circle, Triangle, Square,} = require('./lib/shapes')
const Logo = require('./lib/logo')

//Question prompts to create svg shape, letters, and colors
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
    //Deconstruction:
    const {letters, colorL, shape, colorS} = response
    //New instance of Logo class
    let logo = new Logo()
    //Function to set inputted letters and colors into svg
    logo.setLetters(letters, colorL)
    //New instances of each shape class, based on user input
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
    //Sets color of new shape instance
    newShape.setColor(colorS)
    //Set the shape
    logo.setShape(newShape)
    //Writes the svg file by calling logo.render function
    return writeFile('logo.svg', logo.render(), console.log('Generated logo.svg'))
  })

  
  
  
