import FizzBuzz from ".";

describe("FizzBuzz tests", () => {
  let service;

  beforeEach(() => {
    service = new FizzBuzz();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });

  it("should returns '1' when '1' is provided", () => {
    expect(service.proceed(1)).toBe(1);
  });

  it("should returns '2' when '2' is provided", () => {
    expect(service.proceed(2)).toBe(2);
  });

  it("should returns 'Fizz' when number is divisible by '3'", () => {
    expect(service.proceed(3)).toBe("Fizz");
  });

  it("should returns 'Buzz' when number is divisible by '5'", () => {
    expect(service.proceed(10)).toBe("Buzz");
  });

  it("should returns 'FizzBuzz' when '15' is provided", () => {
    expect(service.proceed(15)).toBe("FizzBuzz");
  });

  it("should returns 'FizzBuzz' when '53' is provided", () => {
    expect(service.proceed(53)).toBe("FizzBuzz");
  });
});
