//array deduplication 
var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
var n = arr.length;
n = removeDuplicates(arr, n);
for (var i = 0; i < n; i++) document.write(arr[i] + " ");
function removeDuplicates(arr, n) {
  if (n == 0 || n == 1) return n;
  var temp = new Array(n);
  var j = 0;
  for (var i = 0; i < n - 1; i++) if (arr[i] != arr[i + 1]) temp[j++] = arr[i];
  temp[j++] = arr[n - 1];
  for (var i = 0; i < j; i++) arr[i] = temp[i];
  return j;
}


//Finding intersection of two arrays
const array1 = [1, 2, 3, 4];
const array2 = [2, 3, 5, 6];

const intersection = array1.filter(value => array2.includes(value));

console.log(intersection);


// comparing two arrays of equality
const array3 = [1, 2, 3];
const array4 = [1, 2, 3];
const equalValues = (array3. length === array4. length) && array3. every((value, index) => value === array4[index]);
if (equalValues) {
console. log("They have equal values.");
} else {
console. log("They do not have equal values.");
}

//Array Merging
const cars = ['Ferrari', 'McLaren'];
const racers= ['Charles', 'Max'];

const all = [...cars, ...racers];

console.log(all);


//creating the array of arrays
let arrayOfArrays = [
    [1, 2, 3],   
    [4, 5, 6],    
    [7, 8, 9]     
];
console.log(arrayOfArrays);
arrayOfArrays.forEach(innerArray => {
    innerArray.forEach(element => {
        console.log(element);
    });
});