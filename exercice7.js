
function car() {
    const carBrand = [
        { make: 'audi', model: 'r8', year: '2012' }, 
        { make: 'audi', model: 'rs5', year: '2013' }, 
        { make: 'ford', model: 'mustang', year: '2012' }, 
        { make: 'ford', model: 'fusion', year: '2015' }, 
        { make: 'kia', model: 'optima', year: '2012' }
    ]
    

    return ([
                [carBrand[0], carBrand[1]], 
                [carBrand[2], carBrand[3]], 
                [carBrand[4]]
            ]       
    );
}


console.log(car());


     

       
