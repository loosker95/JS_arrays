const values = [1,2,3,1,2,3,4,5,6,4];


function removeDuplicate(){
    return ([...new Set(values)]);
}

console.log(removeDuplicate());
