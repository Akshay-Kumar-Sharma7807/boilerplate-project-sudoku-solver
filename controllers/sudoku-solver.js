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

  checkRowPlacement(puzzleString, row, column, value, coordinate) {
    // var puzzleArray = puzzleString.split("");
    // var blockArray = [];
    // var rowArray = [];
    // puzzleArray.map((value, index) => {
    //   if (index % 3 === 0 && index !== 0) {
    //     blockArray.push(rowArray);
    //     rowArray = [];
    //   }
    //   rowArray.push(value);
    // });
    // blockArray.push(rowArray);

    // console.log("puzzleArray", puzzleArray);
    // console.log("blockArray", blockArray);
    // blockArray.map((value, index) => {
    //   if (index % 3 === 0 && index !== 0) {
    //     blockArray.push(rowArray);
    //     rowArray = [];
    //   }
    //   rowArray.push(value);
    // });

    // let columncoordinate = coordinate.charCodeAt(0) - 64;
    // let rowcoordinate = coordinate[1];
    // let regioncoordinate = Math.ceil(rowcoordinate / 3);
    // console.log(regioncoordinate);
    // let colregioncoordinate = Math.ceil(columncoordinate / 3);
    // console.log(colregioncoordinate);
    // for(var i = regioncoordinate===1?1:regioncoordinate+2)
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

  solve(rowArray) {
    console.log(rowArray);
    rowArray.map((row, rowIndex) => {
      row.map((value, index) => {
        if (value === ".") {
          var columnArray = [];
          rowArray.map((valuer) => {
            columnArray.push(valuer[index]);
          });
          // console.log("columnarray", columnArray);
          for (var i = 1; i < 10; i++) {
            if (
              this.checkColPlacement("ks", "row", columnArray, i + "") &&
              this.checkRowPlacement("kfsf", row, columnArray, i + "") &&
              this.checkRegionPlacement(rowArray, rowIndex, index, i + "")
            ) {
              // console.log(i);
              row[index] = i + "";
              break;
            }
          }
        }
      });
    });
    return rowArray;
  }
}

module.exports = SudokuSolver;
