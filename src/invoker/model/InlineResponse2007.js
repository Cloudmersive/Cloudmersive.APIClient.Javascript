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
    define(['invoker/ApiClient', 'invoker/model/InlineResponse2007TaggedSentences'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2007TaggedSentences'));
  } else {
    // Browser globals (root is window)
    if (!root.Cloudmersive) {
      root.Cloudmersive = {};
    }
    root.Cloudmersive.InlineResponse2007 = factory(root.Cloudmersive.ApiClient, root.Cloudmersive.InlineResponse2007TaggedSentences);
  }
}(this, function(ApiClient, InlineResponse2007TaggedSentences) {
  'use strict';




  /**
   * The InlineResponse2007 model module.
   * @module invoker/model/InlineResponse2007
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>InlineResponse2007</code>.
   * Part of speech tag result
   * @alias module:invoker/model/InlineResponse2007
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoker/model/InlineResponse2007} obj Optional instance to populate.
   * @return {module:invoker/model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TaggedSentences')) {
        obj['TaggedSentences'] = ApiClient.convertToType(data['TaggedSentences'], [InlineResponse2007TaggedSentences]);
      }
    }
    return obj;
  }

  /**
   * Sentences in the string
   * @member {Array.<module:invoker/model/InlineResponse2007TaggedSentences>} TaggedSentences
   */
  exports.prototype['TaggedSentences'] = undefined;



  return exports;
}));


