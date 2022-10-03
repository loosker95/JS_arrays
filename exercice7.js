

const arr1 = [
    { make: 'audi', model: 'r8', year: '2012' }, 
    { make: 'audi', model: 'rs5', year: '2013' }, 
    { make: 'ford', model: 'mustang', year: '2012' }, 
    { make: 'ford', model: 'fusion', year: '2015' }, 
    { make: 'kia', model: 'optima', year: '2012' }
]

function getObject(name, arr) {
    const result = arr.filter((item) => {
        if(item.make === name){
            return `${item.make}`;
        }
    });
    // return  `{"${name}" : ${result.toString()}}`;
    return  result;
}

console.log(getObject('kia', arr1));


     

       
