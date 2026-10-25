let marks=[2,3,6,5,4];
console.log(marks);
let sums=0;
for(let i of marks){
    sums+=i;
}
let avg=sums/marks.length;
console.log(avg);
console.log(`${avg}`);
//practice question find offer price
let itemprice=[250,645,300,900,50];
for(let i=0;i<itemprice.length;i++){
    let offer=itemprice[i]/11;
    itemprice[i]-=offer;
}
console.log(itemprice);
//functions
function myfunc(){
    console.log("hello hi tata bye");
}
myfunc();
//with parameter and arguement
function myfunct(msg){//parameter->local scope
    console.log(msg);
}
myfunct("sneha");//arguement
//example 
function sam(x,y){
    s=x+y;
    return s;
}
val=sam(3,4);
console.log(val);
//arrow function
const arrowsum=(a,b)=>{
    console.log(a+b);
    //return(a+b);
};
//OR  
const printhello=()=>console.log("hello");
//practice question count vowels
function countvow(str){
    let count=0;
    for(const char of str){
        if(
            char==="a"||char==="e"||char==="i"||char==="o"||char==="u"
        ){
            count++;
        }
    }
    return count;
}
//for each loop
let nums=[2,3,4,5,6];
nums.forEach((num)=>{
    console.log(num*nums);
});