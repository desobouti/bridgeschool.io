/* 
Exercise 2 

Given a list of students with a name and a score, write a function `getStudentsByGrade` that takes in an array of students and a set of grade boundaries 
and gives you an gives you an object with a list of grades and the names of students for each grade.
Grade boundaries are inclusive. For example, an 80 is considered a B.
For example Priyanka's score is 99 so their grade would be an A.
*/


const students = [{
  name: 'Della',
  score: 65,
}, {
  name: 'Priyanka',
  score: 99,
}, {
  name: 'Emily',
  score: 77
}, {
  name: 'Brendan',
  score: 49
}];

const gradeBoundaries = {
  A: 90,
  B: 80,
  C: 60,
  D: 50,
  E: 32,
  F: 0,
}

const getStudentsByGrade = (students, gradeBoundaries) => {
  //Declaration of the variable result (an object) and an array of grades analyzed
  var objResult = new Object();
  const arrayGrades = [];
  //To move through all the elements of the list
  for(var i = 0; i < students.length; i++) {
    //Call the function 'getGrade' and save the result in a variable
    var grade = getGrade(students[i].score);
    
    //Check if the previous grade has been analyzed
    if(arrayGrades.indexOf(grade) == '-1') {
      //If it is not, create the property inside the object
      const arrayNames = [];
      arrayNames.push(students[i].name);
      objResult[grade] = arrayNames;
      //Add the grade to the array of grades done
      arrayGrades.push(grade); 
    } else {
      //If it is, add the name to the array of names of the concrete grade
      objResult[grade].unshift(students[i].name);
    }
  }
  //Get the result of the principal function
  return objResult;
}

//Function that get the equivalent value to the score provided
const getGrade = (score) => {
  var letterGrade = '';
  
  //Conditions to get the right grade depending of the score
  if(score >= 90) {
    letterGrade = 'A';
  } else if (score >= 80 && score < 90) {
    letterGrade = 'B';
  } else if (score >= 60 && score < 80) {
    letterGrade = 'C';
  } else if (score >= 50 && score < 60) {
    letterGrade = 'D';
  } else if (score >= 32 && score < 50) {
    letterGrade = 'E';
  } else if (score >= 0 && score < 32) {
    letterGrade = 'F';
  }
  //Get the result of the function
  return letterGrade;
}

//Call the principal function with the data provided
getStudentsByGrade(students,gradeBoundaries);
