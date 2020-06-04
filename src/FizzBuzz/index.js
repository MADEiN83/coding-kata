const FIZZ = "Fizz";
const BUZZ = "Buzz";

class FizzBuzz {
  proceed = (number) => {
    let output = "";

    if (this.isDivisibleBy(number, 3) || this.contains(number, 3)) {
      output += FIZZ;
    }

    if (this.isDivisibleBy(number, 5) || this.contains(number, 5)) {
      output += BUZZ;
    }

    return output || number;
  };

  isDivisibleBy = (number, divider) => number % divider === 0;

  contains = (number, wantedNumber) => number.toString().includes(wantedNumber);
}

export default FizzBuzz;
