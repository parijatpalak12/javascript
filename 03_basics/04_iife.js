//imeediately invoked functions expressions

(function chai(){
    //named iife
    console.log(`DB CONNECTED`)
})();

((name)=>{
    //unnamed iife
    console.log(`db connected ${name}`);
})('palak')