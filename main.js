'use strict';
var mouse_dpi = inputs.mouse_dpi
var game_yaw = inputs.game_yaw
var new_game_yaw = inputs.new_game_yaw
var user_sens = inputs.user_sens
var sens_incr = user_sens * game_yaw

var find_rotate = (360 / sens_incr / mouse_dpi * 2.54)
var find_sens = ((( (360*2.54) / find_rotate) /mouse_dpi) /new_game_yaw)

return {found_sens: find_sens};

'https://jscalc.io/source/6xSIRq0XyO6G7UmM'