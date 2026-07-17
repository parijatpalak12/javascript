//object literals
const mysym=Symbol("key1")
const Jsuser={
    name:"palak",
    "full name":"palak keshri",
    [mysym]:"mykey1",
    age:20,
    location:"jaipur",
    email:"palak@gmail.com",

}
// console.log(Jsuser.email);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mysym]);
// console.log(typeof Jsuser[mysym]);

Jsuser.email="palakkkk@chatgpt.com";
// Object.freeze(Jsuser);
Jsuser.email="palakkkk@google.com";
// console.log(Jsuser)

Jsuser.greeting=function(){
    console.log("hello js");
}
Jsuser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);
} 
//string interpolation
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());