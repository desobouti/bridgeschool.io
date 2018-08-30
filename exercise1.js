/*
Exercise 1 

Write a function `gimmeNumbersLessThan100` that takes in an array and gives you an array with only numbers in it that are less than 100.
*/


const messyArray = ['three', 4, false, 18, 1000, 'chocolate', true];

const gimmeNumbersLessThan100 = (array) => {
  //Declaration variable result of the function
  const arrayResult = [];
  //To move through all the values of the array
  for(var i = 0; i < array.length; i++) {
    //Check first if the element is a number
    if(isNaN(array[i]) === false) {
      //Necessary condition to not validate the elements 'true' and 'false' as numbers 
      if(array[i] != false && array[i] != true) {
        //Check if it's smaller than 100
        if(array[i] < 100) {
          //If it is, add it to the array result.
          arrayResult.push(array[i]); 
        }
      }
    }
  }
  //Get the result of the principal function
  return arrayResult;
};

//Call the principal function with the array provided
gimmeNumbersLessThan100(messyArray);
