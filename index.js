const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter 3 letters',
      name: 'letters',
      maxLength: 3
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
