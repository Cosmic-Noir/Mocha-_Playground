const app = require("../app");
const expect = require("chai").expect;
const supertest = require("supertest");

describe("GET /frequency endpoint", () => {
  it("should return 400 status if no query", () => {
    return supertest(app)
      .get("/frequency")
      .expect(400, "Invalid request");
  });
  it("should return matching object", () => {
    const s = "aaBBAAbbaa";
    const expected = {
      count: 2,
      average: 5,
      highest: "a",
      a: 6,
      b: 4
    };

    return (
      supertest(app)
        .get("/frequency")
        .query(s)
        //   .expect(200)
        .then(res => {
          expect(res.body).to.eql(expected);
        })
    );
  });
});
