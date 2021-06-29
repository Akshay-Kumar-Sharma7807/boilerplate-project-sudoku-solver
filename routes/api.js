"use strict";

const SudokuSolver = require("../controllers/sudoku-solver.js");

module.exports = function (app) {
  let solver = new SudokuSolver();

  app.route("/api/check").post((req, res) => {
    var { puzzle, coordinate, value } = req.body;
    if (
      puzzle === undefined ||
      coordinate === undefined ||
      value === undefined
    ) {
      return res.json({ error: "Required field(s) missing" });
    }
    if (puzzle.length !== 81) {
      return res.json({ error: "Expected puzzle to be 81 characters long" });
    }
    if (
      coordinate.charCodeAt(0) - 65 < 0 ||
      coordinate.charCodeAt(0) - 65 > 8 ||
      coordinate[1] < 1 ||
      coordinate[1] > 9
    ) {
      return res.json({ error: "Invalid coordinate" });
    }
    if (Number(value) < 1 || Number(value) > 9 || isNaN(Number(value))) {
      return res.json({ error: "Invalid value" });
    }
    var puzzleArray = puzzle.split("");
    var rowArray = [];
    var tempArray = [];
    puzzleArray.map((value, index) => {
      if (index % 9 === 0 && index !== 0) {
        rowArray.push(tempArray);
        tempArray = [];
      }
      tempArray.push(value);
    });
    rowArray.push(tempArray);
    // if (rowArray[coordinate.charCodeAt(0) - 65][coordinate[1]] === value) {
    //   return res.json({ valid: true });
    // }
    if (rowArray[coordinate.charCodeAt(0) - 65][coordinate[1] - 1] === value) {
      // console.log("executing this");
      rowArray[coordinate.charCodeAt(0) - 65][coordinate[1] - 1] = ".";
    }
    var columnArray = [];
    rowArray.map((value) => {
      columnArray.push(value[coordinate[1] - 1]);
    });
    // solver.checkRowPlacement(
    //   puzzle,
    //   rowArray[coordinate.charCodeAt(0) - 65],
    //   columnArray,
    //   value
    // );

    var validate = solver.validate(puzzle);
    if (validate) {
      // console.log(rowArray[coordinate.charCodeAt(0) - 65][coordinate[1] - 1]);

      if (
        solver.checkRowPlacement(
          puzzle,
          rowArray[coordinate.charCodeAt(0) - 65],
          columnArray,
          value
        ) &&
        solver.checkColPlacement(
          puzzle,
          rowArray[coordinate.charCodeAt(0) - 65],
          columnArray,
          value
        ) &&
        solver.checkRegionPlacement(
          rowArray,
          coordinate.charCodeAt(0) - 65,
          coordinate[1],
          value
        )
      ) {
        res.json({ valid: true });
      } else {
        var conflict = [];

        if (
          !solver.checkRowPlacement(
            puzzle,
            rowArray[coordinate.charCodeAt(0) - 65],
            columnArray,
            value
          )
        ) {
          conflict.push("row");
        }
        if (
          !solver.checkColPlacement(
            puzzle,
            rowArray[coordinate.charCodeAt(0) - 65],
            columnArray,
            value
          )
        ) {
          conflict.push("column");
        }
        if (
          !solver.checkRegionPlacement(
            rowArray,
            coordinate.charCodeAt(0) - 65,
            coordinate[1],
            value
          )
        ) {
          conflict.push("region");
        }
        return res.json({ valid: false, conflict: conflict });
      }
    } else if (validate === "error length") {
      res.json({ error: "Expected puzzle to be 81 characters long" });
    } else {
      res.json({ error: "Invalid characters in puzzle" });
    }
  });

  app.route("/api/solve").post((req, res) => {
    var puzzle = req.body.puzzle;
    // console.log("index", final.indexOf("."));
    console.log(puzzle);

    if (puzzle === undefined) {
      return res.json({ error: "Required field missing" });
    }

    var validate = solver.validate(puzzle);
    if (!validate) {
      return res.json({ error: "Invalid characters in puzzle" });
    }
    if (puzzle.length !== 81) {
      return res.json({ error: "Expected puzzle to be 81 characters long" });
    }

    //===============================================
    var puzzleArray = puzzle.split("");
    var rowArray = [];
    var tempArray = [];
    puzzleArray.map((value, index) => {
      if (index % 9 === 0 && index !== 0) {
        rowArray.push(tempArray);
        tempArray = [];
      }
      tempArray.push(value);
    });
    rowArray.push(tempArray);
    var sol = solver.solve(rowArray);
    var final = [];
    sol.map((value, index) => {
      value.map((value) => {
        final.push(value);
      });
    });
    // console.log(sol);
    // console.log(final);
    if (final.indexOf(".") === -1) {
      res.json({ solution: final.join("") });
    } else {
      res.json({ error: "Puzzle cannot be solved" });
    }
  });
};
