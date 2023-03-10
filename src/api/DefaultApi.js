/*
 * Risk scoring API
 * This is an API that provides whitebox risk scoring
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {RiskReport} from '../model/RiskReport';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0
*/
export class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the scoreBtcAddressGet operation.
     * @callback moduleapi/DefaultApi~scoreBtcAddressGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiskReport{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} address 
     * @param {module:api/DefaultApi~scoreBtcAddressGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    scoreBtcAddressGet(address, callback) {
      
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling scoreBtcAddressGet");
      }

      let pathParams = {
        'address': address
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = RiskReport;

      return this.apiClient.callApi(
        '/score/btc/{address}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the scoreEthAddressGet operation.
     * @callback moduleapi/DefaultApi~scoreEthAddressGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiskReport{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} address 
     * @param {module:api/DefaultApi~scoreEthAddressGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    scoreEthAddressGet(address, callback) {
      
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling scoreEthAddressGet");
      }

      let pathParams = {
        'address': address
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = RiskReport;

      return this.apiClient.callApi(
        '/score/eth/{address}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the scoreOtherAddressGet operation.
     * @callback moduleapi/DefaultApi~scoreOtherAddressGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiskReport{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} address 
     * @param {module:api/DefaultApi~scoreOtherAddressGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    scoreOtherAddressGet(address, callback) {
      
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling scoreOtherAddressGet");
      }

      let pathParams = {
        'address': address
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = RiskReport;

      return this.apiClient.callApi(
        '/score/other/{address}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}