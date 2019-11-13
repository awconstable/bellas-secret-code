var $ = require("jquery");
var secretCode = require('./../lib/secret-code');

$(document).ready(function(){
    $("#container").text("Hello, my name is " + secretCode.encodeWord("bella"));
});
