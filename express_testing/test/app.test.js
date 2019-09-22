const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../app");

describe("Express App", () => {
  it("should return a message from GET /", () => {
    return supertest(app)
      .get("/")
      .expect(200, "Hello Express!");
  });
});

describe("Get /sum", () => {
  it("8/4 should be 2", () => {
    return supertest(app)
      .get("/sum")
      .query({ a: 8, b: 4 })
      .expect(200, "8 divided by 4 is 2");
  });
});
