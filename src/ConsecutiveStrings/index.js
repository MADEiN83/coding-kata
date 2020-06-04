class ConsecutiveStrings {
  longestConsec = (arr = [], numberToTake) => {
    const maxLength = arr.length - 1;
    const longest = arr.reduce((prev, curr) =>
      prev.length > curr.length ? prev : curr
    );
    const longestIndex = arr.indexOf(longest);

    if (longestIndex === maxLength) {
      return arr
        .reverse()
        .slice(
          maxLength - longestIndex,
          maxLength - longestIndex + numberToTake
        )
        .reverse()
        .join("");
    }

    return arr.slice(longestIndex, longestIndex + numberToTake).join("");
  };
}

export default ConsecutiveStrings;
