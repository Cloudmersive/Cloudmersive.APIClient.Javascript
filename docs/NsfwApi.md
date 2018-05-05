# Cloudmersive.NsfwApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nsfwClassify**](NsfwApi.md#nsfwClassify) | **POST** /image/nsfw/classify | NSFW image classifier


<a name="nsfwClassify"></a>
# **nsfwClassify**
> InlineResponse20015 nsfwClassify(imageFile)

NSFW image classifier

Classify an image into Not Safe For Work (NSFW)/Porn/Racy content and Safe Content.

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.NsfwApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nsfwClassify(imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

