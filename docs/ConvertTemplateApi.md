# Cloudmersive.ConvertTemplateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertTemplateApplyHtmlTemplate**](ConvertTemplateApi.md#convertTemplateApplyHtmlTemplate) | **POST** /convert/template/html/apply | Apply HTML template


<a name="convertTemplateApplyHtmlTemplate"></a>
# **convertTemplateApplyHtmlTemplate**
> InlineResponse20017 convertTemplateApplyHtmlTemplate(value)

Apply HTML template

Apply operations to fill in an HTML template, generating a final HTML result

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.ConvertTemplateApi();

var value = new Cloudmersive.Value(); // Value | Operations to apply to template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertTemplateApplyHtmlTemplate(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**Value**](Value.md)| Operations to apply to template | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

