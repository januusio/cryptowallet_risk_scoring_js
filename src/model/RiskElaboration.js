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

/**
 * The RiskElaboration model module.
 * @module model/RiskElaboration
 * @version 1.0
 */
export class RiskElaboration {
  /**
   * Constructs a new <code>RiskElaboration</code>.
   * Unstructured JSON risk elaboration
   * @alias module:model/RiskElaboration
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RiskElaboration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskElaboration} obj Optional instance to populate.
   * @return {module:model/RiskElaboration} The populated <code>RiskElaboration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RiskElaboration();
    }
    return obj;
  }
}
