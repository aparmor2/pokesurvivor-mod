// ==UserScript==
// @name         PokéSurvivor Mod
// @namespace    https://github.com/aparmor2/pokesurvivor-mod
// @version      1.9.0
// @description  Medidor de daño, minimapa, avisos y ayudas para pokesurvivor.com
// @author       aparmor2
// @match        https://pokesurvivor.com/*
// @match        https://www.pokesurvivor.com/*
// @noframes
// @run-at       document-start
// @grant        none
// @require      https://raw.githubusercontent.com/aparmor2/pokesurvivor-mod/main/inject.js
// @resource     shiny https://raw.githubusercontent.com/aparmor2/pokesurvivor-mod/main/sounds/shiny.ogg
// @downloadURL  https://raw.githubusercontent.com/aparmor2/pokesurvivor-mod/main/pokesurvivor-mod.user.js
// @updateURL    https://raw.githubusercontent.com/aparmor2/pokesurvivor-mod/main/pokesurvivor-mod.user.js
// ==/UserScript==

(() => {
  document.documentElement.dataset.psvmodVersion = '1.9.0';
  document.documentElement.dataset.psvmodShiny = 'https://raw.githubusercontent.com/aparmor2/pokesurvivor-mod/main/sounds/shiny.ogg';
})();