let studentFirstName = "Jason";
let studentLastName = "Cerilli";
let studentAge = "31";
let studentIsActive = true;

//objects literal {}

// let student1 = {
//     //attr:value,
//     firstName: "Jason",
//     lastName: "Cerilli",
//     age: 31,
//     isActive: true,
// }

// let student2 = {
//     firstName: "Mike",
//     lastName: "Scott",
//     age: 47,
//     isActive: true,
// }

// let student3 = {
//     firstName: "Leslie",
//     lastName: "Knope",
//     age: 31,
//     isActive: true,
//     hobbies: ["Serving my community", "Eating waffles"],
//     address: {
//         street: "Lets Go Rd",
//         zip: "74883",
//     }

// }

// let students = [
//     {
//         firstName: "Jason",
//         lastName: "Cerilli",
//         age: 31,
//         isActive: true,
//     },
//     {
//         firstName: "Mike",
//         lastName: "Scott",
//         age: 47,
//         isActive: true,

//     },
//     {
//         firstName: "Leslie",
//         lastName: "Knope",
//         age: 31,
//         isActive: true,
//         hobbies: ["Serving my community", "Eating waffles"],
//         address: {
//             street: "Lets Go Rd",
//             zip: "74883",
//         }


//     }];


//how to access particular elemeents of objects
//console.log(student1.firstName);
//console.log(student2["lastName"]);
//console.log(student3);
//console.log(student3.hobbies[1]);
//console.log(student3.address.zip);


//object constructor function


//these are local variables right here....
function Students(fname,lname,age,isActive){
    this.firstName=fname;
    this.lastName=lname;
    this.age=age;
    this.isActive=isActive;

}

let student1= new Students("Jason", "Cerilli", 31, true);
let student2= new Students("Alexis", "Aldrete", 25, true);

console.log(student1,student2);


function Players(uname,record,ranking){
    this.userName=uname;
    this.record=record;
    this.ranking=ranking;
}

let player1= new Players("D-MoneyAllDay","11-1","1");
let player2= new Players("OnlyLosers", "3-8", "3");











// console.log(students[0].firstName);

// function displayStudent(){

//     let tmp="";
//     let div=document.getElementById("students")
    
//     for(let i=0;i<students.length;i++){
       
//         tmp += `<li>${students[i].firstName} ${students[i].lastName}</li>`;
//         console.log(tmp);
//         div.innerHTML=tmp;

       
//     }
// }
// displayStudent();

