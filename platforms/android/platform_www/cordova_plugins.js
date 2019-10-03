cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-stripe-google-apple-pay.sgap",
      "file": "plugins/cordova-plugin-stripe-google-apple-pay/www/stripe-google-apple-pay.js",
      "pluginId": "cordova-plugin-stripe-google-apple-pay",
      "clobbers": [
        "sgap"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "es6-promise-plugin": "4.1.0",
    "cordova-plugin-stripe-google-apple-pay": "0.0.1"
  };
});