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
    // ----------------------------------------
    var rowIndex = row.indexOf(value);
    if (rowIndex === -1) {
      return true;
    } else {
      return false;
    }
  }

  checkColPlacement(puzzleString, row, column, value) {
    var columnIndex = column.indexOf(value);
    if (columnIndex === -1) {
      return true;
    } else {
      return false;
    }
  }

  checkRegionPlacement(rowArray, row, column, value) {
    row = Math.floor(row / 3) * 3;
    column = Math.floor(column / 3) * 3;
    var isNotFound = true;
    // console.log("rowarray", rowArray);
    // console.log("row", row);
    // console.log("column", column);

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        // console.log("value", rowArray[row + i][column + j]);
        if (rowArray[row + i][column + j] === value) {
          isNotFound = false;
        }
        // console.log(row);
        // console.log(rowArray[row + i]);
      }
    }
    return isNotFound;
  }
  contains(array) {
    array.map((row) => {
      row.map((value) => {
        if (value === ".") {
          return true;
        }
      });
    });
    return false;
  }
  solve(rowArray) {
    var stillDot = () => {
      let result = false;
      rowArray.map((row, rowIndex) => {
        row.map((value, index) => {
          if (value === ".") {
            result = true;
          }
        });
      });
      return result;
    };
    // console.log(rowArray);
    var count = 0;
    while (stillDot() && count < 100) {
      count++;
      rowArray.map((row, rowIndex) => {
        row.map((value, index) => {
          if (value === ".") {
            var columnArray = [];
            rowArray.map((valuer) => {
              columnArray.push(valuer[index]);
            });
            // console.log("columnarray", columnArray);
            var solArray = [];
            for (var i = 1; i < 10; i++) {
              if (
                this.checkColPlacement("ks", "row", columnArray, i + "") &&
                this.checkRowPlacement("kfsf", row, columnArray, i + "") &&
                this.checkRegionPlacement(rowArray, rowIndex, index, i + "")
              ) {
                // console.log(i);
                // row[index] = i + "";
                // break;
                solArray.push(i + "");
              }
            }

            // console.log("solArray", solArray);
            if (solArray.length == 1) {
              row[index] = solArray[0];
            }

            solArray = [];
          }
        });
      });
    }

    // console.log("index", stillDot());
    // console.log(rowArray);
    return rowArray;
  }
}

module.exports = SudokuSolver;
