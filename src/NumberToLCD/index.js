const MAX_ITERATIONS = 3;
const MAPPINGS = {
  1: ["  ", " |", " |"],
  2: ["_ ", " _|", "|_ "],
  3: [" _ ", " _|", " _|"],
  4: ["   ", "|_|", "  |"],
  5: [" _ ", "|_ ", " _|"],
  6: [" _ ", "|_ ", "|_|"],
  7: [" _ ", "  |", "  |"],
  8: [" _ ", "|_|", "|_|"],
  9: [" _ ", "|_|", " _|"],
};

class NumberToLCD {
  convert = (number, args = {}) => {
    const mappings = this.getMappings(number);
    let output = "";

    for (let i = 0; i < MAX_ITERATIONS; i++) {
      mappings.forEach((map) => (output += map[i]));

      if (i === MAX_ITERATIONS - 1) continue;
      output += "\n";
    }

    return output;
  };

  // Private.
  getMappings = (number) =>
    number
      .toString()
      .split("")
      .map((char) => MAPPINGS[char]);
}

export default NumberToLCD;
