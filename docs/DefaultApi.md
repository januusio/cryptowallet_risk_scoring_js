# RiskScoringApi.DefaultApi

All URIs are relative to *https://risk.charybdis.januus.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scoreBtcAddressGet**](DefaultApi.md#scoreBtcAddressGet) | **GET** /score/btc/{address} | 
[**scoreEthAddressGet**](DefaultApi.md#scoreEthAddressGet) | **GET** /score/eth/{address} | 
[**scoreOtherAddressGet**](DefaultApi.md#scoreOtherAddressGet) | **GET** /score/other/{address} | 

<a name="scoreBtcAddressGet"></a>
# **scoreBtcAddressGet**
> RiskReport scoreBtcAddressGet(address)



### Example
```javascript
import {RiskScoringApi} from 'risk_scoring_api';

let apiInstance = new RiskScoringApi.DefaultApi();
let address = "address_example"; // String | 

apiInstance.scoreBtcAddressGet(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**|  | 

### Return type

[**RiskReport**](RiskReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

<a name="scoreEthAddressGet"></a>
# **scoreEthAddressGet**
> RiskReport scoreEthAddressGet(address)



### Example
```javascript
import {RiskScoringApi} from 'risk_scoring_api';

let apiInstance = new RiskScoringApi.DefaultApi();
let address = "address_example"; // String | 

apiInstance.scoreEthAddressGet(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**|  | 

### Return type

[**RiskReport**](RiskReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

<a name="scoreOtherAddressGet"></a>
# **scoreOtherAddressGet**
> RiskReport scoreOtherAddressGet(address)



### Example
```javascript
import {RiskScoringApi} from 'risk_scoring_api';

let apiInstance = new RiskScoringApi.DefaultApi();
let address = "address_example"; // String | 

apiInstance.scoreOtherAddressGet(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**|  | 

### Return type

[**RiskReport**](RiskReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

