//////////////////////////////////////////////////////////////////////////////////

// Problem 1:

function mindGame(number) {
  // Checks if the input is a number and is positive else returns a error message
  if (number >= 0 && typeof number === "number") {
    // Input multiplied by 3
    const multiplicationResult = number * 3;
    // Previous result added with 10
    const additionResult = multiplicationResult + 10;
    // Previous result divided by 2
    const divisionResult = additionResult / 2;
    // Previous result subtracted by 5
    const subtractionResult = divisionResult - 5;

    const finalResult = subtractionResult;
    // Final result returned
    return finalResult;
  } else {
    return "Please enter a positive number!";
  }
}

// mindGame function tested
console.log(mindGame("h"));
console.log(mindGame(-10));
console.log(mindGame(10));

//////////////////////////////////////////////////////////////////////////////////

// Problem 2:

function evenOdd(input) {
  // checks if the input is a string else returns a error message
  if (typeof input === "string") {
    // finds the length of the string
    const inputlength = input.length;
    // checks if the length value is odd or even and returns accordingly
    if (inputlength % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Please enter a string!";
  }
}

// evenOdd function tested
console.log(evenOdd("34"));
console.log(evenOdd(34));
console.log(evenOdd("Batch 7"));
