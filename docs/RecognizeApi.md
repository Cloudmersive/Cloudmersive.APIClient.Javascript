# Cloudmersive.RecognizeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recognizeDescribe**](RecognizeApi.md#recognizeDescribe) | **POST** /image/recognize/describe | Describe an image in natural language


<a name="recognizeDescribe"></a>
# **recognizeDescribe**
> InlineResponse20016 recognizeDescribe(imageFile)

Describe an image in natural language

Generate an English language text description of the image as a sentence.

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.RecognizeApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recognizeDescribe(imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

