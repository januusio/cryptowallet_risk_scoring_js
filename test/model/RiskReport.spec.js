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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RiskScoringApi);
  }
}(this, function(expect, RiskScoringApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('RiskReport', function() {
      beforeEach(function() {
        instance = new RiskScoringApi.RiskReport();
      });

      it('should create an instance of RiskReport', function() {
        // TODO: update the code to test RiskReport
        expect(instance).to.be.a(RiskScoringApi.RiskReport);
      });

      it('should have the property reasons (base name: "reasons")', function() {
        // TODO: update the code to test the property reasons
        expect(instance).to.have.property('reasons');
        // expect(instance.reasons).to.be(expectedValueLiteral);
      });

      it('should have the property riskScores (base name: "riskScores")', function() {
        // TODO: update the code to test the property riskScores
        expect(instance).to.have.property('riskScores');
        // expect(instance.riskScores).to.be(expectedValueLiteral);
      });

    });
  });

}));