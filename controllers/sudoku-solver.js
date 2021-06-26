class SudokuSolver {
  validate(puzzleString) {
    if (puzzleString.length === 81) {
      var puzzleReg = /[^0-9.]/g;
      var puzzle = puzzleReg.test(puzzleString);
      if (!puzzle) {
        return true;
      } else {
        return false;
      }
    } else {
      return "error length";
    }
  }

  checkRowPlacement(puzzleString, row, column, value) {
    var testArray = puzzleString.split("");
    var puzzleArray = [];
    var blockArray = [];
    var rowArray = [];
    testArray.map((value, index) => {
      if (index % 3 === 0 && index !== 0) {
        blockArray.push(rowArray);
        rowArray = [];
      }
      rowArray.push(value);
    });
    blockArray.push(rowArray);
    console.log("testArray", testArray);
    console.log("rowarray", rowArray);
    console.log("blockArray", blockArray);
    blockArray.map((value, index) => {
      if (index % 3 === 0 && index !== 0) {
        blockArray.push(rowArray);
        rowArray = [];
      }
      rowArray.push(value);
    });
  }

  checkColPlacement(puzzleString, row, column, value) {}

  checkRegionPlacement(puzzleString, row, column, value) {}

  solve(puzzleString) {}
}

module.exports = SudokuSolver;
