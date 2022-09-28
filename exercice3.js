const arryvalues = (theArray, givenNumber) => {
    let myObj = {};
    const resultat = []

   const showValues = theArray.map(item => {
      let com = givenNumber - item;
        (myObj[com]) ? resultat.push([myObj[com], item]) : myObj[item] = item;
    });

    return resultat;
  };
  
  console.log(arryvalues([1,7,9,2,5,3,8], 10));