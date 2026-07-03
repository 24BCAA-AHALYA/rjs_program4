// Complete the function using object destructuring.
let students =[
    {name: "chandru",dept:"BCA",age:"18"},
    {name: "anu",dept:"BCA",age:"19"},
    {name: "kaviya",dept:"BCA",age:"19"},
]; 
function getStudentDetails(students) {
    for(const {name,age,dept} of  students){
        console.log(name,age,dept);
    }// Write your code here
}

getStudentDetails(students);
