function isWristband(arr) {
    // check horizontal
    let horizontal = true
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[0].length; j++) {
            if (arr[i][j] !== arr[i][0]) horizontal = false
        }
    }
    if (horizontal) return true
    // check vertical
    let vertical = true
    for (i = 0; i < arr[0].length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j][i] !== arr[0][i]) vertical = false
        }
    }
    if (vertical) return true
    // check upper left / lower right diagonal
    let leftdiag = true
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== arr[(i + 1) % arr.length][(j + 1) % arr[0].length]) leftdiag = false
        }
    }
    if (leftdiag) return true
    let rightdiag = true
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== arr[(i + 1) % arr.length][j - 1 < 0 ? arr.length - 1 : (j - 1) % arr[0].length]) rightdiag = false
        }
    }
    if (rightdiag) return true

    return false
}

console.log(isWristband([
    ["A", "A"],
    ["B", "B"],
    ["C", "C"]
]))
// Part of horizontal wristband.
isWristband([
    ["A", "B"],
    ["A", "B"],
    ["A", "B"]
])
// Part of vertical wristband.
isWristband([
    ["A", "B", "C"],
    ["C", "A", "B"],
    ["B", "C", "A"],
    ["A", "B", "C"]
])
// Part of diagonal left wristband.
isWristband([
    ["A", "B", "C"],
    ["B", "C", "A"],
    ["C", "A", "B"],
    ["A", "B", "A"]
])
// Part of diagonal right wristband.