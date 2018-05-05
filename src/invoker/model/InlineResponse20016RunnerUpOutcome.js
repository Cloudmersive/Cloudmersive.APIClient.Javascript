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
    define(['invoker/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Cloudmersive) {
      root.Cloudmersive = {};
    }
    root.Cloudmersive.InlineResponse20016RunnerUpOutcome = factory(root.Cloudmersive.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20016RunnerUpOutcome model module.
   * @module invoker/model/InlineResponse20016RunnerUpOutcome
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>InlineResponse20016RunnerUpOutcome</code>.
   * Best backup (\&quot;runner up\&quot;) Machine Learning outcome
   * @alias module:invoker/model/InlineResponse20016RunnerUpOutcome
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse20016RunnerUpOutcome</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoker/model/InlineResponse20016RunnerUpOutcome} obj Optional instance to populate.
   * @return {module:invoker/model/InlineResponse20016RunnerUpOutcome} The populated <code>InlineResponse20016RunnerUpOutcome</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ConfidenceScore')) {
        obj['ConfidenceScore'] = ApiClient.convertToType(data['ConfidenceScore'], 'Number');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
    }
    return obj;
  }

  /**
   * Scores closer to 1 are better than scores closer to 0
   * @member {Number} ConfidenceScore
   */
  exports.prototype['ConfidenceScore'] = undefined;
  /**
   * English language description of the image
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;



  return exports;
}));


