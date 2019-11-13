const secretCode = require('../lib/secret-code');

var assert = require('assert');

describe('secretCode', function(){
  describe('#encodeLetter("a")', function(){
    it('should return the smiley emoji codepoint code', function(){
      assert.equal(secretCode.encodeLetter("a"), "😃");
    });
  });
  describe('#encodeWord("bella")', function(){
    it('should return the smiley emoji codepoint codes for an entire word', function(){
      assert.equal(secretCode.encodeWord("bella"), "😋😂🙄🙄😃");
    });
  });
})