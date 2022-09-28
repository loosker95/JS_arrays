
array1 = [1,2,3,4,5,6];
array2 = [3,4,8,9,12];

var result = array1.filter(function(item){ 
    return array2.indexOf(item) !== -1; 
});

console.log(result); 






