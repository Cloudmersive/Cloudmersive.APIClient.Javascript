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
    root.Cloudmersive.GenerateBarcodeApi = factory(root.Cloudmersive.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * GenerateBarcode service.
   * @module client.invoker/client/GenerateBarcodeApi
   * @version 1.2.1
   */

  /**
   * Constructs a new GenerateBarcodeApi. 
   * @alias module:client.invoker/client/GenerateBarcodeApi
   * @class
   * @param {module:client.invoker/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:client.invoker/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the generateBarcodeEAN13 operation.
     * @callback module:client.invoker/client/GenerateBarcodeApi~generateBarcodeEAN13Callback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validates and generate a EAN-13 barcode as a PNG file, a type of 1D barcode
     * @param {String} value Barcode value to generate from
     * @param {module:client.invoker/client/GenerateBarcodeApi~generateBarcodeEAN13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.generateBarcodeEAN13 = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling generateBarcodeEAN13");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['image/png'];
      var returnType = File;

      return this.apiClient.callApi(
        '/barcode/generate/ean-13', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateBarcodeEAN8 operation.
     * @callback module:client.invoker/client/GenerateBarcodeApi~generateBarcodeEAN8Callback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validates and generate a EAN-8 barcode as a PNG file, a type of 1D barcode
     * @param {String} value Barcode value to generate from
     * @param {module:client.invoker/client/GenerateBarcodeApi~generateBarcodeEAN8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.generateBarcodeEAN8 = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling generateBarcodeEAN8");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['image/png'];
      var returnType = File;

      return this.apiClient.callApi(
        '/barcode/generate/ean-8', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateBarcodeQRCode operation.
     * @callback module:client.invoker/client/GenerateBarcodeApi~generateBarcodeQRCodeCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate a QR code barcode as a PNG file, a type of 2D barcode which can encode free-form text information
     * @param {String} value QR code text to convert into the QR code barcode
     * @param {module:client.invoker/client/GenerateBarcodeApi~generateBarcodeQRCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.generateBarcodeQRCode = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling generateBarcodeQRCode");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['image/png'];
      var returnType = File;

      return this.apiClient.callApi(
        '/barcode/generate/qrcode', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateBarcodeUPCA operation.
     * @callback module:client.invoker/client/GenerateBarcodeApi~generateBarcodeUPCACallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate and generate a UPC-A barcode as a PNG file, a type of 1D barcode
     * @param {String} value UPC-A barcode value to generate from
     * @param {module:client.invoker/client/GenerateBarcodeApi~generateBarcodeUPCACallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.generateBarcodeUPCA = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling generateBarcodeUPCA");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['image/png'];
      var returnType = File;

      return this.apiClient.callApi(
        '/barcode/generate/upc-a', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateBarcodeUPCE operation.
     * @callback module:client.invoker/client/GenerateBarcodeApi~generateBarcodeUPCECallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validates and generate a UPC-E barcode as a PNG file, a type of 1D barcode
     * @param {String} value UPC-E barcode value to generate from
     * @param {module:client.invoker/client/GenerateBarcodeApi~generateBarcodeUPCECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.generateBarcodeUPCE = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling generateBarcodeUPCE");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['image/png'];
      var returnType = File;

      return this.apiClient.callApi(
        '/barcode/generate/upc-e', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
