//////////////////////////////////////////////////////////////////////////////////

// Problem 1: The function mindGame() takes a number as parameter and series of calculation is performed.
// The input is first multiplied by 3, then the total is added with 10, then the total is divided by 2,
// then the total is subtracted by 5 and then it is returned.

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
// console.log(mindGame(5));
// console.log(mindGame(50));
// console.log(mindGame(33));

//////////////////////////////////////////////////////////////////////////////////

// Problem 2: The function evenOdd() takes a string as parameter and checks whether the string length
// is odd or even and returns accordingly.

function evenOdd(input) {
  // checks if the input is a string else returns a error message
  if (typeof input === "string") {
    // finds the length of the string
    let inputLength = input.length;
    // checks if the length value is odd or even and returns accordingly
    if (inputLength % 2 === 0) {
      return "even";
    } else {
      return "odd";
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

// Problem 3: The function isLGSeven() takes a number as parameter which is deducted by 7,
// and it checks whether the value of the deduction is greater or equal to 7.
// If it is then the double of the value is returned
// else the value that is left after deduction is returned.

function isLGSeven(number) {
  // checks if the input is a number else returns a error message
  if (typeof number === "number") {
    // the input is subtracted by 7
    const subtractionResult = number - 7;

    // checks whether the absoulte difference is greater or equal to 7
    // if it is then the absolute difference is returned by doubling it
    // else the difference is returned
    if (subtractionResult >= 7) {
      const result = subtractionResult * 2;
      return result;
    } else {
      return subtractionResult;
    }
  } else {
    return "Please enter a number!";
  }
}

// isLGSeven function tested
// console.log(isLGSeven(15));
// console.log(isLGSeven("45"));
// console.log(isLGSeven(-15));
// console.log(isLGSeven(6));

//////////////////////////////////////////////////////////////////////////////////

// Problem 4: The function findingBadData() takes an array and checks whether there is any bad data in it
// and the total number of bad data is returned.
// Bad data here means if the element of the array is less than 0

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

// Problem 5: The function gemsToDiamond() take 3 parameters and the parameters are multiplied by
// a specific value 21, 32, 43 respectively to covert the gem numbers to diamonds.
// All diamonds are added and the total is checked whether it's greater or equal to 2000, if it's then
// 2000 is deducted from the total and the result is returned else the total is returned.

function gemsToDiamond(friend1Gem, friend2Gem, friend3Gem) {
  // checks whether all inputs are numbers else return a error message
  if (
    typeof friend1Gem === "number" &&
    typeof friend2Gem === "number" &&
    typeof friend3Gem === "number"
  ) {
    // all friends' diamonds are calculated accordingly
    let friend1Diamond = friend1Gem * 21;
    let friend2Diamond = friend2Gem * 32;
    let friend3Diamond = friend3Gem * 43;

    // total diamond is calculated
    const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;

    // checks whether total diamond is greater or equal to 2000
    // if it is then 2000 is subtracted from the total and result is returned
    // else total diamond is returned
    if (totalDiamond >= 2000) {
      const finalDiamond = totalDiamond - 2000;

      return finalDiamond;
    } else {
      return totalDiamond;
    }
  } else {
    return "Please enter 3 numbers!";
  }
}

// gemsToDiamond function tested
// console.log(gemsToDiamond(100, 5, 1));
// console.log(gemsToDiamond(1, 1, 1));
// console.log(gemsToDiamond(20, 200, 50));
// console.log(gemsToDiamond(34, 45));
// console.log(gemsToDiamond("hello"));
