$(document).ready(function () {
    //Declare some useful variables
    let dimBoard = 15;  //Dimension for the game board
    //Create a 15x15 2D array for the board cells
    let arrBoardCell = Array(dimBoard).fill().map(() => Array(dimBoard).fill(0));

    // Declare the function for loading the board cells
    // 0 for empty
    // 1 for black
    // 2 for white
    function loadCells(arrCell) {
        // Hold the html string for the board
        var htmlBoard = "";
        // Loop through the cell array
        for (var i = 0; i < dimBoard; i++) {
            // Loop through the column of cell array
            for (var j = 0; j < dimBoard; j++) {
                // Add the cell
                htmlBoard += "<div>";
                // Path for the corresponding image
                var imgCell = "img/cell_mid_empty.png";
                // Check for the row
                if (i == 0) {  // First row
                    if (j == 0) {  //Top left cell
                        if (arrBoardCell[i][j] == 1) {  // Black
                            imgCell = "img/cell_tl_black.png";
                        } else if (arrBoardCell[i][j] == 2) {  //White
                            imgCell = "img/cell_tl_white.png";
                        } else {  //Empty
                            imgCell = "img/cell_tl_empty.png";
                        }
                    } else if (j == dimBoard - 1) {  //Top right cell
                        if (arrBoardCell[i][j] == 1) {  // Black
                            imgCell = "img/cell_tr_black.png";
                        } else if (arrBoardCell[i][j] == 2) {  //White
                            imgCell = "img/cell_tr_white.png";
                        } else {  //Empty
                            imgCell = "img/cell_tr_empty.png";
                        }
                    } else {  // Top mid cells
                        if (arrBoardCell[i][j] == 1) {  // Black
                            imgCell = "img/cell_top_black.png";
                        } else if (arrBoardCell[i][j] == 2) {  //White
                            imgCell = "img/cell_top_white.png";
                        } else {  //Empty
                            imgCell = "img/cell_top_empty.png";
                        }
                    }
                } else if (i == dimBoard - 1) {  //Last row
                    if (j == 0) {  //Bottom left cell
                        if (arrBoardCell[i][j] == 1) {  // Black
                            imgCell = "img/cell_bl_black.png";
                        } else if (arrBoardCell[i][j] == 2) {  //White
                            imgCell = "img/cell_bl_white.png";
                        } else {  //Empty
                            imgCell = "img/cell_bl_empty.png";
                        }
                    } else if (j == dimBoard - 1) {  //Bottom right cell
                        if (arrBoardCell[i][j] == 1) {  // Black
                            imgCell = "img/cell_br_black.png";
                        } else if (arrBoardCell[i][j] == 2) {  //White
                            imgCell = "img/cell_br_white.png";
                        } else {  //Empty
                            imgCell = "img/cell_br_empty.png";
                        }
                    } else {  // Bottom mid cells
                        if (arrBoardCell[i][j] == 1) {  // Black
                            imgCell = "img/cell_bot_black.png";
                        } else if (arrBoardCell[i][j] == 2) {  //White
                            imgCell = "img/cell_bot_white.png";
                        } else {  //Empty
                            imgCell = "img/cell_bot_empty.png";
                        }
                    }
                } else if (j == 0) {  // Left column
                    if (arrBoardCell[i][j] == 1) {  // Black
                        imgCell = "img/cell_left_black.png";
                    } else if (arrBoardCell[i][j] == 2) {  //White
                        imgCell = "img/cell_left_white.png";
                    } else {  //Empty
                        imgCell = "img/cell_left_empty.png";
                    }
                } else if (j == dimBoard - 1) {  //Right column
                    if (arrBoardCell[i][j] == 1) {  // Black
                        imgCell = "img/cell_right_black.png";
                    } else if (arrBoardCell[i][j] == 2) {  //White
                        imgCell = "img/cell_right_white.png";
                    } else {  //Empty
                        imgCell = "img/cell_right_empty.png";
                    }
                } else {  //Normal cells in the mid
                    if (arrBoardCell[i][j] == 1) {  // Black
                        imgCell = "img/cell_mid_black.png";
                    } else if (arrBoardCell[i][j] == 2) {  //White
                        imgCell = "img/cell_mid_white.png";
                    }
                }
                // Add the corresponding image
                htmlBoard += "<img class='imgCell' src='" + imgCell + "' indexi='" + i + "' indexj='" + j + "'>";
                // End of col
                htmlBoard += "</div>";
            }
        }
        // Append the html into the chess board
        $("#gameBoard").html(htmlBoard);
    }

    //TODO: delete this trash
    var trash = 1;

    //Handle the game board click event
    $("#gameBoard").on("click", ".imgCell", function () {
        // Retrieve the click index
        var indexi = $(this).attr("indexi");
        var indexj = $(this).attr("indexj");
        //Check if the cell is empty
        if (arrBoardCell[indexi][indexj] == 0) {
            arrBoardCell[indexi][indexj] = trash;  //TODO: delete this trash
            trash = (trash==1)?(2):(1);

            //TODO: delete this log 
            console.log(indexi + ", " + indexj);
            console.log(arrBoardCell[indexi][indexj])
            //Update the game board
            loadCells(arrBoardCell);
        }
    });

    //Load the empty cell
    loadCells(arrBoardCell);

    // TODO: remove this handler later
    $("#h3player1").on("click", function(){
        window.location.href = "winnerRoom.html";
    });


});