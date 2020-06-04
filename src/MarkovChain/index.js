import Analysis from "./Analysis";
import Creator from "./Creator";

class MarkovChain {
  constructor() {
    this.analysis = new Analysis();
    this.creator = new Creator();
  }

  // analyse = (sentence) => {
  //   return this.analysis.proceed(sentence);
  // };

  // createSentence = (sentence) => {
  //   const analyseResults = this.analysis.proceed(sentence, false);
  //   console.log("r", analyseResults);
  //   return this.creator.proceed(analyseResults);
  // };
}

export default MarkovChain;
