# Cloudmersive.SpellCheckApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**spellCheckCheckJson**](SpellCheckApi.md#spellCheckCheckJson) | **POST** /nlp/spellcheck/check/word/json | Spell check word
[**spellCheckCheckSentenceJson**](SpellCheckApi.md#spellCheckCheckSentenceJson) | **POST** /nlp/spellcheck/check/sentence/json | Check if sentence is spelled correctly
[**spellCheckCheckSentenceString**](SpellCheckApi.md#spellCheckCheckSentenceString) | **POST** /nlp/spellcheck/check/sentence/string | Spell check a sentence
[**spellCheckCorrect**](SpellCheckApi.md#spellCheckCorrect) | **POST** /nlp/spellcheck/correct/word/string | Find spelling corrections
[**spellCheckCorrectJson**](SpellCheckApi.md#spellCheckCorrectJson) | **POST** /nlp/spellcheck/correct/word/json | Find spelling corrections
[**spellCheckPost**](SpellCheckApi.md#spellCheckPost) | **POST** /nlp/spellcheck/check/word/string | Spell check a word


<a name="spellCheckCheckJson"></a>
# **spellCheckCheckJson**
> InlineResponse2009 spellCheckCheckJson(value)

Spell check word

Spell check a word as JSON

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.SpellCheckApi();

var value = "value_example"; // String | Input sentence


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.spellCheckCheckJson(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Input sentence | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="spellCheckCheckSentenceJson"></a>
# **spellCheckCheckSentenceJson**
> InlineResponse2008 spellCheckCheckSentenceJson(value)

Check if sentence is spelled correctly

Checks whether the sentence is spelled correctly and returns the result as JSON

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.SpellCheckApi();

var value = "value_example"; // String | Input sentence


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.spellCheckCheckSentenceJson(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Input sentence | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="spellCheckCheckSentenceString"></a>
# **spellCheckCheckSentenceString**
> &#39;Boolean&#39; spellCheckCheckSentenceString(value)

Spell check a sentence

Check if a sentence is spelled correctly

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.SpellCheckApi();

var value = "value_example"; // String | Input sentence word


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.spellCheckCheckSentenceString(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Input sentence word | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="spellCheckCorrect"></a>
# **spellCheckCorrect**
> &#39;String&#39; spellCheckCorrect(value)

Find spelling corrections

Find the spelling corrections for a word

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.SpellCheckApi();

var value = "value_example"; // String | Input word


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.spellCheckCorrect(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Input word | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="spellCheckCorrectJson"></a>
# **spellCheckCorrectJson**
> InlineResponse20010 spellCheckCorrectJson(value)

Find spelling corrections

Find spelling correction suggestions and return result as JSON

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.SpellCheckApi();

var value = "value_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.spellCheckCorrectJson(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Input string | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="spellCheckPost"></a>
# **spellCheckPost**
> &#39;Boolean&#39; spellCheckPost(value)

Spell check a word

Check if a word is spelled correctly

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.SpellCheckApi();

var value = "value_example"; // String | Input string word


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.spellCheckPost(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Input string word | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

