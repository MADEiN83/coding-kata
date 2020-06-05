import SubtractTheSum from ".";

describe("SubtractTheSum tests", () => {
  let service;

  beforeEach(() => {
    service = new SubtractTheSum();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });

  it("should returns 'apple' when input is '10'", () => {
    expect(service.proceed(10)).toBe("apple");
  });

  it("should returns 'apple' when input is '6380'", () => {
    expect(service.proceed(6380)).toBe("apple");
  });
});
