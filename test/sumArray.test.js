const expect = require("chai").expect;
const sum = require("../sumArray");

describe("Array sum", () => {
  it("should return a promise", () => {
    expect(sum([1, 2, 3])).to.be.a("promise");
  });
});
