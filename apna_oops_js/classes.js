const employe={
    fullname:"sneha",
    marks:94.6,
    printmarks:function(){
        console.log("marks=",this.marks);
    },
};
const employee={
    calctax(){
        console.log("tax rate is 10%");
    },
};
const sneha={
    salary:50000,
};
sneha.__proto__=employee;//set a specific prototype of one object into another


//classes

class toyotacar{
    constructor(){
        console.log("creating new objects");
    }
    constructor1(brand){
        console.log("creating news objects");
        this.brand=brand;
    }
    constructor2(brand,myleage){
        console.log("creating news objects");
        this.brand=brand;
        this.myleage=myleage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName=brand;
    }
}
let fortuner=new toyotacar(); 
fortuner.setBrand("fortuner");
let lexus=new toyotacar("lexus",12);
console.log(lexus);

// inheritance

class parent{
    constructor(){
        this.species="homo"; 
    }
    hello(){
        console.log("hello");
    }
}
class child extends parent{}
let obj=new child();
class derived extends parent{
    constructor(branch){
        super();//to invoke parent class contructor
        this.branch=branch;
    }
}
let object=new derived("chemo");

//practice for acces multiper user on a website

let data="secret infor";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("data=",data);
    }
}
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        data="update data";
    }
}
let student1=new user("sneha","sneh@email.com");
let teacher1=new user("dean","dea@college.com");
let admin1=new user("admin","adm@college.com");

// error handling

let a=5;
let b=10;
console.log(a+b);
console.log(a-b);
console.log(a*b);

// console.log(a+c);    //error coming 
try{
    console.log(a+c);
}catch(err){
    console.log(err);
}

console.log(a+b);
console.log(a/b);
console.log(a+b);
console.log(a-b);
console.log(a+b);

//callbacks

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum); 
//nested callback
// function getdata(dataid){
//     console.log("data",dataid);
// }
// getdata(1);
// getdata(2);
//updated code for nested callback
function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getnextdata){
            console.log 
        }
        getnextdata();
    },2000);
}
getdata(1,()=>{
    getdata(2);
});