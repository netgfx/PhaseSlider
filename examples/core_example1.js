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

  this.load.image("arrow1", "../assets/arrow1.png");
  this.load.image("arrow2", "../assets/arrow2.png");
  this.load.image("accept", "../assets/stripe.png");
  this.load.image("box", "../assets/box.png");
  this.load.image("cancel", "../assets/cancel_paused.png");
  this.load.image("char1", "../assets/char1.png");
  this.load.image("char2", "../assets/char2.png");
  this.load.image("char3", "../assets/char3.png");
  this.load.image("char4", "../assets/char4.png");
  slider = new phaseSlider(game);
};

// Setup the example
GameState.prototype.create = function () {
  // Set stage background to something sky colored
  this.game.stage.backgroundColor = 0xcdcdcd;
  this.add.image(0, 0, "bg");
  var char1 = game.add.image(0,0,"char1");
  var char2 = game.add.image(0,0,"char2");
  var char3 = game.add.image(0,0,"char3");
  var char4 = game.add.image(0,0,"char4");

  var group1 = game.add.group();
  group1.width = 500;
  group1.height = 400;
  char1.scale.setTo(0.5, 0.5);
  char1.x = 500/2 - char1.width/2;
  char1.y = 100;

  //////////
  var group2 = game.add.group();
  group2.width = 500;
  group2.height = 400;
  char2.scale.setTo(0.5, 0.5);
  char2.x = 500/2 - char2.width/2;
  char2.y = 100;
  ///////////
  var group3 = game.add.group();
  group3.width = 500;
  group3.height = 400;
  char3.scale.setTo(0.5, 0.5);
  char3.x = 500/2 - char3.width/2;
  char3.y = 100;
  ////////////
  var group4 = game.add.group();
  group4.width = 500;
  group4.height = 400;
  char4.scale.setTo(0.5, 0.5);
  char4.x = 500/2 - char4.width/2;
  char4.y = 100;



  var block1 = game.add.image(0,0,"block1");
  var block2 = game.add.image(0,0,"block1");
  var block3 = game.add.image(0,0,"block1");
  var block4 = game.add.image(0,0,"block1");

  group1.add(block1);
  group1.add(char1);
  /////
  group2.add(block2);
  group2.add(char2);
  /////
  group3.add(block3);
  group3.add(char3);
  /////
  group4.add(block4);
  group4.add(char4);


  slider.createSlider({
    customSliderBG: false,
    sliderBGAlpha: 0.8,
    x: game.width / 2 - 500 / 2,
    y: game.height / 2 - 400 / 2,
    customHandleNext: "arrow2",
    customHandlePrev: "arrow1",
    objects:[group1, group2, group3, group4],
    onNextCallback: function() {
      window.console.log("next");
    },
    onPrevCallback: function(){
      window.console.log("prev")
    }
  });

  var btn = game.add.image((game.width/2 - 80/2), (game.height / 2 - 80 / 2)+180, "accept");
  btn.inputEnabled = true;
  btn.events.onInputDown.add(function (e, pointer) {
    var index = slider.getCurrentIndex();
    var text = game.add.text(0,0,"You selected -> ",{
      fontSize: 22,
      fill: "#1e1e1e"
    });
    text.updateText();

    text.x = game.width/2 - text.width/2;
    text.y = 80;

    var img = game.add.image(text.x+text.width+10, text.y-30, "char"+(index+1));
    img.scale.setTo(0.2, 0.2);

  },this);
};



// The update() method is called every frame
GameState.prototype.update = function () {

};

var game = new Phaser.Game(1024, 691, Phaser.CANVAS, 'game');
game.state.add('game', GameState, true);