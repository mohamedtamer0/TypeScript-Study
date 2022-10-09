"use strict";
const KID = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
function getHardSeconds() {
    return 3;
}
var kids;
(function (kids) {
    kids[kids["Five"] = 25] = "Five";
    kids[kids["seven"] = 20] = "seven";
    kids[kids["Ten"] = 15] = "Ten";
})(kids || (kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 15] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = getHardSeconds()] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level ${lvl} And Of Second is ${Level.Hard}`);
}
//# sourceMappingURL=index17.js.map