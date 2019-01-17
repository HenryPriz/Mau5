'use strict'
function sensConv() {
    var mouse_dpi = document.getElementById("mouseDPI").value;
    var orig_game = document.getElementById("origGame").value;
    var orig_game_sens = document.getElementById("origGameSens").value;
    var new_game = document.getElementById("newGame").value;

    var rotation = document.getElementById("rotat").value;

    var game_yaw;
    var new_game_yaw;
    var sens_incr;

    if (orig_game == "BFV") {
        game_yaw = 0.00598718344569206;
    } else if (orig_game == "CSGO") {
        game_yaw = 0.022;
    } else if (orig_game == "OW") {
        game_yaw = 0.0066;
    } else if (orig_game == "R6S") {
        game_yaw = (0.18/Math.PI)/10;
    }

    if (new_game == "BFV") {
        new_game_yaw = 0.00598718344569206;
    } else if (new_game == "CSGO") {
        new_game_yaw = 0.022;
    } else if (new_game == "OW") {
        new_game_yaw = 0.0066;
    } else if (new_game == "R6S") {
        new_game_yaw = (0.18/Math.PI)/10;
    }

    if (document.getElementById("advModeInp").checked) {
        sens_incr = ( 360 / ( ( rotation / 2.54 ) * mouse_dpi ) );
    } else {
        sens_incr = (orig_game_sens * game_yaw);
    }

    var find_rotate = (360 / sens_incr / mouse_dpi * 2.54);
    var find_sens = (sens_incr /new_game_yaw);

    document.getElementById("retSens").value = find_sens;
    document.getElementById("rotatOut").value = find_rotate;
    document.getElementById("incrOut").value = sens_incr;

}

function showAdvInp() {
    var advOptionsDiv = document.getElementById("advOptionsInp")
    if (document.getElementById("advModeInp").checked) {
        advOptionsDiv.className = advOptionsDiv.style.removeProperty("advOptions");
    } else {
        advOptionsDiv.className = advOptionsDiv.style.add = "advOptions";
    }
}

function showAdvOut() {
    var advOptionsDiv = document.getElementById("advOptionsOut")
    if (document.getElementById("advModeOut").checked) {
        advOptionsDiv.className = advOptionsDiv.style.removeProperty("advOptions");
    } else {
        advOptionsDiv.className = advOptionsDiv.style.add = "advOptions";
    }
}


//https://jscalc.io/source/6xSIRq0XyO6G7UmM