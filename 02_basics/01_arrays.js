const myArr=[0,1,2,3,4,5];
const myHeros=["ironman","spiderman","shaktiman"];

const myArr2= new Array(1,2,3,4,5);
// console.log(myArr[1]);
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.unshift(11)
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(2));
// console.log(myArr.indexOf(2));

const newArr=myArr.join();
// console.log( typeof myArr);
// console.log(typeof newArr);

console.log("A",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);