"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Offsets = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Offsets model module.
 * @module model/Offsets
 * @version 1.0
 */
var Offsets = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Offsets</code>.
   * Risk offsets
   * @alias module:model/Offsets
   * @class
   * @param combinedRiskOffset {Number} 
   * @param fraudRiskOffset {Number} 
   * @param lendingRiskOffset {Number} 
   * @param reputationRiskOffset {Number} 
   */
  function Offsets(combinedRiskOffset, fraudRiskOffset, lendingRiskOffset, reputationRiskOffset) {
    _classCallCheck(this, Offsets);
    this.combinedRiskOffset = combinedRiskOffset;
    this.fraudRiskOffset = fraudRiskOffset;
    this.lendingRiskOffset = lendingRiskOffset;
    this.reputationRiskOffset = reputationRiskOffset;
  }

  /**
   * Constructs a <code>Offsets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Offsets} obj Optional instance to populate.
   * @return {module:model/Offsets} The populated <code>Offsets</code> instance.
   */
  _createClass(Offsets, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Offsets();
        if (data.hasOwnProperty('combinedRiskOffset')) obj.combinedRiskOffset = _ApiClient.ApiClient.convertToType(data['combinedRiskOffset'], 'Number');
        if (data.hasOwnProperty('fraudRiskOffset')) obj.fraudRiskOffset = _ApiClient.ApiClient.convertToType(data['fraudRiskOffset'], 'Number');
        if (data.hasOwnProperty('lendingRiskOffset')) obj.lendingRiskOffset = _ApiClient.ApiClient.convertToType(data['lendingRiskOffset'], 'Number');
        if (data.hasOwnProperty('reputationRiskOffset')) obj.reputationRiskOffset = _ApiClient.ApiClient.convertToType(data['reputationRiskOffset'], 'Number');
      }
      return obj;
    }
  }]);
  return Offsets;
}();
/**
 * @member {Number} combinedRiskOffset
 */
exports.Offsets = Offsets;
Offsets.prototype.combinedRiskOffset = undefined;

/**
 * @member {Number} fraudRiskOffset
 */
Offsets.prototype.fraudRiskOffset = undefined;

/**
 * @member {Number} lendingRiskOffset
 */
Offsets.prototype.lendingRiskOffset = undefined;

/**
 * @member {Number} reputationRiskOffset
 */
Offsets.prototype.reputationRiskOffset = undefined;