const myArray = [30, 30, 30, 40, 40, 40, 5, 5, 5, 220, 22200, 12010, 6575];
function uniqueValue(arr) {
  const mySet = new Set(arr);
  return [...mySet];
}
console.log(uniqueValue(myArray));
