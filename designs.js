// Declare variables
let submit, gridHeight, gridWidth, color;

// Add event listeners so that user input can be color values and table sizes can be dynamically set by the user.
submit = $('#sizePicker');
submit.submit(event => {
    event.preventDefault();
    // Select size input
    makeGrid();
    // Select color input
    pickColor();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    $('tr').remove();
    // Get grid sizes
    gridHeight = $('#inputHeight').val();
    gridWidth = $('#inputWeight').val();
    for (let row = 1; row <= gridHeight; row++) {
        $('#pixelCanvas').append('<tr></tr>');
        for (let col = 1; col <= gridWidth; col++) {
            $('tr:last').append('<td></td>');
        }
    }
}

// Add or remove color from the cell when clicked
const pickColor = () => {
    $('td').click(function () {
        color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    });
}