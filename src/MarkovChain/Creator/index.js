class Creator {
  proceed = (analyse) => {
    const keys = this.getKeys(analyse);
    let output = [keys[0]];

    keys.forEach((key) => {
      const { otherWords = {} } = analyse[key];
      const potentialWords = this.getKeys(otherWords);
      output.push(this.getRandomWord(potentialWords));
    });

    return output.join(" ");
  };

  // private
  getKeys = (obj) => Object.keys(obj);

  getRandomWord = (words) => words[Math.floor(Math.random() * words.length)];
}

export default Creator;
