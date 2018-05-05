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
    define(['client.invoker/ApiClient', 'client.invoker/client.model/InlineResponse20016BestOutcome', 'client.invoker/client.model/InlineResponse20016RunnerUpOutcome'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20016BestOutcome'), require('./InlineResponse20016RunnerUpOutcome'));
  } else {
    // Browser globals (root is window)
    if (!root.Cloudmersive) {
      root.Cloudmersive = {};
    }
    root.Cloudmersive.InlineResponse20016 = factory(root.Cloudmersive.ApiClient, root.Cloudmersive.InlineResponse20016BestOutcome, root.Cloudmersive.InlineResponse20016RunnerUpOutcome);
  }
}(this, function(ApiClient, InlineResponse20016BestOutcome, InlineResponse20016RunnerUpOutcome) {
  'use strict';




  /**
   * The InlineResponse20016 model module.
   * @module client.invoker/client.model/InlineResponse20016
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>InlineResponse20016</code>.
   * Result of recognizing an image
   * @alias module:client.invoker/client.model/InlineResponse20016
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InlineResponse20016</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.invoker/client.model/InlineResponse20016} obj Optional instance to populate.
   * @return {module:client.invoker/client.model/InlineResponse20016} The populated <code>InlineResponse20016</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Highconfidence')) {
        obj['Highconfidence'] = ApiClient.convertToType(data['Highconfidence'], 'Boolean');
      }
      if (data.hasOwnProperty('BestOutcome')) {
        obj['BestOutcome'] = InlineResponse20016BestOutcome.constructFromObject(data['BestOutcome']);
      }
      if (data.hasOwnProperty('RunnerUpOutcome')) {
        obj['RunnerUpOutcome'] = InlineResponse20016RunnerUpOutcome.constructFromObject(data['RunnerUpOutcome']);
      }
    }
    return obj;
  }

  /**
   * Was the image processed successfully?
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Is the resulting best outcome recognition a high confidence outcome?
   * @member {Boolean} Highconfidence
   */
  exports.prototype['Highconfidence'] = undefined;
  /**
   * @member {module:client.invoker/client.model/InlineResponse20016BestOutcome} BestOutcome
   */
  exports.prototype['BestOutcome'] = undefined;
  /**
   * @member {module:client.invoker/client.model/InlineResponse20016RunnerUpOutcome} RunnerUpOutcome
   */
  exports.prototype['RunnerUpOutcome'] = undefined;



  return exports;
}));


