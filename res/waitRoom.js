$(document).ready(function() {

    // Total wait time
    var waitTime = 0;
    
    // Handle the exit room button click event
    $("#btnExitRoom").click(function() {
        window.location.href = "index.html";
    });

    // Count the wait time
    window.setInterval(function() {
        // Increment the wait time
        waitTime++;
        $("#h4WaitTime")[0].innerHTML = "Waiting Time: "+waitTime+"s";
    }, 1000);
});