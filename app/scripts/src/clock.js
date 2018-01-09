'use strict';

$(document).ready(() => {
  const clock = $('#clock');
  let showHex = false;

  // Convert HH:MM:SS to RGB, then to hex
  function timeToHex(time) {
    return [
      Math.round(time.hours / 23 * 255),
      Math.round(time.minutes / 59 * 255),
      Math.round(time.seconds / 59 * 255),
    ].reduce((accum, currVal) => {
      let hex = currVal.toString(16).toUpperCase();
      if (hex.length < 2) hex = '0' + hex;
      return accum += hex;
    }, '#');
  }

  function updateClockText() {
    const currDate = new Date();
    const currTime = {
      hours: currDate.getHours(),
      minutes: currDate.getMinutes(),
      seconds: currDate.getSeconds(),
    };

    const color = timeToHex(currTime);
    const newClockText = showHex ? color : `${currTime.hours}:${currTime.minutes}:${currTime.seconds}`;

    $('body').css('backgroundColor', color);
    clock.html(newClockText);
  }

  clock.on('click', () => {
    showHex = !showHex;
    updateClockText(showHex);
  });

  setInterval(updateClockText, 1000);
});
