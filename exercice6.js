
const myArr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];
const result = {};

for (const content of myArr) {
  (result[content]) ? result[content] += 1 : result[content] = 1;
}

console.log(result);