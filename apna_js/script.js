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
alert("danger");
prompt("whatsapp");
let query=prompt("problem");
console.log(query);
let num=prompt("enter a number:");
if(num%2===0)console.log("even");
else console.log("odd");
