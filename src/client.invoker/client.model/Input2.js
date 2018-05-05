/**
 * Cloudmersive
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['client.invoker/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Cloudmersive) {
      root.Cloudmersive = {};
    }
    root.Cloudmersive.Input2 = factory(root.Cloudmersive.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Input2 model module.
   * @module client.invoker/client.model/Input2
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>Input2</code>.
   * Details of the HTML to PDF request
   * @alias module:client.invoker/client.model/Input2
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Input2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.invoker/client.model/Input2} obj Optional instance to populate.
   * @return {module:client.invoker/client.model/Input2} The populated <code>Input2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Html')) {
        obj['Html'] = ApiClient.convertToType(data['Html'], 'String');
      }
      if (data.hasOwnProperty('ExtraLoadingWait')) {
        obj['ExtraLoadingWait'] = ApiClient.convertToType(data['ExtraLoadingWait'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} Html
   */
  exports.prototype['Html'] = undefined;
  /**
   * @member {Number} ExtraLoadingWait
   */
  exports.prototype['ExtraLoadingWait'] = undefined;



  return exports;
}));


