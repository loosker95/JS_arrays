const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];

const myFunc = (inputArr) => {

    const returnValue = inputArr.filter((value ,item) => {
        return inputArr.indexOf(value) !== item; 
    });

    const sortValue = [...new Set(returnValue)];
    return sortValue;
}

console.log(myFunc(arr1));