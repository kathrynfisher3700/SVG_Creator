const fs = require('fs')
const inquirer = require('inquirer')
const shapes = require('./lib/shapes.js');

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
    console.log(response);
    // const shapeN = new Circle (letters, colorL, shape, colorS);
    // shapeN.create();

  });

//       fs.writeFile("logo.svg",
// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <circle cx="150" cy="100" r="80" fill="${colorS}" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorL}">${letters}</text>

// </svg>` , (err) =>
// err ? console.error(err) : console.log('Thank You!'))
// });

