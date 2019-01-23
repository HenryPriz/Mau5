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
    } else if (orig_game == "R6S" || "R6SC") {
        game_yaw = (0.18/Math.PI)/10;
    } 

    if (orig_game == "R6SC") {
        var multiplier = document.getElementById("R6Multi").value;
        var orig_game_sens = ((multiplier * 50)/0.02);
    }

    if (new_game == "BFV") {
        new_game_yaw = 0.00598718344569206;
    } else if (new_game == "CSGO") {
        new_game_yaw = 0.022;
    } else if (new_game == "OW") {
        new_game_yaw = 0.0066;
    } else if (new_game == "R6S" || "R6SC") {
        new_game_yaw = (0.18/Math.PI)/10;
    }

    if (document.getElementById("advModeInp").checked) {
        sens_incr = ( 360 / ( ( rotation / 2.54 ) * mouse_dpi ) );
    } else {
        sens_incr = (orig_game_sens * game_yaw);
    }

    var find_rotate = (360 / sens_incr / mouse_dpi * 2.54);

    if (new_game == "R6SC") {
        var find_sens = (((sens_incr / new_game_yaw) * 0.02) / 50)
        document.getElementById("R6MultiOut").value = find_sens;
    } else {
        var find_sens = (sens_incr /new_game_yaw);
        document.getElementById("retSens").value = find_sens;
    }

    var aspctOutVal = document.getElementById("aspctOutSel").value;
    var coeffVal

    if (aspctOutVal == "43") {
        coeffVal = 133;
    } else if (aspctOutVal == "169") {
        coeffVal = 178;
    } else if (aspctOutVal == "219") {
        coeffVal = 233;
    }

    document.getElementById("coeffBFV").value = coeffVal;
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
    var advOptionsDiv = document.getElementById("advOptionsOut");
    if (document.getElementById("advModeOut").checked) {
        advOptionsDiv.className = advOptionsDiv.style.removeProperty("advOptions");
    } else {
        advOptionsDiv.className = advOptionsDiv.style.add = "advOptions";
    }
}

function checkAdv() {
    var orig_game = document.getElementById("origGame").value;
    var r6scmDiv = document.getElementById("R6CM");
    var r6scxDiv = document.getElementById("R6CX");
    var origDiv = document.getElementById("origGameSensOut");
    if (orig_game == "R6SC") {
        r6scmDiv.className = r6scmDiv.style.removeProperty("advOptions");
        r6scxDiv.className = r6scxDiv.style.removeProperty("advOptions");
        r6scmDiv.className = r6scmDiv.style.add = "inputData";
        r6scxDiv.className = r6scxDiv.style.add = "inputData";
        origDiv.className = origDiv.style.add = "advOptions";
    } else {
        r6scmDiv.className = r6scmDiv.style.add = "advOptions";
        r6scxDiv.className = r6scxDiv.style.add = "advOptions";
        origDiv.className = origDiv.style.removeProperty("advOptions");
        origDiv.className = origDiv.style.add = "inputData";
    }
}

function checkAdvOut() {
    var new_game = document.getElementById("newGame").value;
    var r6scmDiv = document.getElementById("r6CMOut");
    var r6scxDiv = document.getElementById("r6CXOut");
    var origR6Div = document.getElementById("retSensCont");
    var aspectBFDiv = document.getElementById("aspctOut");
    if (new_game == "R6SC") {
        r6scmDiv.className = r6scmDiv.style.removeProperty("advOptions");
        r6scxDiv.className = r6scxDiv.style.removeProperty("advOptions");
        r6scmDiv.className = r6scmDiv.style.add = "inputData";
        r6scxDiv.className = r6scxDiv.style.add = "inputData";
        origR6Div.className = origR6Div.style.add = "advOptions";
    } else {
        r6scmDiv.className = r6scmDiv.style.add = "advOptions";
        r6scxDiv.className = r6scxDiv.style.add = "advOptions";
        origR6Div.className = origR6Div.style.removeProperty("advOptions");
        origR6Div.className = origR6Div.style.add = "inputData";
    }
    if (new_game == "BFV") {
        aspectBFDiv.className = aspectBFDiv.style.removeProperty("advOptions");
        aspectBFDiv.className = aspectBFDiv.style.add = "inputData";
    } else {
        aspectBFDiv.className = aspectBFDiv.style.add = "advOptions";
    }
}


//https://jscalc.io/source/6xSIRq0XyO6G7UmM