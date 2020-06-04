import FooBarQix from ".";

describe("FooBarQix tests", () => {
  let service;

  beforeEach(() => {
    service = new FooBarQix();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });

  it("should returns 'Foo' when multiple of '3' is provided", () => {
    expect(service.proceed(3)).toBe("FooFoo");
  });

  it("should returns 'Bar' when multiple of '5' is provided", () => {
    expect(service.proceed(5)).toBe("BarBar");
  });

  it("should returns 'Qix' when multiple of '7' is provided", () => {
    expect(service.proceed(7)).toBe("QixQix");
  });

  it("should returns 'FooBarBar' when '15' is provided", () => {
    expect(service.proceed(15)).toBe("FooBarBar");
  });

  it("should returns 'FooFooFoo' when '33' is provided", () => {
    expect(service.proceed(33)).toBe("FooFooFoo");
  });

  it("should returns '1*1' when '101' is provided", () => {
    expect(service.proceed(101)).toBe("1*1");
  });

  it("should returns 'FooFoo*Foo' when '303' is provided", () => {
    expect(service.proceed(303)).toBe("FooFoo*Foo");
  });
});
