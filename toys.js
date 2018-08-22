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