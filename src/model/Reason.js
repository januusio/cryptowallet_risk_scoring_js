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
import {ApiClient} from '../ApiClient';
import {Offsets} from './Offsets';
import {RiskElaboration} from './RiskElaboration';

/**
 * The Reason model module.
 * @module model/Reason
 * @version 1.0
 */
export class Reason {
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
  constructor(explanation, label, offsets, riskElaboration) {
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
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Reason();
      if (data.hasOwnProperty('explanation'))
        obj.explanation = ApiClient.convertToType(data['explanation'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('offsets'))
        obj.offsets = Offsets.constructFromObject(data['offsets']);
      if (data.hasOwnProperty('riskElaboration'))
        obj.riskElaboration = RiskElaboration.constructFromObject(data['riskElaboration']);
    }
    return obj;
  }
}

/**
 * @member {String} explanation
 */
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

