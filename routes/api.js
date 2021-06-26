"use strict";

const SudokuSolver = require("../controllers/sudoku-solver.js");

module.exports = function (app) {
  let solver = new SudokuSolver();

  app.route("/api/check").post((req, res) => {
    console.log(req.body);
    var { puzzle, coordinate, value } = req.body;
    if (
      puzzle === undefined ||
      coordinate === undefined ||
      value === undefined
    ) {
      res.json({ error: "Required field(s) missing" });
    }

    solver.checkRowPlacement(puzzle, coordinate[0], coordinate[1], value);

    var validate = solver.validate(puzzle);
    if (validate) {
      res.json({ valid: true });
    } else if (validate === "error length") {
      res.json({ error: "Expected puzzle to be 81 characters long" });
    } else {
      res.json({ error: "Invalid characters in puzzle" });
    }
  });

  app.route("/api/solve").post((req, res) => {
    console.log(req.body);
  });
};
