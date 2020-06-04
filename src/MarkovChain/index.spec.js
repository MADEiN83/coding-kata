import MarkovChain from ".";

describe("MarkovChain tests", () => {
  let service;

  beforeEach(() => {
    service = new MarkovChain();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });

  it("analysis should be defined after instanciation", () => {
    expect(service.analysis).toBeDefined();
  });

  it("creator should be defined after instanciation", () => {
    expect(service.creator).toBeDefined();
  });
});
