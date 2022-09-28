const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];


var duplicates = arr1.filter(function(item) {
  return arr2.indexOf(item) !== -1;
});
 
const result = ([...new Set(duplicates)]);

console.log(result);



