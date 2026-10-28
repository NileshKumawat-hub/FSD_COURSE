// const studentName = "Nilesh";
// const city = "Jaipur";
// const college = "Zenith";
// const rollNumber = "2616400099";


// -----------------------------


const student = {
    studentName: "Nilesh",
    city: "Jaipur",
    college: "Zenith",
    rollNumber: "2616400099",
}

// console.log(student);
// console.log(typeof student);

// // Read
// console.log(student.studentName);
// console.log(student["studentName"]);

// console.log(student.phoneNumber);
// console.log(student["phoneName"]);


// // Create
// student.country = "India";
// console.log(student);


// // Update 
// student.city = "Pune";
// console.log(student);


// //Delete
// delete student.studentName;
// delete student["studentName"];
// console.log(student)



/// --------------------


// const product = {
//     title: "Monitor",
//     price: 7000
// }

// const keyboard = product;

// console.log(product)

// keyboard.title = "keyboard"; //mutate
// console.log(keyboard);
// console.log(product);


//----------------------

// const product = {
//     title: "Monitor",
//     price: 7000
// }

// const keyboard = product;

// keyboard


///---------------------------------------------

const fruitsArr = ["Mango", "Grapes"];
console.log(fruitsArr);

const fruitsObj = {
    0: "Mango",
    1: "Grapes"
};
console.log(fruitsObj);

console.log(typeof fruitsArr);
console.log(typeof fruitsObj);

//read
// console.log(fruitsArr[0]);
// console.log(fruitsObj[0]);

// //create
// fruitsArr[20] = "Apple"
// fruitsObj[20] = "Apple"
// console.log(fruitsArr);
// console.log(fruitsObj);
fruitsArr.push("Apple");
console.log(fruitsObj, fruitsArr);