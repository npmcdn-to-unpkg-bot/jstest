"use strict";
var browser_1 = require('angular2/platform/browser');
var character_component_1 = require('./character.component');
browser_1.bootstrap(character_component_1.CharacterComponent)
    .then(function (success) { return console.log("Bootstraping is a success"); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map