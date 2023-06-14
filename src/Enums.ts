// Enums


const KID = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

function getHardSeconds(): number {
    return 3;
}

enum kids {
    Five = 25,
    seven = 20,
    Ten = 15
}

enum Level {
    Kid = kids.Ten,
    Easy = 9,
    Medium = Easy - 3,
    Hard = getHardSeconds()
}

let lvl: string = "Easy";
if (lvl === "Easy") {
    console.log(`The Level ${lvl} And Of Second is ${Level.Hard}`);
}


