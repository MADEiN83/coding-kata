import NumberToLCD from ".";

describe("NumberToLCD tests", () => {
  let service;

  beforeEach(() => {
    service = new NumberToLCD();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });

  it("should converts '1'", () => {
    const output = service.convert(1);
    expect(output.split("\n")).toEqual(["  ", " |", " |"]);
  });

  it("should converts '2'", () => {
    const output = service.convert(2);
    expect(output.split("\n")).toEqual(["_ ", " _|", "|_ "]);
  });

  it("should converts '12'", () => {
    const output = service.convert(12);
    expect(output.split("\n")).toEqual(["  _ ", " | _|", " ||_ "]);
  });
});
