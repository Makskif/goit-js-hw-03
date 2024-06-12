function filterArray(numbers, value) {
  const number = numbers.length;
  let count = 0;
  let result = [];

  while (count < number) {
    if (numbers[count] > value) {
      result = result.concat(numbers[count]);
    } else {
    }

    count += 1;
  }

  return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
// console.log(filterArray([12, 24, 8, 41, 76, 26, 42, 56, 41, 76, 26, 42, 56], 20));