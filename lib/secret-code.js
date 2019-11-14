const punycode = require('punycode');

const code = new Object();

code.a = '1F603'; //:smiley:
code.b = '1F60B'; //:yum:
code.c = '1F642'; //slightly-smiling-face
code.d = '1F618'; //:kissing_heart:
code.e = '1F602'; //:joy:
code.f = '1F60E'; //:sunglasses:
code.g = '1F60D'; //:heart_eyes:
code.h = '1F929'; //:Star-eyes:
code.i = '1F97A'; //:pleading-eyes:
code.j = '1F973';
code.k = '1F4A9';
code.l = '1F644';
code.m = '1F917';
code.n = '1F61E';
code.o = '1F433';
code.p = '1F994';
code.q = '1F35C';
code.r = '1F372';
code.s = '1F320';
code.t = '1F371';
code.u = '1F614';
code.v = '1F92A';
code.w = '1F620';
code.x = '1F975';
code.y = '1F63A';
code.z = '1F47E';

code.A = '1F469';
code.B = '1F62C';
code.C = '1F920';
code.D = '1F912';
code.E = '1F974';
code.F = '1F9B7';
code.G = '1F484';
code.H = '1F48B';
code.I = '1F46E';
code.J = '1F470';
code.K = '1F930';
code.L = '1F9D6';
code.M = '1F469';
code.N = '1F958';
code.O = '1F35B';
code.P = '1F378';
code.Q = '1F36D';
code.R = '1F36C';
code.S = '1F361';
code.T = '1F957';
code.U = '1F9C1';
code.V = '1F367';
code.W = '1F369';
code.X = '1F36A';
code.Y = '1F961';
code.Z = '1F962';

exports.encodeLetter = (letter) => {
    if(letter in code){
        return String.fromCodePoint('0x' + code[letter]);
    } else {
        return letter;
    }     
}

exports.encodeWord = (word) => {
    var encodedWord = '';

    var explode = Array.from(word);

    for(var i = 0; i < explode.length; i++){
        encodedWord += this.encodeLetter(explode[i]);
    }

    return encodedWord;
}

exports.decodeEmoji = (emoji) => {

    for(var key in code){
        var codeString = punycode.ucs2.encode(['0x' + code[key]]);
        if(emoji === codeString){
            return key;
        }
    }
    
    return emoji;

}

exports.decodeWord = (word) => {
    var decodedWord = '';

    var explode = Array.from(word);

    for(var i = 0; i < explode.length; i++){
        decodedWord += this.decodeEmoji(explode[i]);
    }

    return decodedWord;
}