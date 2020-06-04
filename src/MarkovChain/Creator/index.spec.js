import Creator from ".";

const FAKE_ANALYSE_RESULTS = {
  les: { otherWords: { hommes: 1 } },
  hommes: { otherWords: { sont: 1 } },
  sont: { otherWords: { biens: 1 } },
};
const FAKE_ANALYSE_RESULTS2 = {
  les: { otherWords: { hommes: 1, arbres: 1 } },
  hommes: { otherWords: { sont: 1 } },
  sont: { otherWords: { biens: 1 } },
};

describe("Creator tests", () => {
  let service;

  beforeEach(() => {
    service = new Creator();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });

  it("should returns when sentence is 'les hommes'", () => {
    expect(service.proceed(FAKE_ANALYSE_RESULTS)).toBe("les hommes sont biens");
  });

  it("should returns when sentence is 'les hommes'", () => {
    const potentialAnswers = ["les arbres sont biens", "les hommes sont biens"];

    for (let i = 0; i < 20; i++) {
      const output = service.proceed(FAKE_ANALYSE_RESULTS2);
      expect(potentialAnswers.includes(output)).toBeTruthy();
    }
  });
});
