import FizzBuzz from ".";

describe("", () => {
  let service;

  beforeEach(() => {
    service = new FizzBuzz();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });
});
