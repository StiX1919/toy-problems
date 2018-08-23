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
        if(!fibArr[0] || !fibArr[1]){
            fibArr.push(1)
        } else fibArr.push(fibArr[i-2] + fibArr[i-1])
    }
    return fibArr.reverse()
}



