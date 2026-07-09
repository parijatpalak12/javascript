const name="palak"
const repoCount=50
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('palakkk-keshri-12')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString=gameName.substring(0,4);
console.log(newString);
const newuString=gameName.slice(-6,4);
console.log(newuString);

const newStringone="      palak     is  me      ";
console.log(newStringone);
console.log(newStringone.trim());

const url="https://palak.com/palak%20keshri"
console.log(url.replace("%20","-"));
console.log(url.includes("sundar"));

console.log(gameName.split("-"));