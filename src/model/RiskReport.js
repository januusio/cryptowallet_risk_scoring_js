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
import {Reason} from './Reason';
import {RiskScores} from './RiskScores';

/**
 * The RiskReport model module.
 * @module model/RiskReport
 * @version 1.0
 */
export class RiskReport {
  /**
   * Constructs a new <code>RiskReport</code>.
   * Risk score response
   * @alias module:model/RiskReport
   * @class
   * @param reasons {Array.<module:model/Reason>} 
   * @param riskScores {module:model/RiskScores} 
   */
  constructor(reasons, riskScores) {
    this.reasons = reasons;
    this.riskScores = riskScores;
  }

  /**
   * Constructs a <code>RiskReport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskReport} obj Optional instance to populate.
   * @return {module:model/RiskReport} The populated <code>RiskReport</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RiskReport();
      if (data.hasOwnProperty('reasons'))
        obj.reasons = ApiClient.convertToType(data['reasons'], [Reason]);
      if (data.hasOwnProperty('riskScores'))
        obj.riskScores = RiskScores.constructFromObject(data['riskScores']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Reason>} reasons
 */
RiskReport.prototype.reasons = undefined;

/**
 * @member {module:model/RiskScores} riskScores
 */
RiskReport.prototype.riskScores = undefined;

