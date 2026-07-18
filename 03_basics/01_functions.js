function sayname(){
    console.log("P")
    console.log("A")
    console.log("L")
    console.log("A")
    console.log("K")
}
// sayname()
// function addtwonumbers(number1,number2){
//     console.log(number1+number2)
// }

function addtwonumbers(number1,number2){
    return number1+number2
}
const result=addtwonumbers(5,6)
// console.log("result",result)

function loginsermessage(username="diva"){
    if(username===undefined){
        // console.log("please enter a valid username")
        return
    }
    return `${username} just logged in`;
}
console.log(loginsermessage("palak"))
// console.log(loginsermessage(""))
// console.log(loginsermessage())

function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,400,500))

const user={
    name:"palak",
    email:"palak@gmail.com",
}
function handlejob(anyobject){
    console.log(`name is ${anyobject.name} and email is ${anyobject.email}`)
}
// handlejob(user)

handlejob({
    name:"pearl",
    email:"pearl@gmail.com",
})

const mynewarray=[100,200,300,400]
function returnsecondvalue(newarray){
    return newarray[1]
}
console.log(returnsecondvalue(mynewarray))