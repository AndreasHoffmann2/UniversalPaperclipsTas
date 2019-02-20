// ==UserScript==
// @name         Paperclips startup
// @namespace    http://www.decisionproblem.com/paperclips/
// @version      0.1
// @description  start the game
// @author       You
// @match        http://www.decisionproblem.com/paperclips/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.setTimeout(function(){
        document.getElementsByTagName("IMG")[0].click();
    }, 5000);
    // Your code here...
})();
