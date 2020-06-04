import RomanNumeralsDecoder from ".";

describe("RomanNumeralsDecoder tests", () => {
  let service;

  beforeEach(() => {
    service = new RomanNumeralsDecoder();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });

  it("should returns '21' when entry is 'XXI'", () => {
    expect(service.decode("XXI")).toEqual(21);
  });

  it("should returns '5' when entry is 'V'", () => {
    expect(service.decode("V")).toEqual(5);
  });

  it("should returns '2008' when entry is 'MMVIII'", () => {
    expect(service.decode("MMVIII")).toEqual(2008);
  });

  it("should returns '4' when entry is 'IV'", () => {
    expect(service.decode("IV")).toEqual(4);
  });

  it("should returns '9' when entry is 'IX'", () => {
    expect(service.decode("IX")).toEqual(9);
  });

  it("should returns '1666' when entry is 'MDCLXVI'", () => {
    expect(service.decode("MDCLXVI")).toEqual(1666);
  });
});
