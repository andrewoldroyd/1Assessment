// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]

// *** below is what I first had

// function greaterThanTen(numbers) {
//   for (let i=0; i < numbers.length; i++){
//     if (numbers[i] > 10)
//     return numbers[i]
//   }
// }

// *** above is what I first had

//this is after figuring it out more:

const arr1 = [1, 10, 2, 17, 4, 11, 14, 50]


function greaterThanTen(numbers) {
  const result = []
  for (let i=0; i < numbers.length; i++){
    if (numbers[i] > 10){
      result.push(numbers[i])
    }
  }
  return result
}

console.log(greaterThanTen(arr1))

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]

const arr1 = ["Apple", "Beans", "milk", "chocolate", "bacon", "banana"]

function bWords(words) {
    const result = []
  for (let i = 0; i < words.length; i++){
    if (words[i].startsWith("b") || words[i].startsWith("B")){
      result.push(words[i])
    }
  }
  return result
}

console.log(bWords(arr1))

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]

const originalArray = [1, 2, 3]
const additionalItems = [4, 5, 6]

function extend(originalArray, additionalItems) {
  originalArray.push(...additionalItems)
  return originalArray
}

console.log(extend(originalArray, additionalItems))

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']

const randomArr = ["abcd", "1a2b", "abc", "no", "yes", "123"]

function itemsWithLength(items, length) {
const newArr = []
for (let i =0; i < items.length; i++){
  if (items[i].length === length){
    newArr.push(items[i])
  }
}
  return newArr
}

console.log(itemsWithLength(randomArr, 3))

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']

const arr1 = ['a', 'b', 'c', 'd', 'e', 'f']

function everyOtherItem(items) {
  const result = []
  for (let i = 0; i < items.length; i++){
    if((items[i])[0] % 2 === 0){ // I know, this line is wrong since the array is or can be a string rather than just numbers
      result.push(items[i])
    }
  }
  return result
}

console.log(everyOtherItem(arr1))

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {

  return 
}

console.log(findIndex([0], "c"))

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {

  return 

}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
