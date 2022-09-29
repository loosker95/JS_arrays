
array1 = [1,2,3,4,5,6];
array2 = [3,4,8,9,12];


function returnValues(value1, value2){
    var result = value1.filter(function(item){ 
        return value2.indexOf(item) !== -1; 
    });

    return result;
}


console.log(returnValues(array1, array2));


