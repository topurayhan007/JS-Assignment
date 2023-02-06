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
// console.log(mindGame("h"));
// console.log(mindGame(-10));
// console.log(mindGame(10));

//////////////////////////////////////////////////////////////////////////////////

// Problem 2:

function evenOdd(input) {
  // checks if the input is a string else returns a error message
  if (typeof input === "string") {
    // finds the length of the string
    let inputLength = input.length;
    // checks if the length value is odd or even and returns accordingly
    if (inputLength % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Please enter a string!";
  }
}

// evenOdd function tested
// console.log(evenOdd("34"));
// console.log(evenOdd(34));
// console.log(evenOdd("Batch 7"));

//////////////////////////////////////////////////////////////////////////////////

// Problem 3:

function isLGSeven(number) {
  // checks if the input is a number else returns a error message
  if (typeof number === "number") {
    // the input is subtracted by 7
    const subtractionResult = number - 7;

    // checks whether the absoulte difference is greater or equal to 7
    // if it is then the absolute difference is returned by doubling it
    // else the difference is returned
    if (Math.abs(subtractionResult) >= 7) {
      const result = Math.abs(subtractionResult) * 2;
      return result;
    } else {
      return subtractionResult;
    }
  } else {
    return "Please enter a number!";
  }
}

// isLGSeven function tested
// console.log(isLGSeven(13));
// console.log(isLGSeven("45"));
// console.log(isLGSeven(-15));
// console.log(isLGSeven(6));

//////////////////////////////////////////////////////////////////////////////////

// Problem 4:

function findingBadData(arr) {
  // checks whether the input is an array else returns a error message
  if (Array.isArray(arr)) {
    // a counter is taken
    let badDataCounter = 0;

    // traverse through the array using for loop
    for (let i = 0; i < arr.length; i++) {
      // checks whether the array element is a bad data
      // i.e. whether the element is less than 0 then the counter is incremented
      if (arr[i] < 0) {
        badDataCounter++;
      }
    }
    return badDataCounter;
  } else {
    return "Please enter an array!";
  }
}

// findingBadData function tested
// console.log(findingBadData([1, 2, 5]));
// console.log(findingBadData([2, -2, -5]));
// console.log(findingBadData([2, -2, -6, -7]));
// console.log(findingBadData("hen"));

//////////////////////////////////////////////////////////////////////////////////

// Problem 5:

function gemsToDiamond(friend1, friend2, friend3) {
  if (
    typeof friend1 === "number" &&
    typeof friend2 === "number" &&
    typeof friend3 === "number"
  ) {
    return "hello";
  } else {
    return "Please enter 3 numbers!";
  }
}

// gemsToDiamond function tested
