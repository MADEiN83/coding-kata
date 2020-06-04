import ConsecutiveStrings from ".";

describe("ConsecutiveStrings tests", () => {
  let service;

  beforeEach(() => {
    service = new ConsecutiveStrings();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });

  it("should returns 'abigailtheta' when entry is '2'", () => {
    expect(
      service.longestConsec(
        ["zone", "abigail", "theta", "form", "libe", "zas"],
        2
      )
    ).toEqual("abigailtheta");
  });

  it("should returns 'oocccffuucccjjjkkkjyyyeehh' when entry is '1'", () => {
    expect(
      service.longestConsec(
        [
          "ejjjjmmtthh",
          "zxxuueeg",
          "aanlljrrrxx",
          "dqqqaaabbb",
          "oocccffuucccjjjkkkjyyyeehh",
        ],
        1
      )
    ).toEqual("oocccffuucccjjjkkkjyyyeehh");
  });

  it("should returns 'ixoyx3452zzzzzzzzzzzz' when entry is '3'", () => {
    expect(
      service.longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)
    ).toEqual("ixoyx3452zzzzzzzzzzzz");
  });
});
