// Copyright © 2015 Michael Dobekidis
// Licensed under the terms of the MIT License
var reg = {};
var GameState = function (game) {};
var slider;
// Load images and sounds
GameState.prototype.preload = function () {
  this.load.image('bg', "http://i221.photobucket.com/albums/dd22/djmid71/bg1_zpsxrhh1f86.jpg");
  this.load.image("block1", "../assets/pinkBlock.png");
  this.load.image("block2", "../assets/blueBlock.png");
  this.load.image("block3", "../assets/greenBlock.png");
  this.load.image("block4", "../assets/yellowBlock.png");
  this.load.image("block5", "../assets/purpleBlock.png");
  this.load.image("box", "../assets/box.png");

  //
  slider = new phaseSlider(game);
};

// Setup the example
GameState.prototype.create = function () {
  // Set stage background to something sky colored
  this.game.stage.backgroundColor = 0xcdcdcd;
  this.add.image(0, 0, "bg");


  var block1 = game.add.image(0,0,"block1");
  var block2 = game.add.image(0,0,"block2");
  var block3 = game.add.image(0,0,"block3");
  var block4 = game.add.image(0,0,"block4");
  var block5 = game.add.image(0,0,"block5");

  slider.createSlider({
    customSliderBG: false,
    mode: "horizontal",
    sliderBGAlpha: 0.8,
    x: game.width / 2 - 500 / 2,
    y: game.height / 2 - 400 / 2,
    objects:[block1, block2, block3, block4, block5]
  });

  window.console.log(game, slider);
};



// The update() method is called every frame
GameState.prototype.update = function () {

};

var game = new Phaser.Game(1024, 691, Phaser.CANVAS, 'game');
game.state.add('game', GameState, true);