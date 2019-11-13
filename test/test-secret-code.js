const secretCode = require('./../secret-code');

var assert = require('assert');

describe('secretCode', function(){
  describe('#encodeLetter("a")', function(){
    it('should return the smiley emoji codepoint code', function(){
      assert.equal(secretCode.encodeLetter("a"), "1F603");
    });
  });
})