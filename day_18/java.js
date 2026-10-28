const student = ["nilesh", "darsh", "satty","yuvraj"];
console.log(student)
console.log(typeof student)

console.log(student[2]);


student[20] = "meera";
console.log(student);

// ----push----adds elemnt in last of  list
console.log("----push----");
console.log(student);
student.push("Ansh");
student.push("mina","geeta","rohan") // for multiple indivial elements, if you try to add as list a new list willbe created in list itself
console.log(student);

// pop - remove last element and returns it.
console.log("---pop---");
console.log(student);
const lastStudent = student.pop()
console.log(lastStudent);
console.log(student);

//unshift-- adds anew elemnt at the start of the arry()
console.log("---unshift---");
console.log(student);
student.unshift();
console.log(student);

//shift - remove first element and give value it
console.log("---shift---");
console.log(student);
const  firstStudent = student.shift();
console.log(firstStudent);
console.log(student);

//access the last elemnt
const len = student.length;
console.log(len);
const lastElement = student[len-1];
console.log(lastElement);

//splice
console.log("---Splice---");
console.log(student);
student.splice(2,3);
console.log(student);

console.log(student);
student.splice(2,1, "Nilesh");
console.log(student);

//delete
console.log(student);
delete student[16];
console.log(student);


