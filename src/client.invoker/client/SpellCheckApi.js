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
    define(['client.invoker/ApiClient', 'client.invoker/client.model/InlineResponse20010', 'client.invoker/client.model/InlineResponse2008', 'client.invoker/client.model/InlineResponse2009'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../client.model/InlineResponse20010'), require('../client.model/InlineResponse2008'), require('../client.model/InlineResponse2009'));
  } else {
    // Browser globals (root is window)
    if (!root.Cloudmersive) {
      root.Cloudmersive = {};
    }
    root.Cloudmersive.SpellCheckApi = factory(root.Cloudmersive.ApiClient, root.Cloudmersive.InlineResponse20010, root.Cloudmersive.InlineResponse2008, root.Cloudmersive.InlineResponse2009);
  }
}(this, function(ApiClient, InlineResponse20010, InlineResponse2008, InlineResponse2009) {
  'use strict';

  /**
   * SpellCheck service.
   * @module client.invoker/client/SpellCheckApi
   * @version 1.2.1
   */

  /**
   * Constructs a new SpellCheckApi. 
   * @alias module:client.invoker/client/SpellCheckApi
   * @class
   * @param {module:client.invoker/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:client.invoker/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the spellCheckCheckJson operation.
     * @callback module:client.invoker/client/SpellCheckApi~spellCheckCheckJsonCallback
     * @param {String} error Error message, if any.
     * @param {module:client.invoker/client.model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Spell check word
     * Spell check a word as JSON
     * @param {String} value Input sentence
     * @param {module:client.invoker/client/SpellCheckApi~spellCheckCheckJsonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client.invoker/client.model/InlineResponse2009}
     */
    this.spellCheckCheckJson = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling spellCheckCheckJson");
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
      var returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/nlp/spellcheck/check/word/json', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spellCheckCheckSentenceJson operation.
     * @callback module:client.invoker/client/SpellCheckApi~spellCheckCheckSentenceJsonCallback
     * @param {String} error Error message, if any.
     * @param {module:client.invoker/client.model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if sentence is spelled correctly
     * Checks whether the sentence is spelled correctly and returns the result as JSON
     * @param {String} value Input sentence
     * @param {module:client.invoker/client/SpellCheckApi~spellCheckCheckSentenceJsonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client.invoker/client.model/InlineResponse2008}
     */
    this.spellCheckCheckSentenceJson = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling spellCheckCheckSentenceJson");
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
      var returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/nlp/spellcheck/check/sentence/json', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spellCheckCheckSentenceString operation.
     * @callback module:client.invoker/client/SpellCheckApi~spellCheckCheckSentenceStringCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Spell check a sentence
     * Check if a sentence is spelled correctly
     * @param {String} value Input sentence word
     * @param {module:client.invoker/client/SpellCheckApi~spellCheckCheckSentenceStringCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.spellCheckCheckSentenceString = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling spellCheckCheckSentenceString");
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
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/nlp/spellcheck/check/sentence/string', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spellCheckCorrect operation.
     * @callback module:client.invoker/client/SpellCheckApi~spellCheckCorrectCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find spelling corrections
     * Find the spelling corrections for a word
     * @param {String} value Input word
     * @param {module:client.invoker/client/SpellCheckApi~spellCheckCorrectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.spellCheckCorrect = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling spellCheckCorrect");
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/nlp/spellcheck/correct/word/string', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spellCheckCorrectJson operation.
     * @callback module:client.invoker/client/SpellCheckApi~spellCheckCorrectJsonCallback
     * @param {String} error Error message, if any.
     * @param {module:client.invoker/client.model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find spelling corrections
     * Find spelling correction suggestions and return result as JSON
     * @param {String} value Input string
     * @param {module:client.invoker/client/SpellCheckApi~spellCheckCorrectJsonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client.invoker/client.model/InlineResponse20010}
     */
    this.spellCheckCorrectJson = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling spellCheckCorrectJson");
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
      var returnType = InlineResponse20010;

      return this.apiClient.callApi(
        '/nlp/spellcheck/correct/word/json', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spellCheckPost operation.
     * @callback module:client.invoker/client/SpellCheckApi~spellCheckPostCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Spell check a word
     * Check if a word is spelled correctly
     * @param {String} value Input string word
     * @param {module:client.invoker/client/SpellCheckApi~spellCheckPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.spellCheckPost = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling spellCheckPost");
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
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/nlp/spellcheck/check/word/string', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
