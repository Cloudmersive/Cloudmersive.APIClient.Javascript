# Cloudmersive.FaceApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**faceCropFirst**](FaceApi.md#faceCropFirst) | **POST** /image/face/crop/first | Crop image to face (square)
[**faceCropFirstRound**](FaceApi.md#faceCropFirstRound) | **POST** /image/face/crop/first/round | Crop image to face (round)
[**faceLocate**](FaceApi.md#faceLocate) | **POST** /image/face/locate | Find faces in an image


<a name="faceCropFirst"></a>
# **faceCropFirst**
> File faceCropFirst(imageFile)

Crop image to face (square)

Crop an image to the face (rectangular crop).  If there is more than one face present, choose the first one.

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.FaceApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.faceCropFirst(imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="faceCropFirstRound"></a>
# **faceCropFirstRound**
> File faceCropFirstRound(imageFile)

Crop image to face (round)

Crop an image to the face (circular/round crop).  If there is more than one face present, choose the first one.

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.FaceApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.faceCropFirstRound(imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="faceLocate"></a>
# **faceLocate**
> InlineResponse20014 faceLocate(imageFile)

Find faces in an image

Locate the positions of all faces in an image

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.FaceApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.faceLocate(imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

