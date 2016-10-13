global.jQuery = require('jquery');
const $ = global.jQuery;

global.displayHex = false;

function channelToHex(channel) {
  const hex = channel.toString(16);
  return (hex.length == 1) ? `0${hex}` : hex;
}

function rgbToHex(color) {
  return `#${channelToHex(color.red)}${channelToHex(color.green)}${channelToHex(color.blue)}`;
}

function setTimeDisplay(display, isColor = false) {
  const clock = $('#clock');

  if (isColor) {
    clock.html(
      display
        .substring(1)
        .toUpperCase()
    );
  } else {
    clock.html(`${display.hour}:${display.minute}:${display.second}`);
  }
}

function setBackgroundColor(color) {
  $('body').css('backgroundColor', color);
}

function calculateColor(time) {
  const color = {
    red: Math.round(time.hour * 11.08695652173913),
    green: Math.round(time.minute * 4.322033898305085),
    blue: Math.round(time.second * 4.322033898305085)
  };

  return rgbToHex(color);
}

function colorClock() {
  const date = new Date();
  const time = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };

  if (displayHex) {
    const color = calculateColor(time);
    setTimeDisplay(color, true);
    setBackgroundColor(color);
  } else {
    setTimeDisplay(time);
    setBackgroundColor(calculateColor(time));
  }
}

function init() {
  setInterval(colorClock, 1000);

  $('#clock').click(() => global.displayHex = !global.displayHex);
}

$(document).ready(init);
