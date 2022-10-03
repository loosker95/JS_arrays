myArray1 = [10, 20, 30, 40, 50];
let total = 0;

// map method multiply array elemets by 10 (Using prototype)
    Array.prototype.myMap = function(){
        for (let i = 0; i < myArray1.length; i++) {
             keys.push(myArray1[i] * 10);
          }           
    }
    const keys = [];
    keys.myMap();

    console.log('-----Map method-----');
    console.log(keys);



// Filter method that return values up to 30 (using this)
    const myObjTwo = {
        myArray2: [10, 20, 30, 40, 50],
        arr: [],
        myFilter: function(){
            for (let index = 0; index < this.myArray2.length; index++) {
                if(this.myArray2[index] > 30){
                    this.arr.push(this.myArray2[index]);
                }
            }
            return this.arr;
        }
    }
    console.log('-----Filter method-----');
    console.log(myObjTwo.myFilter());



// Reduce method that return the sum of the array (Using for loop)
    const myObjThree = {
        myReduce: function(){
            for (let i = 0; i < myArray1.length; i++) {
                total += myArray1[i];
              }
            return total;
        }
    }
    console.log('-----Reduce method-----');
    console.log(myObjThree.myReduce());












