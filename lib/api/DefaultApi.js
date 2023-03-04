"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultApi = void 0;
var _ApiClient = require("../ApiClient");
var _RiskReport = require("../model/RiskReport");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Default service.
* @module api/DefaultApi
* @version 1.0
*/
var DefaultApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
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
  _createClass(DefaultApi, [{
    key: "scoreBtcAddressGet",
    value: function scoreBtcAddressGet(address, callback) {
      var postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling scoreBtcAddressGet");
      }
      var pathParams = {
        'address': address
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = _RiskReport.RiskReport;
      return this.apiClient.callApi('/score/btc/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
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
  }, {
    key: "scoreEthAddressGet",
    value: function scoreEthAddressGet(address, callback) {
      var postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling scoreEthAddressGet");
      }
      var pathParams = {
        'address': address
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = _RiskReport.RiskReport;
      return this.apiClient.callApi('/score/eth/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
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
  }, {
    key: "scoreOtherAddressGet",
    value: function scoreOtherAddressGet(address, callback) {
      var postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling scoreOtherAddressGet");
      }
      var pathParams = {
        'address': address
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = _RiskReport.RiskReport;
      return this.apiClient.callApi('/score/other/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return DefaultApi;
}();
exports.DefaultApi = DefaultApi;