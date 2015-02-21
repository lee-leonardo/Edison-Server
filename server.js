var five = require("johnny-five");
var Edison = require("edison-io");

//Copied from the edison-io npm page.
var board = new five.board({
  io: new Edison()
});

board.on("ready", function () {
  var led = new five.Led(13);
  led.blink();
});
