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
    define(['invoker/ApiClient', 'invoker/model/InlineResponse2002', 'invoker/model/InlineResponse2003', 'invoker/model/InlineResponse2004'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/InlineResponse2004'));
  } else {
    // Browser globals (root is window)
    if (!root.Cloudmersive) {
      root.Cloudmersive = {};
    }
    root.Cloudmersive.EmailApi = factory(root.Cloudmersive.ApiClient, root.Cloudmersive.InlineResponse2002, root.Cloudmersive.InlineResponse2003, root.Cloudmersive.InlineResponse2004);
  }
}(this, function(ApiClient, InlineResponse2002, InlineResponse2003, InlineResponse2004) {
  'use strict';

  /**
   * Email service.
   * @module invoker/client/EmailApi
   * @version 1.2.1
   */

  /**
   * Constructs a new EmailApi. 
   * @alias module:invoker/client/EmailApi
   * @class
   * @param {module:invoker/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:invoker/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the emailAddressGetServers operation.
     * @callback module:invoker/client/EmailApi~emailAddressGetServersCallback
     * @param {String} error Error message, if any.
     * @param {module:invoker/model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partially check whether an email address is valid
     * Validate an email address by identifying whether its parent domain has email servers defined.  This call is less limited than syntaxOnly but not as comprehensive as address/full.
     * @param {String} email Email address to validate, e.g. \&quot;support@cloudmersive.com\&quot;
     * @param {module:invoker/client/EmailApi~emailAddressGetServersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:invoker/model/InlineResponse2003}
     */
    this.emailAddressGetServers = function(email, callback) {
      var postBody = email;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling emailAddressGetServers");
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
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/validate/email/address/servers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the emailFullValidation operation.
     * @callback module:invoker/client/EmailApi~emailFullValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:invoker/model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fully validate an email address
     * Performs a full validation of the email address.  Checks for syntactic correctness, identifies the mail server in question if any, and then contacts the email server to validate the existence of the account - without sending any emails.
     * @param {String} email Email address to validate, e.g. \&quot;support@cloudmersive.com\&quot;
     * @param {module:invoker/client/EmailApi~emailFullValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:invoker/model/InlineResponse2004}
     */
    this.emailFullValidation = function(email, callback) {
      var postBody = email;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling emailFullValidation");
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
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/validate/email/address/full', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the emailPost operation.
     * @callback module:invoker/client/EmailApi~emailPostCallback
     * @param {String} error Error message, if any.
     * @param {module:invoker/model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate email adddress for syntactic correctness only
     * Validate whether a given email address is syntactically correct via a limited local-only check.  Use the address/full API to do a full validation.
     * @param {String} value Email address to validate, e.g. \&quot;support@cloudmersive.com\&quot;
     * @param {module:invoker/client/EmailApi~emailPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:invoker/model/InlineResponse2002}
     */
    this.emailPost = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling emailPost");
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
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/validate/email/address/syntaxOnly', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
