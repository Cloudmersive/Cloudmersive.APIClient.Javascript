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
    instance = new Cloudmersive.Input1();
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

  describe('Input1', function() {
    it('should create an instance of Input1', function() {
      // uncomment below and update the code to test Input1
      //var instane = new Cloudmersive.Input1();
      //expect(instance).to.be.a(Cloudmersive.Input1);
    });

    it('should have the property url (base name: "Url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new Cloudmersive.Input1();
      //expect(instance).to.be();
    });

    it('should have the property extraLoadingWait (base name: "ExtraLoadingWait")', function() {
      // uncomment below and update the code to test the property extraLoadingWait
      //var instane = new Cloudmersive.Input1();
      //expect(instance).to.be();
    });

  });

}));
