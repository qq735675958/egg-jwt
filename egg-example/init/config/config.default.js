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
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1559455346442_5759';

  // add your middleware config here
  config.middleware = ['gzip','authurl','auth'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
	
	config.security = {
	  csrf: {
	    enable: false,
	  },
	};
	
	config.jwt = {
		secret:"huyu_test"
	}

  return {
    ...config,
    ...userConfig,
  };
};
