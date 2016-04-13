var expect = require('chai').expect;
var mrzParser = require('./index');

describe('newtondev-mrz-parser', function() {
  describe('hello', function() {
    it('should be an array of strings', function() {
      expect(mrzParser.hello).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        }); 
      }
    });

    it('should contain `Hello` and `World`', function() {
      expect(mrzParser.hello).to.include('Hello');
      expect(mrzParser.hello).to.include('World');
    });
  });
});
