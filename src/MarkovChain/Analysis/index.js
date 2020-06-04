class Analysis {
  proceed = (sentence, formatOutput = true) => {
    const words = sentence.split(" ");
    const output = {};

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const otherWord = i < words.length - 1 ? words[i + 1] : null;

      if (!otherWord) break;

      if (this.containsWord(output, word)) {
        const exists = output[word].otherWords[otherWord];

        if (exists) {
          output[word].otherWords[otherWord]++;
        } else {
          output[word].otherWords[otherWord] = 1;
        }
      } else {
        output[word] = {
          otherWords: { [otherWord]: 1 },
        };
      }
    }

    return formatOutput ? this.formatAnalyseOutput(output) : output;
  };

  composeSentence = (sentence) => {};

  // Private
  formatAnalyseOutput = (output) => {
    return Object.keys(output).map((entry) => {
      const { otherWords = {} } = output[entry];
      const otherWordsKeys = Object.keys(otherWords);

      const percent = 100 / otherWordsKeys.length;
      const wordsAsString = otherWordsKeys.map((w) => `"${w}" à ${percent}%`);

      return `"${entry}" est suivi par ${wordsAsString.join(" et ")}`;
    });
  };

  containsWord = (output, word) => Object.keys(output).includes(word);
}

export default Analysis;
