const validNumber = (value) => {
    let pass = value.match(/^[0-9]*$/);
    if(pass && value != '' && value != ' ') {
        return true;
    }
    return 'Please enter a number';
}

module.exports = [{
    type: 'input',
    name: 'title',
    message: 'Enter the name of the game'
}, {
    type: 'list',
    name: 'type',
    message: 'Select type of canvas?',
    choices: [
      'Phaser.AUTO',
      'Phaser.CANVAS',
      'Phaser.WEBGL'
    ]
  }, {
    type: 'input',
    name: 'width',
    message: 'width of project', 
    validate: validNumber
}, {
    type: 'input',
    name: 'height',
    message: 'heigth of project',
    validate: validNumber
}, {
    type: 'list',
    name: 'pixelArt',
    message: 'Is it a pixel art game?',
    choices: [
      'true',
      'false'
    ]
  }, {
    type: 'list',
    name: 'physics',
    message: 'Do you want arcade physics?',
    choices: [
      'true',
      'false'
    ]
  }
];

