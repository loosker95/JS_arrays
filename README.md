# Exercices


## 1.  
	Write a function with 2 input parameters (each parameter is an array). 
	This function returns an array of the same elements in two arrays;

	Example: 	
	array1 = [1,2,3,4,5,6];
	array2 = [3,4,8,9,12];
	=> [3,4]


    
## 2.  
	Find 2 elements with the greatest sum in an array
	Example: [1,7,9,2,5,3,8] => [9.8]


    
## 3.  
	Find pairs of elements whose sum is equal to a given number
	Example: 
	[1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]

	
    
## 4. 	
	Get a new array from the given array so that the elements appear only once (using Set)
	Example: 
	[1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
    
	
	
## 5. 
	Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
	Example: 	
	const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
	const arr2 = [3, 5, 9, 10, 88];
	=> [3,5,9]
	
	
## 5. 
	Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
	Example: 	
	const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
	const arr2 = [3, 5, 9, 10, 88];
	=> [3,5,9]
	
	
## 6. 
	I have an array: ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']

	Write a function with 1 input parameter, an return a new object like this:
	{'face': 2, 'zalo': 3, 'gmail':1}


	Example: 	
	const myArr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
	const myFunc = (inputArr) => {
		//write somthing here
	}
	console.log(myFunc(myArr)) 
	// {'face': 2, 'zalo': 3, 'gmail':1
	
	
## 7. 
	I have an array like this: [
    { make: 'audi', model: 'r8', year: '2012' }, 
    { make: 'audi', model: 'rs5', year: '2013' }, 
    { make: 'ford', model: 'mustang', year: '2012' }, 
    { make: 'ford', model: 'fusion', year: '2015' }, 
    { make: 'kia', model: 'optima', year: '2012' }
	]
	Write a function, that will return a new object like this:
	{
		"audi": [
			{
			"make": "audi",
			"model": "r8",
			"year": "2012"
			},
			{
			  "make": "audi",
			  "model": "rs5",
			  "year": "2013"
			}
		],
		"ford": [
			{
			  "make": "ford",
			  "model": "mustang",
			  "year": "2012"
			},
			{
			  "make": "ford",
			  "model": "fusion",
			  "year": "2015"
			}
		],
		"kia": [
			{
			  "make": "kia",
			  "model": "optima",
			  "year": "2012"
			}
		]
	}
	
	
## 8. 
	I have 1 object like this: 
	const order = {
		cart: [
			{ id: 1, name: "ao dai", amount: 5, price: 100000 },
			{ id: 2, name: "ao coc", amount: 2, price: 200000 },
			{ id: 3, name: "quan dai", amount: 3, price: 150000 },
			{ id: 4, name: "quan coc", amount: 4, price: 130000 },
		],
		customer: 'Name',
		address: '12 Giai Phong Street'
	};
	Please use only reduce method, and only one time, return for me 2 
	variables: totalOfMoney = 1870000, totalOfAmount = 14;
	
	
	
## 9. 
	Write 3 methods myMap, myFilter, myReduce (suggest: user Array.prototype, 
	this, and for loop). 
	3 these methods have similar in use and usage as map, filter, reduce of array in JS