"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reason = void 0;
var _ApiClient = require("../ApiClient");
var _Offsets = require("./Offsets");
var _RiskElaboration = require("./RiskElaboration");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Reason model module.
 * @module model/Reason
 * @version 1.0
 */
var Reason = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Reason</code>.
   * Reason for the risk score
   * @alias module:model/Reason
   * @class
   * @param explanation {String} 
   * @param label {String} 
   * @param offsets {module:model/Offsets} 
   * @param riskElaboration {module:model/RiskElaboration} 
   */
  function Reason(explanation, label, offsets, riskElaboration) {
    _classCallCheck(this, Reason);
    this.explanation = explanation;
    this.label = label;
    this.offsets = offsets;
    this.riskElaboration = riskElaboration;
  }

  /**
   * Constructs a <code>Reason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reason} obj Optional instance to populate.
   * @return {module:model/Reason} The populated <code>Reason</code> instance.
   */
  _createClass(Reason, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Reason();
        if (data.hasOwnProperty('explanation')) obj.explanation = _ApiClient.ApiClient.convertToType(data['explanation'], 'String');
        if (data.hasOwnProperty('label')) obj.label = _ApiClient.ApiClient.convertToType(data['label'], 'String');
        if (data.hasOwnProperty('offsets')) obj.offsets = _Offsets.Offsets.constructFromObject(data['offsets']);
        if (data.hasOwnProperty('riskElaboration')) obj.riskElaboration = _RiskElaboration.RiskElaboration.constructFromObject(data['riskElaboration']);
      }
      return obj;
    }
  }]);
  return Reason;
}();
/**
 * @member {String} explanation
 */
exports.Reason = Reason;
Reason.prototype.explanation = undefined;

/**
 * @member {String} label
 */
Reason.prototype.label = undefined;

/**
 * @member {module:model/Offsets} offsets
 */
Reason.prototype.offsets = undefined;

/**
 * @member {module:model/RiskElaboration} riskElaboration
 */
Reason.prototype.riskElaboration = undefined;