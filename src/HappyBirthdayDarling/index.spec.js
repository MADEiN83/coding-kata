import HappyBirthdayDarling from ".";

describe("HappyBirthdayDarling tests", () => {
  let service;

  beforeEach(() => {
    service = new HappyBirthdayDarling();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });

  it("should be 20-16 when input is 32", () => {
    expect(service.proceed(32)).toBe("32? That's just 20, in base 16!");
  });

  it("should be 21-19 when input is 39", () => {
    expect(service.proceed(39)).toBe("39? That's just 21, in base 19!");
  });

  it("should be 21-32 when input is 65", () => {
    expect(service.proceed(65)).toBe("65? That's just 21, in base 32!");
  });
});
