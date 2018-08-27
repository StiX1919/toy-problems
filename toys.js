// COUNTING VOWELS

//Write a function that, given a string, return the number of vowels in that string.

function vowelCounter(string) {
    return string.match(/[aeiou]/ig).length
}


// SQUARING NUMBERS

// Write a function to square every digit of an integer.

// Note: The function should accept an integer and return an integer

function squareNumbers(num) {
    let numArr = (''+num).split('')

    let newArr = numArr.map((a) => {
        return a*a
    })
    return Number(newArr.join(''))
}


//FIBONACCI

// Create an array the size of n with the values of the fibannaci sequence 
//and reverse the order in which the sequence is displayed.

function fibonacci(number) {
    let fibArr = []

    for(let i = 0; i < number; i++){
        fibArr.push((fibArr[i-2] || 1) + (fibArr[i-1] || 0))
    }
    return fibArr.reverse()
}
//recursion example
function fibRecur(num, arr) {
    if(num <= 1) return 1

    return fibRecur(num - 1) + fibRecur(num - 2)
}


// Write a function, which takes a non-negative integer (seconds) 
//as input and returns the time in a human-readable format (HH:MM:SS)

function readableTime(sec, cb) {
    let hours = cb(Math.floor(sec/3600)),
        minutes = cb(Math.floor((sec%3600)/60)),
        seconds = cb(sec-(hours*3600)-(minutes*60))
  
    return `${hours}:${minutes}:${seconds}`
  
  }
  
  function twoDig(time) {
    if(('' + time).length < 2) {
      return '0' + time
    }
    return time
  }