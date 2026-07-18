for (let i = 0; i <=10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is the best number");
        
    }
    // console.log(element)
    
}

for (let i = 0; i <=4; i++) {
    // console.log(`outer loop is ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop is ${j} and inner loop ${i}`);
        // console.log(i+"*"+j+"="+i*j);       
    }   
}
let array=["mumbai","delhi","bangalore"]
for (let index = 0; index <= array.length; index++) {
    const element = array[index];
    // console.log(element);        
}
// break

for (let i = 0; i <=10; i++) {   
    if(i==5){
        break;      
    }
    // console.log(`value of i is ${i}`);  
    // console.log(element)    
}

// continue

for (let i = 0; i <=10; i++) {   
    if(i==5){
        continue      
    }
    console.log(`value of i is ${i}`);  
    // console.log(element)    
}