
const numbers = [1, 2, [ 3, 4, [ 5 ]], 6, 7];

const sum = (array) => {
  //Declaration variable result of the function
  var varResult = 0;
  //Save the output of the function called in the variable result
  varResult = checkAndSum(array,varResult);
  //Get the result of the principal function
  return varResult;
}

//Recursive function that check and do the sum of the numbers
const checkAndSum = (array,varResult) => { 
  //To move through all the elements of the array
  for(var i = 0; i < array.length; i++) {
    //Check if the element is an array
    if(Object.prototype.toString.call(array[i]) === '[object Array]') {
      //If it is, call the function again with the new array
      varResult = checkAndSum(array[i],varResult);
    }
    else {
      //If it is not, sum the values. 
      //The total sum is accumulated in the variable 'varResult'
      varResult = varResult + array[i];
    }
  }
  //Get the result of the function
  return varResult;
}

//Call the principal function with the array provided
sum(numbers);