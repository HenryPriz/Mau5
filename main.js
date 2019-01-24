'use strict'
function sensConv() {
    var mouse_dpi = document.getElementById("mouseDPI").value;
    var orig_game = document.getElementById("origGame").value;
    var orig_game_sens = document.getElementById("origGameSens").value;
    var orig_game_sens_ads = document.getElementById("origGameSensAds").value;
    var new_game = document.getElementById("newGame").value;

    var rotation = document.getElementById("rotat").value;

    var game_yaw;
    var new_game_yaw;
    var sens_incr;
    var ads_sens_incr;
    var find_sens_ads;
    var aspect_height;
    var aspect_width;
    var current_cs_ratio_scope;
    var current_ads_sens_incr;
    var new_cs_ratio_scope;
    var new_ads_sens_incr_multi;
    var horiz_width;
    var find_sens;

    if (orig_game == "BFV") {
        game_yaw = 0.00598718344569206;
    } else if (orig_game == "CSGO") {
        game_yaw = 0.022;
    } else if (orig_game == "OW") {
        game_yaw = 0.0066;
    } else if (orig_game == "R6S" || orig_game == "R6SC") {
        game_yaw = (0.18/Math.PI)/10;
    } else if (orig_game == "BF3") {
        game_yaw = (0.52941);
    } else if (orig_game == "BL2") {
        game_yaw = (0.0055);
    } else if (orig_game == "BO4") {
        game_yaw = (0.0066);
    } else if (orig_game == "D2") {
        game_yaw = (0.0066);
    } else if (orig_game == "DNF") {
        game_yaw = (1.714);
    } else if (orig_game == "FN") {
        game_yaw = (0.5715);
    } else if (orig_game == "PS2") {
        game_yaw = (0.36);
    } else if (orig_game == "PUBG") {
        game_yaw = (2.22222);
    } else if (orig_game == "Q3") {
        game_yaw = (0.022);
    } else if (orig_game == "QL") {
        game_yaw = (0.022);
    } else if (orig_game == "UT") {
        game_yaw = (0.0596);
    } else if (orig_game == "TF2") {
        game_yaw = (0.022);
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
        find_sens = (((sens_incr / new_game_yaw) * 0.02) / 50)
        document.getElementById("R6MultiOut").value = find_sens;
    } else {
        find_sens = (sens_incr /new_game_yaw);
        document.getElementById("retSens").value = find_sens;
    }

    var aspctOutVal = document.getElementById("aspctOutSel").value;
    var coeffVal

    if (aspctOutVal == "43") {
        coeffVal = 133;
        aspect_height = 3;
        aspect_width = 4;
    } else if (aspctOutVal == "169") {
        coeffVal = 178;
        aspect_height = 9;
        aspect_width = 16;
    } else if (aspctOutVal == "219") {
        coeffVal = 233;
        aspect_height = 9;
        aspect_width = 21;
    }

    horiz_width = (Math.atan((Math.tan(36.8695/(Math.PI /180)) * (coeffVal/100)) / (Math.PI /180))) / (Math.PI /180);
    if (orig_game == "R6S") {
        ads_sens_incr = (orig_game_sens_ads * 0.02 * orig_game_sens) * game_yaw;
    }
     
    if (new_game == "CSGO") {
        current_cs_ratio_scope = ((Math.atan((Math.tan(((20) * (aspect_height / aspect_width)) * (Math.PI / 180))) * (Math.PI / 180))) * (Math.PI / 180)) / ((Math.atan((Math.tan(((horiz_width / 2) * (aspect_height / aspect_width)) * (Math.PI / 180))) * (Math.PI / 180))) * (Math.PI / 180));
        current_cs_ratio_scope = (current_cs_ratio_scope / (40/90))
        current_ads_sens_incr = ((current_cs_ratio_scope * find_sens) * 0.022);
        new_ads_sens_incr_multi = (ads_sens_incr / current_ads_sens_incr);
        console.log(new_ads_sens_incr_multi);
        find_sens_ads = (new_ads_sens_incr_multi * current_cs_ratio_scope);
    }

    document.getElementById("retSensAds").value = find_sens_ads;
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
    var origDivADS = document.getElementById("origGameSensOutADS");
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
    if (orig_game == "R6S") {
        origDivADS.className = origDivADS.style.removeProperty("advOptions");
        origDivADS.className = origDivADS.style.add = "inputData";
    } else {
        origDivADS.className = origDivADS.style.add = "advOptions";
    }
}

function checkAdvOut() {
    var new_game = document.getElementById("newGame").value;
    var r6scmDiv = document.getElementById("r6CMOut");
    var r6scxDiv = document.getElementById("r6CXOut");
    var r6scxSDiv = document.getElementById("r6CXOut2")
    var origR6Div = document.getElementById("retSensCont");
    var aspectBFDiv = document.getElementById("aspctOut");
    if (new_game == "R6SC") {
        r6scmDiv.className = r6scmDiv.style.removeProperty("advOptions");
        r6scxDiv.className = r6scxDiv.style.removeProperty("advOptions");
        r6scxSDiv.className = r6scxDiv.style.removeProperty("advOptions");
        r6scmDiv.className = r6scmDiv.style.add = "inputData";
        r6scxDiv.className = r6scxDiv.style.add = "inputData";
        r6scxSDiv.className = r6scxDiv.style.add = "inputData";
        origR6Div.className = origR6Div.style.add = "advOptions";
    } else {
        r6scmDiv.className = r6scmDiv.style.add = "advOptions";
        r6scxDiv.className = r6scxDiv.style.add = "advOptions";
        origR6Div.className = origR6Div.style.removeProperty("advOptions");
        origR6Div.className = origR6Div.style.add = "inputData";
        ;
    }

    if (new_game == "BFV" || new_game == "CSGO") {
        aspectBFDiv.className = aspectBFDiv.style.removeProperty("advOptions");
        aspectBFDiv.className = aspectBFDiv.style.add = "inputData";
        document.getElementById("advCSRem").className = document.getElementById("advCSRem").style.removeProperty("advOptions");
        if (new_game == "CSGO") {
            document.getElementById("advCSRem").className = document.getElementById("advCSRem").style.add = "advOptions";
        }
    } else {
        aspectBFDiv.className = aspectBFDiv.style.add = "advOptions";
    }


    if (new_game == "BFV" || new_game == "CSGO" || new_game == "R6S") {
        document.getElementById("retSensAdsCont").className = document.getElementById("retSensAdsCont").style.removeProperty("advOptions");
        document.getElementById("retSensAdsCont").className = document.getElementById("retSensAdsCont").style.add = "inputData";   
    } else {
        document.getElementById("retSensAdsCont").className = document.getElementById("retSensAdsCont").style.add = "advOptions";
    }
}


//https://jscalc.io/source/6xSIRq0XyO6G7UmM