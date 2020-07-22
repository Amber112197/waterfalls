'use strict';

$(function() {
    $("#alt-text img").on("click", function() {
        $("#text").text($(this).attr("alt"));
    });
});