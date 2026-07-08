// stack(primitive=number,string,boolean null, undefined, symbol),    heap(non primitive=array,object,function)
let myYoutubename="thesassygirl"
let anotherName=myYoutubename
anotherName="chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userone={
    email:"palak@gmail.com",
    upi:"user@ybl"
}
let usertwo=userone
usertwo.email="xyz@gmail.com";

console.log(userone.email);
console.log(usertwo.email);


