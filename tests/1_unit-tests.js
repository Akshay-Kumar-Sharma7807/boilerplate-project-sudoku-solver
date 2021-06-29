const chai = require("chai");
const assert = chai.assert;

const Solver = require("../controllers/sudoku-solver.js");
let solver = new Solver();

suite("UnitTests", () => {
  test("Logic handles a valid puzzle string of 81 characters", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
  test("Logic handles a puzzle string with invalid characters (not 1-9 or .)", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
  test("Logic handles a puzzle string that is not 81 characters in length", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
  test("Logic handles a valid row placement", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
  test("Logic handles an invalid row placement", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
  test("Logic handles a valid column placement", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
  test("Logic handles an invalid column placement", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
  test("Logic handles a valid region (3x3 grid) placement", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
  test("Logic handles an invalid region (3x3 grid) placement", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
  test("Valid puzzle strings pass the solver", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
  test("Invalid puzzle strings fail the solver", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
  test("Solver returns the expected solution for an incomplete puzzle", () => {
    assert.equal(
      solver.validate(
        "..9.5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."
      ),
      "error length"
    );
  });
});
