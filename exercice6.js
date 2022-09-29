
const myArr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];


const theOccurrences = myArr.reduce((value, items) =>{
    return value[items] ? ++value[items] : value[items] = 1, value;
  }, {});
  
  console.log(theOccurrences) 