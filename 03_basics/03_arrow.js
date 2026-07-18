const user={
    username:"parijat",
    price:999,

    welcomemessage:function(){
        console.log( `${this.username},welcome to website`)
        // console.log(this)
    }
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

//  console.log(this)

//  function chai(){
//     console.log(this)
//  }
//  chai()

//  const chai=function(){
//     let username="parijat"
//     console.log(this.username)
//  }
//  chai()

//  to convert it into allow function just remove functin and add a arrow after parenthesis
//this is only valid in objects not function

const chai=()=>{
    let username="parijat"
    console.log(username)
 }
//  chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(3,4))

// this also be run as

// const addtwo=(num1,num2)=> num1+num2
// console.log(addtwo(3,4))

const addtwo=(num1,num2)=> ({username:"parijat"})
console.log(addtwo(3,4))