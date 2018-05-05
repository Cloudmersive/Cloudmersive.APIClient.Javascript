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
    define(['client.invoker/ApiClient', 'client.invoker/client.model/InlineResponse20018FoundViruses'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20018FoundViruses'));
  } else {
    // Browser globals (root is window)
    if (!root.Cloudmersive) {
      root.Cloudmersive = {};
    }
    root.Cloudmersive.InlineResponse20018 = factory(root.Cloudmersive.ApiClient, root.Cloudmersive.InlineResponse20018FoundViruses);
  }
}(this, function(ApiClient, InlineResponse20018FoundViruses) {
  'use strict';




  /**
   * The InlineResponse20018 model module.
   * @module client.invoker/client.model/InlineResponse20018
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>InlineResponse20018</code>.
   * Result of running a virus scan
   * @alias module:client.invoker/client.model/InlineResponse20018
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse20018</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.invoker/client.model/InlineResponse20018} obj Optional instance to populate.
   * @return {module:client.invoker/client.model/InlineResponse20018} The populated <code>InlineResponse20018</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CleanResult')) {
        obj['CleanResult'] = ApiClient.convertToType(data['CleanResult'], 'Boolean');
      }
      if (data.hasOwnProperty('FoundViruses')) {
        obj['FoundViruses'] = ApiClient.convertToType(data['FoundViruses'], [InlineResponse20018FoundViruses]);
      }
    }
    return obj;
  }

  /**
   * True if the scan contained no viruses, false otherwise
   * @member {Boolean} CleanResult
   */
  exports.prototype['CleanResult'] = undefined;
  /**
   * Array of viruses found, if any
   * @member {Array.<module:client.invoker/client.model/InlineResponse20018FoundViruses>} FoundViruses
   */
  exports.prototype['FoundViruses'] = undefined;



  return exports;
}));


