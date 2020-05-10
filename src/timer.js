"use strict";

const input = process.argv[1];

const timer = () => {
  const processedInput = parseInt(input);
  if (!Number.isInteger(processedInput)) {
    console.log("Please enter a number")
    return null
  }
  const result = processedInput;
  console.log(result);
  return result;
};

module.exports = timer;
