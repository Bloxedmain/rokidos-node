'use strict';
const volume = require('@rokid/volume');
const Player = require('@rokid/player').Player;
const sounder = new Player({
  autoStop: false,
});
// let initialized = false;
let lastPowerTimestamp = 0;

/**
 * @module keyevents
 */
module.exports = {

  /**
   * @method keyup
   */
  keyup() {
    const sounder = new Player();
    sounder.play(`${__dirname}/sounds/volume.ogg`);
    // if (!initialized) {
    //   sounder.play(`${__dirname}/sounds/volume.ogg`);
    //   initialized = true;
    // } else {
    //   // sounder.pause();
    //   sounder.seek(0);
    // }
  },

  /**
   * @method keydown
   */
  keydown() {
    // TODO
  },

  /**
   * @method volumeup
   */
  volumeup() {
    volume.volumeUp();
  },

  /**
   * @method volumedown
   */
  volumedown() {
    volume.volumeDown();
  },

  /**
   * @method mute
   */
  mute(speech) {
    speech.toggle();
  },

  /**
   * @method incPower
   */
  incPower(fn) {
    const now = Date.now();
    if (now - lastPowerTimestamp < 1000) {
      lastPowerTimestamp = 0;
      fn();
    } else {
      lastPowerTimestamp = now;
    }
  }

};