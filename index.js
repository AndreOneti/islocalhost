'use strict'
const { networkInterfaces } = require('os');

/**
 * If local return true else return false
 * @param {string} url Url to be analised
 * @returns {boolean}
 * @public
 */
function isLocalhost(url) {

  const nets = networkInterfaces();
  const local = ['localhost'];

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && name !== 'tun0') local.push(net.address);
    }
  }

  return local.some(item => url.includes(item));
}

module.exports = {
  isLocalhost
};
