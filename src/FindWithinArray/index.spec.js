import Sandbox from ".";

var trueIfEven = function (v, i) {
  return v % 2 === 0;
};
var trueIfValueEqualsIndex = function (v, i) {
  return v === i;
};
var trueIfLengthEqualsIndex = function (v, i) {
  return v.length === i;
};

describe("FindWithinArray tests", () => {
  let service;

  beforeEach(() => {
    service = new Sandbox();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });

  it("should returns '-1' when input is '[]'", () => {
    expect(service.proceed([], trueIfEven)).toBe(-1);
  });

  it("should returns '3' when input is '[1,3,5,6,7]'", () => {
    expect(service.proceed([1, 3, 5, 6, 7], trueIfEven)).toBe(3);
  });

  it("should returns '0' when input is '[2,4,6,8]'", () => {
    expect(service.proceed([2, 4, 6, 8], trueIfEven)).toBe(0);
  });

  it("should returns 'trueIfValueEqualsIndex' when input is '[13,5,3,1,4,5]'", () => {
    expect(service.proceed([13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex)).toBe(
      4
    );
  });

  it("should returns 'trueIfLengthEqualsIndex' when input is 'bc af d e'", () => {
    expect(
      service.proceed(["bc", "af", "d", "e"], trueIfLengthEqualsIndex)
    ).toBe(-1);
  });

  it("should returns 'trueIfLengthEqualsIndex' when input is 'one two...'", () => {
    expect(
      service.proceed(
        ["one", "two", "three", "four", "five", "six"],
        trueIfLengthEqualsIndex
      )
    ).toBe(4);
  });

  it("should returns 'trueIfValueEqualsIndex' when input is '[ -3, -9, 8, 7, -9, 7, 4, 7, 1 ]'", () => {
    expect(
      service.proceed([-3, -9, 8, 7, -9, 7, 4, 7, 1], trueIfValueEqualsIndex)
    ).toBe(7);
  });
});
