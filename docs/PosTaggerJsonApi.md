# Cloudmersive.PosTaggerJsonApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**posTaggerJsonPost**](PosTaggerJsonApi.md#posTaggerJsonPost) | **POST** /nlp/PosTaggerJson | Part-of-speech tag a string


<a name="posTaggerJsonPost"></a>
# **posTaggerJsonPost**
> InlineResponse2007 posTaggerJsonPost(request)

Part-of-speech tag a string

Part-of-speech (POS) tag a string and return result as JSON

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.PosTaggerJsonApi();

var request = new Cloudmersive.Request(); // Request | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.posTaggerJsonPost(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request**](Request.md)| Input string | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

