const table = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

class RomanNumeralsDecoder {
  decode = (str) => {
    return str
      .split("")
      .reduce(
        (prev, cur, i, arr) =>
          table[arr[i + 1]] > table[cur]
            ? prev - table[cur]
            : prev + table[cur],
        0
      );
  };
}

export default RomanNumeralsDecoder;
