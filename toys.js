// COUNTING VOWELS

//Write a function that, given a string, return the number of vowels in that string.

function vowelCounter(string) {
    return string.match(/[aeiou]/ig).length
}