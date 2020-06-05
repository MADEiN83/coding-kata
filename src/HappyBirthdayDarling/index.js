class HappyBirthdayDarling {
  proceed = (number) => {
    for (let age of [20, 21]) {
      for (let i = 0; i < 36; i++) {
        const bit = parseInt(age, i);

        if (bit === number)
          return `${number}? That's just ${age}, in base ${i}!`;

        if (bit > number) break;
      }
    }
  };
}

export default HappyBirthdayDarling;
