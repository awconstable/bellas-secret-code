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

  describe('#decodeEmoji("😋")', function(){
    it('should return b', function(){
      assert.equal(secretCode.decodeEmoji("😋"), "b");
    });
  });
  describe('#decodeEmoji("!")', function(){
    it('should return non-emoji characters back', function(){
      assert.equal(secretCode.decodeEmoji("!"), "!");
    });
  });
  describe('#decodeWord("😋😂🙄🙄😃!!!!")', function(){
    it('should return decoded emojis for an entire word in lower case', function(){
      assert.equal(secretCode.decodeWord("😋😂🙄🙄😃!!!!"), "bella!!!!");
    });
  });
})