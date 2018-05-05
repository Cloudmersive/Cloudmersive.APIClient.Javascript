# Cloudmersive.IPAddressApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPAddressPost**](IPAddressApi.md#iPAddressPost) | **POST** /validate/ip/geolocate | Geolocate an IP address


<a name="iPAddressPost"></a>
# **iPAddressPost**
> InlineResponse2005 iPAddressPost(value)

Geolocate an IP address

Identify an IP address Country, State/Provence, City, Zip/Postal Code, etc.  Useful for security and UX applications.

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.IPAddressApi();

var value = "value_example"; // String | IP address to geolocate, e.g. \"55.55.55.55\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPAddressPost(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| IP address to geolocate, e.g. \&quot;55.55.55.55\&quot; | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

