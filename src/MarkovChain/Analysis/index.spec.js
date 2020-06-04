import Analysis from ".";

const SENTENCE =
  "les hommes libres peuvent rester libres ou bien vendre leur liberté";

describe("Analysis tests", () => {
  let service;

  beforeEach(() => {
    service = new Analysis();
  });

  it("should be defined after instanciation", () => {
    expect(service).toBeDefined();
  });

  it("should returns when sentence is 'les hommes'", () => {
    expect(service.proceed("Les hommes sont biens")).toEqual([
      '"Les" est suivi par "hommes" à 100%',
      '"hommes" est suivi par "sont" à 100%',
      '"sont" est suivi par "biens" à 100%',
    ]);
  });

  it("should returns when sentence is 'les hommes'", () => {
    expect(service.proceed(SENTENCE)).toEqual([
      '"les" est suivi par "hommes" à 100%',
      '"hommes" est suivi par "libres" à 100%',
      '"libres" est suivi par "peuvent" à 50% et "ou" à 50%',
      '"peuvent" est suivi par "rester" à 100%',
      '"rester" est suivi par "libres" à 100%',
      '"ou" est suivi par "bien" à 100%',
      '"bien" est suivi par "vendre" à 100%',
      '"vendre" est suivi par "leur" à 100%',
      '"leur" est suivi par "liberté" à 100%',
    ]);
  });
});
