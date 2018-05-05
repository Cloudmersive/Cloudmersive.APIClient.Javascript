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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Cloudmersive);
  }
}(this, function(expect, Cloudmersive) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Cloudmersive.ConvertDataApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ConvertDataApi', function() {
    describe('convertDataCsvToJson', function() {
      it('should call convertDataCsvToJson successfully', function(done) {
        //uncomment below and update the code to test convertDataCsvToJson
        //instance.convertDataCsvToJson(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDataXmlToJson', function() {
      it('should call convertDataXmlToJson successfully', function(done) {
        //uncomment below and update the code to test convertDataXmlToJson
        //instance.convertDataXmlToJson(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
