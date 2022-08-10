$(document).ready(function () {
    // Declare some useful variables
    var selectedRoomNum = -1;

    // Handle the create room button click event
    $("#btnCreateRoom").click(function () {
        window.location.href = "waitRoom.html";
    });

    // Handle the join room button click event
    $("#btnJoinRoom").click(function () {
        // Check if the room is selected
        if (selectedRoomNum>=0) {
            window.location.href = "gameRoom.html";
        } else {
            // Tell the user to select a room first
            alert("Please select a room first!");
        }
    });

    // Handle the room table row click event
    $("#roomTable tbody tr").click(function () {
        $(this).addClass("table-active").siblings().removeClass("table-active");
        selectedRoomNum = $(this).children("td")[0].innerText;
    });
});

