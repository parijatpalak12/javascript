// singleton

const tinderuser= new Object();
tinderuser.id="23abc"
tinderuser.name="palak"
tinderuser.isloggedin=false;
// console.log(tinderuser);

const regularuser={
    email:"palak@gmail.com",
    fullname:{
        userfullname:{
            firstname:"palak",
            lastname:"keshri"
        }
    }
}
// console.log(regularuser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1, obj2}
// const obj3=Object.assign({},obj1, obj2, obj4);
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"palak@gmail.com"
    },
    {
        id:1,
        email:"palak@gmail.com"
    },
    {
        id:1,
        email:"palak@gmail.com"
    }
]
// console.log(users[1].email);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isloggedin'))

const course={
    coursename:"js in hindi",
    price:999,
    courseinstructor:"hitesh"
}
// const{courseinstructor}=course
// console.log(courseinstructor)
const{courseinstructor:instructor}=course
console.log(instructor)

// {
//     "name":"palak",
//     "coursename":"js in hindi",
//     "price":"999"

// }