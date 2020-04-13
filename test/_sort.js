const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should sort the array from low to high", () => {
    const mySort = new Sort([7, 3, 9, 1, 20]);
    expect(mySort.sort()).to.eql([1, 3, 7, 9, 20]);
  });
  it("should have the lowest value as the first index", () => {
    const mySort = new Sort([13, 2, 3, 19]);
    const sortedArray = mySort.sort();
    expect(sortedArray[0]).to.equal(2);
  });
});
