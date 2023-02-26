"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RiskScores = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The RiskScores model module.
 * @module model/RiskScores
 * @version 1.0
 */
var RiskScores = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RiskScores</code>.
   * Risk score
   * @alias module:model/RiskScores
   * @class
   * @param combinedRisk {Number} 
   * @param fraudRisk {Number} 
   * @param lendingRisk {Number} 
   * @param reputationRisk {Number} 
   */
  function RiskScores(combinedRisk, fraudRisk, lendingRisk, reputationRisk) {
    _classCallCheck(this, RiskScores);
    this.combinedRisk = combinedRisk;
    this.fraudRisk = fraudRisk;
    this.lendingRisk = lendingRisk;
    this.reputationRisk = reputationRisk;
  }

  /**
   * Constructs a <code>RiskScores</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskScores} obj Optional instance to populate.
   * @return {module:model/RiskScores} The populated <code>RiskScores</code> instance.
   */
  _createClass(RiskScores, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RiskScores();
        if (data.hasOwnProperty('combinedRisk')) obj.combinedRisk = _ApiClient.ApiClient.convertToType(data['combinedRisk'], 'Number');
        if (data.hasOwnProperty('fraudRisk')) obj.fraudRisk = _ApiClient.ApiClient.convertToType(data['fraudRisk'], 'Number');
        if (data.hasOwnProperty('lendingRisk')) obj.lendingRisk = _ApiClient.ApiClient.convertToType(data['lendingRisk'], 'Number');
        if (data.hasOwnProperty('reputationRisk')) obj.reputationRisk = _ApiClient.ApiClient.convertToType(data['reputationRisk'], 'Number');
      }
      return obj;
    }
  }]);
  return RiskScores;
}();
/**
 * @member {Number} combinedRisk
 */
exports.RiskScores = RiskScores;
RiskScores.prototype.combinedRisk = undefined;

/**
 * @member {Number} fraudRisk
 */
RiskScores.prototype.fraudRisk = undefined;

/**
 * @member {Number} lendingRisk
 */
RiskScores.prototype.lendingRisk = undefined;

/**
 * @member {Number} reputationRisk
 */
RiskScores.prototype.reputationRisk = undefined;