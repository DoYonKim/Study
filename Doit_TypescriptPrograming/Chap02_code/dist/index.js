"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./person/Person");
var testMakePerson = function () {
    var jane = Person_1.makePerson('jane');
    var jack = Person_1.makePerson('jane');
    console.log(jane, jack);
};
testMakePerson();
//# sourceMappingURL=index.js.map