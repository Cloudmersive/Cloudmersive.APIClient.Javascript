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
    root.Cloudmersive.InlineResponse2005 = factory(root.Cloudmersive.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2005 model module.
   * @module invoker/model/InlineResponse2005
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * Geolocation result
   * @alias module:invoker/model/InlineResponse2005
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoker/model/InlineResponse2005} obj Optional instance to populate.
   * @return {module:invoker/model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CountryCode')) {
        obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
      }
      if (data.hasOwnProperty('CountryName')) {
        obj['CountryName'] = ApiClient.convertToType(data['CountryName'], 'String');
      }
      if (data.hasOwnProperty('City')) {
        obj['City'] = ApiClient.convertToType(data['City'], 'String');
      }
      if (data.hasOwnProperty('RegionCode')) {
        obj['RegionCode'] = ApiClient.convertToType(data['RegionCode'], 'String');
      }
      if (data.hasOwnProperty('RegionName')) {
        obj['RegionName'] = ApiClient.convertToType(data['RegionName'], 'String');
      }
      if (data.hasOwnProperty('ZipCode')) {
        obj['ZipCode'] = ApiClient.convertToType(data['ZipCode'], 'String');
      }
      if (data.hasOwnProperty('TimezoneStandardName')) {
        obj['TimezoneStandardName'] = ApiClient.convertToType(data['TimezoneStandardName'], 'String');
      }
      if (data.hasOwnProperty('Latitude')) {
        obj['Latitude'] = ApiClient.convertToType(data['Latitude'], 'Number');
      }
      if (data.hasOwnProperty('Longitude')) {
        obj['Longitude'] = ApiClient.convertToType(data['Longitude'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Two-letter country code of IP address
   * @member {String} CountryCode
   */
  exports.prototype['CountryCode'] = undefined;
  /**
   * Country name of IP address
   * @member {String} CountryName
   */
  exports.prototype['CountryName'] = undefined;
  /**
   * City of IP address
   * @member {String} City
   */
  exports.prototype['City'] = undefined;
  /**
   * State/region code of IP address
   * @member {String} RegionCode
   */
  exports.prototype['RegionCode'] = undefined;
  /**
   * State/region of IP address
   * @member {String} RegionName
   */
  exports.prototype['RegionName'] = undefined;
  /**
   * Zip or postal code of IP address
   * @member {String} ZipCode
   */
  exports.prototype['ZipCode'] = undefined;
  /**
   * Timezone of IP address
   * @member {String} TimezoneStandardName
   */
  exports.prototype['TimezoneStandardName'] = undefined;
  /**
   * Latitude of IP address
   * @member {Number} Latitude
   */
  exports.prototype['Latitude'] = undefined;
  /**
   * Longitude of IP address
   * @member {Number} Longitude
   */
  exports.prototype['Longitude'] = undefined;



  return exports;
}));


