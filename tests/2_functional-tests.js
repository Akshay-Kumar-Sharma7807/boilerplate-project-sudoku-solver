const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", () => {
  test("Solve a puzzle with valid puzzle string", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Solve a puzzle with missing puzzle string", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Solve a puzzle with invalid characters", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Solve a puzzle with incorrect length", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Solve a puzzle that cannot be solved", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Check a puzzle placement with all fields", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Check a puzzle placement with single placement conflict", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Check a puzzle placement with multiple placement conflicts", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Check a puzzle placement with all placement conflicts", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Check a puzzle placement with missing required fields", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Check a puzzle placement with invalid characters", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Check a puzzle placement with incorrect length", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Check a puzzle placement with invalid placement coordinate", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
  test("Check a puzzle placement with invalid placement value", () => {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        assert.equal(res.status, 200);
        assert.equal(
          res.body.solution,
          "769235418851496372432178956174569283395842761628713549283657194516924837947381625"
        );
      });
  });
});
