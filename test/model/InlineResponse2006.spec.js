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
    instance = new Cloudmersive.InlineResponse2006();
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

  describe('InlineResponse2006', function() {
    it('should create an instance of InlineResponse2006', function() {
      // uncomment below and update the code to test InlineResponse2006
      //var instane = new Cloudmersive.InlineResponse2006();
      //expect(instance).to.be.a(Cloudmersive.InlineResponse2006);
    });

    it('should have the property successful (base name: "Successful")', function() {
      // uncomment below and update the code to test the property successful
      //var instane = new Cloudmersive.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property detectedLanguageThreeLetterCode (base name: "DetectedLanguage_ThreeLetterCode")', function() {
      // uncomment below and update the code to test the property detectedLanguageThreeLetterCode
      //var instane = new Cloudmersive.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property detectedLanguageFullName (base name: "DetectedLanguage_FullName")', function() {
      // uncomment below and update the code to test the property detectedLanguageFullName
      //var instane = new Cloudmersive.InlineResponse2006();
      //expect(instance).to.be();
    });

  });

}));
