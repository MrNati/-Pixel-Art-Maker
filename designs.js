// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {
    $("#sizePicker").submit(function makeGrid(displayGrid) {
        $("table tr").remove();
        var rows = $("#inputHeight").val();
        var cols = $("#inputWeight").val();
            for (var x = 1; x <= rows; x++) {
                $("table").append("<tr></tr>");
                for (var y = 1; y <= cols; y++) {
                    $("tr:last").append("<td></td>");
                    $("td").attr("class", "grid");
                }
            }
        displayGrid.preventDefault();
        $(".grid").click(function() {
            var gridColor = $("#colorPicker").val();
            $(this).css("background", gridColor);
        });
    });
});