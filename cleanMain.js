'use strict'

// List of rotator sensitivities for games
var rotators = ["0.00598718344569206", "0.022", "0.0066", (0.18/Math.PI)/10, "0.52941", "0.0055", "1.714", "0.5715", "0.36", "2.22222", "0.0596", (0.18/Math.PI)/10];

// Global Variables

function conv() {

    var userOrigSens = document.getElementById("inpGameSens").value;
    var userOrigGameVal = document.getElementById("lInputGame").value;
    var userDesGameVal = document.getElementById("rInputGame").value;
    hipConv(userOrigSens, userOrigGameVal, userDesGameVal);
}

function advInp() {
    var user360 = document.getElementById("inpCM360").value;
    var userOrigGameVal = document.getElementById("lInputGame").value;
    var userDesGameVal = document.getElementById("rInputGame").value;
    var userDPI = document.getElementById("inpDPI").value;
    var userSensIncr = (360 / ( ( user360 / 2.54) * userDPI ));
    var userOrigSens = (userSensIncr / rotators[userOrigGameVal]);

    hipConv(userOrigSens, userOrigGameVal, userDesGameVal);
}

// Main converter between games, used to calculate new hipfire sensitivity
function hipConv(userOrigSens, userOrigGameVal, userDesGameVal)  {

    var userOrigGameRotat = rotators[userOrigGameVal];

    var userDesGameRotat = rotators[userDesGameVal];

    var userSensIncr = (userOrigSens * userOrigGameRotat);
    var newHipSens = (userSensIncr / userDesGameRotat);

    document.getElementById("outGameSens").value = newHipSens;
}

// Secondary converter between games, used to calculate new ADS sensitivity if applicable
function adsConv() {

}
// Shows and hides the advanced input
function advInpSel() {
    if (document.getElementById("leftAdv").checked) {
        document.getElementById("inpGameSens").disabled = true;
        document.getElementById("labelDPI").style.display = null;
        document.getElementById("inpDPI").style.display = null;
        document.getElementById("labelInp360").style.display = null;
        document.getElementById("inpCM360").style.display = null;
    } else if (!document.getElementById("leftAdv").checked) {
        document.getElementById("inpGameSens").disabled = false;
        document.getElementById("labelDPI").style.display = 'none';
        document.getElementById("inpDPI").style.display = 'none';
        document.getElementById("labelInp360").style.display = 'none';
        document.getElementById("inpCM360").style.display = 'none';
    }
}