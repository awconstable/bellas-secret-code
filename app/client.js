var $ = require("jquery");
var secretCode = require('./../lib/secret-code');

$(document).ready(function(){
    var encodeInput = $("#encode-input");
    encodeInput.on('input propertychange paste',function() {
        $("#encode-output").val(secretCode.encodeWord(encodeInput.val()));
    });

    var decodeInput = $("#decode-input");
    decodeInput.on('input propertychange paste',function() {
        $("#decode-output").val(secretCode.decodeWord(decodeInput.val()));
    });
});
