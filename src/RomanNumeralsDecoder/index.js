const mappings = [
  { key: "IV", value: 4 },
  { key: "IX", value: 9 },
  { key: "I", value: 1 },
  { key: "V", value: 5 },
  { key: "X", value: 10 },
  { key: "L", value: 50 },
  { key: "C", value: 100 },
  { key: "D", value: 500 },
  { key: "M", value: 1000 },
];

class RomanNumeralsDecoder {
  decode = (str) => {
    let output = 0;

    while (str.length) {
      mappings.forEach((map) => {
        if (str.includes(map.key)) {
          output += map.value;
          str = str.replace(map.key, "");
        }
      });
    }

    return output;
  };
}

export default RomanNumeralsDecoder;
