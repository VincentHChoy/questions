//Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

function formatDate(userDate) {
  let newDate = userDate.split('/')
  const checkDigits = newDate.map((number) => {
    if (number.length < 2) {
      return "0" + number
    }
    return number
  })
  console.log(checkDigits)
  return checkDigits[2] + checkDigits[0] + checkDigits[1]
  // format from M/D/YYYY to YYYYMMDD
}

console.log(formatDate("1/31/2014"));

// Implement the removeProperty function which takes an object and property name, and does the following:
//If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false.

function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop]
    return true
  }
  else return false
}

// Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.

// The check digit should be calculated by adding up all digits in each membership ID.If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together.This process should repeat until a single - digit number is calculated.

// For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single - digit number, 2 and 5 would be added, and the result, 7, would be the check digit.

function createCheckDigit(membershipId) {
  const sumDigits = membershipId.split('').reduce((prev,curr) =>{
    return parseFloat(prev) + parseFloat(curr) 
  })
  
  if(sumDigits.length > 1){
    return createCheckDigit(sumDigits)
  } else{
    return sumDigits
  }
}

console.log(createCheckDigit("55555"));

let catPicture = fetch('https://api.thecatapi.com/v1/images/search').then((res) => {
  return res.json()
}).then(result => console.log(result[0].url))


function findTwoSum(numbers, sum) {
  for (let i = 0; i < numbers.length; i++) {
    let target = sum - numbers[i]
    if (numbers.indexOf(target) !== -1) return [i, numbers.indexOf(target)]

  }
  return null
}

const indices = findTwoSum([5, 1, 5, 7, 5, 9], 10);
console.log(indices);