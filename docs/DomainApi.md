# Cloudmersive.DomainApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainCheck**](DomainApi.md#domainCheck) | **POST** /validate/domain/check | Validate a domain name
[**domainPost**](DomainApi.md#domainPost) | **POST** /validate/domain/whois | Get WHOIS information for a domain


<a name="domainCheck"></a>
# **domainCheck**
> InlineResponse200 domainCheck(domain)

Validate a domain name

Check whether a domain name is valid or not.  API performs a live validation by contacting DNS services to validate the existence of the domain name.

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.DomainApi();

var domain = "domain_example"; // String | Domain name to check, for example \"cloudmersive.com\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainCheck(domain, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| Domain name to check, for example \&quot;cloudmersive.com\&quot; | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="domainPost"></a>
# **domainPost**
> InlineResponse2001 domainPost(domain)

Get WHOIS information for a domain

Validate whether a domain name exists, and also return the full WHOIS record for that domain name.  WHOIS records include all the registration details of the domain name, such as information about the domain&#39;s owners.

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.DomainApi();

var domain = "domain_example"; // String | Domain name to check, for example \"cloudmersive.com\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainPost(domain, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| Domain name to check, for example \&quot;cloudmersive.com\&quot; | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

