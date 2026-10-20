// Complete the function using object destructuring.

function getStudentDetails(students) {
    let students =[
    {name: "chandru",dept:"BCA",age:"18"},
    {name: "anu",dept:"BCA",age:"19"},
    {name: "kaviya",dept:"BCA",age:"19"},
]; 
    for(const {name,age,dept} of  students){
        console.log(name,age,dept);
    }// Write your code here
    console.log(getStudentDetails(students))
}

getStudentDetails(students);
