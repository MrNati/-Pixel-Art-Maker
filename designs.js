// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {
    $("#sizePicker").submit(function makeGrid(displayGrid) {
        $("table tr").remove();
        var rows = $("#inputHeight").val();
        var cols = $("#inputWeight").val();
            for (var i = 1; i <= rows; i++) {
                $("table").append("<tr></tr>");
                for (var j = 1; j <= cols; j++) {
                    $("tr:last").append("<td></td>");
                    $("td").attr("class", "cells");
                }
            }
        displayGrid.preventDefault();
        $(".cells").click(function() {
            var paint = $("#colorPicker").val();
            $(this).css("background", paint);
        });
    });
});