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