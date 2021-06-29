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
      res.json({ error: "Required field(s) missing" });
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
      if (
        solver.checkRowPlacement(
          puzzle,
          rowArray[coordinate.charCodeAt(0) - 65],
          columnArray,
          value,
          coordinate
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
        res.json({ valid: false });
      }
    } else if (validate === "error length") {
      res.json({ error: "Expected puzzle to be 81 characters long" });
    } else {
      res.json({ error: "Invalid characters in puzzle" });
    }
  });

  app.route("/api/solve").post((req, res) => {
    var puzzle = req.body.puzzle;
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
    res.json({ solution: final });
  });
};
