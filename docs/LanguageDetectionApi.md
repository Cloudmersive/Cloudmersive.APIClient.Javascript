# Cloudmersive.LanguageDetectionApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**languageDetectionPost**](LanguageDetectionApi.md#languageDetectionPost) | **POST** /nlp/language/detect | Detect language of text


<a name="languageDetectionPost"></a>
# **languageDetectionPost**
> InlineResponse2006 languageDetectionPost(textToDetect)

Detect language of text

Automatically determine which language a text string is written in.  Supports Danish (DAN), German (DEU), English (ENG), French (FRA), Italian (ITA), Japanese (JPN), Korean (KOR), Dutch (NLD), Norwegian (NOR), Portuguese (POR), Russian (RUS), Spanish (SPA), Swedish (SWE), Chinese (ZHO).

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.LanguageDetectionApi();

var textToDetect = "textToDetect_example"; // String | Text to detect language of


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languageDetectionPost(textToDetect, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textToDetect** | **String**| Text to detect language of | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

