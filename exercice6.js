
const myArr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];

const myFunc = (inputArr) => {
    const obj = Object.assign({}, myArr);
    return obj;
}

console.log(myFunc(myArr)) 