# Cloudmersive.EmailApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emailAddressGetServers**](EmailApi.md#emailAddressGetServers) | **POST** /validate/email/address/servers | Partially check whether an email address is valid
[**emailFullValidation**](EmailApi.md#emailFullValidation) | **POST** /validate/email/address/full | Fully validate an email address
[**emailPost**](EmailApi.md#emailPost) | **POST** /validate/email/address/syntaxOnly | Validate email adddress for syntactic correctness only


<a name="emailAddressGetServers"></a>
# **emailAddressGetServers**
> InlineResponse2003 emailAddressGetServers(email)

Partially check whether an email address is valid

Validate an email address by identifying whether its parent domain has email servers defined.  This call is less limited than syntaxOnly but not as comprehensive as address/full.

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.EmailApi();

var email = "email_example"; // String | Email address to validate, e.g. \"support@cloudmersive.com\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailAddressGetServers(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address to validate, e.g. \&quot;support@cloudmersive.com\&quot; | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="emailFullValidation"></a>
# **emailFullValidation**
> InlineResponse2004 emailFullValidation(email)

Fully validate an email address

Performs a full validation of the email address.  Checks for syntactic correctness, identifies the mail server in question if any, and then contacts the email server to validate the existence of the account - without sending any emails.

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.EmailApi();

var email = "email_example"; // String | Email address to validate, e.g. \"support@cloudmersive.com\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailFullValidation(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address to validate, e.g. \&quot;support@cloudmersive.com\&quot; | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="emailPost"></a>
# **emailPost**
> InlineResponse2002 emailPost(value)

Validate email adddress for syntactic correctness only

Validate whether a given email address is syntactically correct via a limited local-only check.  Use the address/full API to do a full validation.

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.EmailApi();

var value = "value_example"; // String | Email address to validate, e.g. \"support@cloudmersive.com\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailPost(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Email address to validate, e.g. \&quot;support@cloudmersive.com\&quot; | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

