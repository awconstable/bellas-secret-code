
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

exports.encodeLetter = (letter) => {
    var lowerLetter = letter.toLowerCase();
    if(lowerLetter in code){
        return String.fromCodePoint('0x' + code[lowerLetter]);
    } else {
        return lowerLetter;
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