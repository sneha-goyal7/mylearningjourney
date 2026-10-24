console.log("sneha goyal!!");
//primitive data types
fullname="tony stark";
age=24;
price=100.89;
x=null;
y=undefined;
console.log(fullname);
//boolean variable
isfollow=true;
fullname=false;
console.log(fullname,age,price,x,y,isfollow);
fullname="sneha";
//non primitive data types(onjects-collection-key-value pairs)
const student={
    fullName:"sneha goyal",
    age:20,cgpa:8.2,
    isPass:true,
};
student["name"]="goyalsneha";
// student["age"]=student["age"]+1;
student["age"]=21;
console.log(student["age"]);
console.log(student.cgpa);
//operators
a=4;
b=2;
console.log("a+b=",a+b);
console.log(a,b);
b+=3;
console.log(b);
b="5";
console.log(a===b);
console.log(a==b);
console.log(a&&b);
//conditional statements
let mode="dark";
let color;
if(mode=="dark")color="black";
    // console.log("vote");
if(mode=="light"){
    color="white";
}
console.log(color);
//switch case syntax here
const expr='papayas';
switch(expr){
    case 'oranges':
        console.log('oranges are $0.59 a pound.');
        break;
        case 'Mangoes':
            case'papayas':
            console.log('mangoes and papayas are $2.79 a pound.');
            break;
            default:
                console.log(`sorry,we are out of ${expr}.`);
}
//mdn references

//abhi me isee comment me isliye daal rahi hoon kyunki baar baar yahi dikhega barna website pe jab bhi refresh hogi

// alert("danger");
// prompt("whatsapp");
// let query=prompt("problem");
// console.log(query);
// let num=prompt("enter a number:");
// if(num%2===0)console.log("even");
// else console.log("odd");


//loops in js

for(let i=1;i<=5;i++){
    console.log("sneha goyal");
}
//sum of n numbers
let sum=0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log(sum);
//special loops in js
let str="sneha";
let size=0;
for(let i of str){
    console.log(i); 
    size++;
}
console.log(size); 
//
for(let i in student){
    console.log(i,student[i]);   
}
//create a guessing number game

// let gamenum=5;
// //let usernum=prompt("guess the game number:");
// while(usernum!=gamenum){
//     //usernum=prompt("you entered the wrong number,try again:");
// }
// console.log("congratulation and celebration u got the correct number guess");