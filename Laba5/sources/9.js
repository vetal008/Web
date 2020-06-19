function classifyRug(str) {

    var Rug = str;

    function symmetryHorizontal() {
        for (let i = 0; i < Math.floor(Rug.length / 2); i++) {
            if (Rug.length % 2 != 0) {
                if (i == Math.floor(Rug.length / 2))
                    continue;
            }
            for (let j = 0; j < Rug[0].length; j++) {
                if (Rug[i][j] !== Rug[Rug.length - 1 - i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    function symmetryVertical() {
        for (let j = 0; j < Math.floor(Rug[0].length / 2); j++) {
            if (Rug[0].length % 2 != 0) {
                if (j == Math.floor(Rug[0].length / 2))
                    continue;
            }
            for (let i = 0; i < Rug.length; i++) {
                if (Rug[i][j] !== Rug[i][Rug[0].length - 1 - j])
                    return false;
            }
        }
        return true;
    }

    if (symmetryHorizontal() && symmetryVertical())
        return "perfect rug";
    else if (symmetryHorizontal())
        return "horizontally symmetric";
    else if (symmetryVertical())
        return "vertically symmetric";
    else return "imperfect";
}

console.log(classifyRug([
    ["a", "a"],
    ["a", "a"]
]))
console.log(classifyRug([
    ["a", "a", "b"],
    ["a", "a", "a"],
    ["b", "a", "a"]
]))
console.log(
    classifyRug([
        ["b", "a"],
        ["b", "a"]
    ]))

console.log(classifyRug([
    ["a", "a"],
    ["b", "b"]
]))