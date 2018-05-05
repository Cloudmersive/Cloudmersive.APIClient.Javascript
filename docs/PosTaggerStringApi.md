# Cloudmersive.PosTaggerStringApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**posTaggerStringPost**](PosTaggerStringApi.md#posTaggerStringPost) | **POST** /nlp/PosTaggerString | Part-of-speech tag a string


<a name="posTaggerStringPost"></a>
# **posTaggerStringPost**
> &#39;String&#39; posTaggerStringPost(input)

Part-of-speech tag a string

Perform a part-of-speech (POS) tagging on the input string.

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.PosTaggerStringApi();

var input = "input_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.posTaggerStringPost(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | **String**| Input string | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

