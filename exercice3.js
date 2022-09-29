const arryvalues = (theArray, givenNumber) => {
    let myObj = {};
    const resultat = []

    for (let item = 0; item < theArray.length; item++) {
        let com = givenNumber - theArray[item]; 
        (myObj[com]) ? resultat.push([myObj[com], theArray[item]]) : myObj[theArray[item]] = theArray[item];
    }
        return resultat;
  };
  
  console.log(arryvalues([1,7,9,2,5,3,8], 10));