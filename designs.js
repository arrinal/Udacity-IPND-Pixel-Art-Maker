const $tableElement = $('#pixelCanvas'); //static var for grid/table
const $inputHeight = $('#inputHeight'); //static var for height of grid
const $inputWidth = $('#inputWidth'); //static var for width of grid
const $colorPicker = $('#colorPicker'); //static var for color picker

//event when width and height of grid form submitted
$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();

    $tableElement.html(''); //clear

    makeGrid(height, width);
    addCellClickListener();
});

//create grid function
function makeGrid(height, width) {
    //create height grid
    for(let i = 0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    };

    //create width grid
    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

//fill grid with color function
function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};
