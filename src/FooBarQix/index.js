const FOO = "Foo";
const BAR = "Bar";
const QIX = "Qix";
const STAR = "*";

class FooBarQix {
  proceed = (number) => {
    let output = "";

    if (this.isDivisibleBy(number, 3)) output += FOO;
    if (this.isDivisibleBy(number, 5)) output += BAR;
    if (this.isDivisibleBy(number, 7)) output += QIX;

    this.getAllDigits(number).forEach((char) => {
      if (char === "3") output += FOO;
      if (char === "5") output += BAR;
      if (char === "7") output += QIX;
      if (char === "0") output += STAR;
    });

    return output === STAR ? this.replaceZero(number) : output;
  };

  isDivisibleBy = (number, divider) => number % divider === 0;

  contains = (number, wantedNumber) => number.toString().includes(wantedNumber);

  getAllDigits = (number) => number.toString().split("");

  replaceZero = (number) => number.toString().replace("0", STAR);
}

export default FooBarQix;
