const expect = require("chai").expect;
const divide = require("../index");
const sort = require("../sort");

describe("Divide function", () => {
  it("should divide positive integers correctly", () => {
    expect(divide(8, 4)).to.equal(2);
  });

  it("should thrown an error when divide by zero", () => {
    expect(() => {
      divide(8, 0);
    }).to.throw();
  });
});

describe("sort function", () => {
  it("should return a sorted array", () => {
    expect(sort([2, 4, 1, 7, 5])).to.deep.equal([1, 2, 4, 5, 7]);
  });
});
