/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    logger: {
      dir: `${appInfo.root}/ownlogs`,
    },
    redis: {
      clinet: {
        sentinels: [{
          port: 6379,
          host: '127.0.0.1',
        }],
        password: null,
        db: 0,
      }
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595830201166_4056';

  // add your middleware config here
  config.middleware = ['errHandle'];

  // add your user config here
  const userConfig = {
    security: {
      csrf: {
        enable: false,
      },
    },
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
