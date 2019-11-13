const secretCode = require('../lib/secret-code');

var assert = require('assert');

describe('secretCode', function(){
  describe('#encodeLetter("a")', function(){
    it('should return the smiley emoji codepoint code for a', function(){
      assert.equal(secretCode.encodeLetter("a"), "😃");
    });
  });
  describe('#encodeLetter("A")', function(){
    it('should return the smiley emoji codepoint code for a', function(){
      assert.equal(secretCode.encodeLetter("A"), "😃");
    });
  });
  describe('#encodeLetter("!")', function(){
    it('should return the unencodable character back', function(){
      assert.equal(secretCode.encodeLetter("!"), "!");
    });
  });
  describe('#encodeWord("Bella")', function(){
    it('should return the smiley emoji codepoint codes for an entire word', function(){
      assert.equal(secretCode.encodeWord("Bella!!!!"), "😋😂🙄🙄😃!!!!");
    });
  });
})