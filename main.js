'use strict'
function sensConv() {
    var mouse_dpi = document.getElementById("mouseDPI").value;
    var orig_game = document.getElementById("origGame").value;
    var orig_game_sens = document.getElementById("origGameSens").value;
    var new_game = document.getElementById("newGame").value;

    var rotation = document.getElementById("rotat");

    var game_yaw;
    var new_game_yaw;

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

    var sens_incr = (orig_game_sens * game_yaw);
    var find_rotate = (360 / sens_incr / mouse_dpi * 2.54);
    var find_sens = (sens_incr /new_game_yaw);

    document.getElementById("retSens").value = find_sens;
}


//var mouse_dpi = inputs.mouse_dpi
//var game_yaw = inputs.game_yaw
//var new_game_yaw = inputs.new_game_yaw
//var user_sens = inputs.user_sens
//var sens_incr = user_sens * game_yaw

//var find_rotate = (360 / sens_incr / mouse_dpi * 2.54)
//var find_sens = ((( (360*2.54) / find_rotate) /mouse_dpi) /new_game_yaw)

//return {found_sens: find_sens};




//https://jscalc.io/source/6xSIRq0XyO6G7UmM