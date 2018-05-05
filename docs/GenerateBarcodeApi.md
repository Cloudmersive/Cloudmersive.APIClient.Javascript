# Cloudmersive.GenerateBarcodeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateBarcodeEAN13**](GenerateBarcodeApi.md#generateBarcodeEAN13) | **POST** /barcode/generate/ean-13 | Validates and generate a EAN-13 barcode as a PNG file, a type of 1D barcode
[**generateBarcodeEAN8**](GenerateBarcodeApi.md#generateBarcodeEAN8) | **POST** /barcode/generate/ean-8 | Validates and generate a EAN-8 barcode as a PNG file, a type of 1D barcode
[**generateBarcodeQRCode**](GenerateBarcodeApi.md#generateBarcodeQRCode) | **POST** /barcode/generate/qrcode | Generate a QR code barcode as a PNG file, a type of 2D barcode which can encode free-form text information
[**generateBarcodeUPCA**](GenerateBarcodeApi.md#generateBarcodeUPCA) | **POST** /barcode/generate/upc-a | Validate and generate a UPC-A barcode as a PNG file, a type of 1D barcode
[**generateBarcodeUPCE**](GenerateBarcodeApi.md#generateBarcodeUPCE) | **POST** /barcode/generate/upc-e | Validates and generate a UPC-E barcode as a PNG file, a type of 1D barcode


<a name="generateBarcodeEAN13"></a>
# **generateBarcodeEAN13**
> File generateBarcodeEAN13(value)

Validates and generate a EAN-13 barcode as a PNG file, a type of 1D barcode

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.GenerateBarcodeApi();

var value = "value_example"; // String | Barcode value to generate from


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeEAN13(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Barcode value to generate from | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: image/png

<a name="generateBarcodeEAN8"></a>
# **generateBarcodeEAN8**
> File generateBarcodeEAN8(value)

Validates and generate a EAN-8 barcode as a PNG file, a type of 1D barcode

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.GenerateBarcodeApi();

var value = "value_example"; // String | Barcode value to generate from


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeEAN8(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Barcode value to generate from | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: image/png

<a name="generateBarcodeQRCode"></a>
# **generateBarcodeQRCode**
> File generateBarcodeQRCode(value)

Generate a QR code barcode as a PNG file, a type of 2D barcode which can encode free-form text information

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.GenerateBarcodeApi();

var value = "value_example"; // String | QR code text to convert into the QR code barcode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeQRCode(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| QR code text to convert into the QR code barcode | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: image/png

<a name="generateBarcodeUPCA"></a>
# **generateBarcodeUPCA**
> File generateBarcodeUPCA(value)

Validate and generate a UPC-A barcode as a PNG file, a type of 1D barcode

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.GenerateBarcodeApi();

var value = "value_example"; // String | UPC-A barcode value to generate from


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeUPCA(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| UPC-A barcode value to generate from | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: image/png

<a name="generateBarcodeUPCE"></a>
# **generateBarcodeUPCE**
> File generateBarcodeUPCE(value)

Validates and generate a UPC-E barcode as a PNG file, a type of 1D barcode

### Example
```javascript
var Cloudmersive = require('cloudmersive');

var apiInstance = new Cloudmersive.GenerateBarcodeApi();

var value = "value_example"; // String | UPC-E barcode value to generate from


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeUPCE(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| UPC-E barcode value to generate from | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: image/png

