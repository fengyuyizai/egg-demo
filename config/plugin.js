'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  redis: {
    enable: true,
    package: 'egg-redis'
  }
};
