console.log("hi starting javascript variables")

// var a = 5;
// a=a+1                 //allowed
// var b = 6;
// var c = "sneha";

//var should be replaced by "let" in js
let a=5;
let b=6;
let c="sneha";

// console.log(a+b+8+c)
// console.log(typeof a, typeof b, typeof c)

{
    let a=77;
    console.log(a)
}
console.log(a)

// validity of the variable
var _a="cutie";               //valid
// var 55a="simple";              //unvalid


// const a1 =6;              
// a1=a1+1;                 not allowed because a1 is constant toh a1 ko change nhi kar sakte

let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {
    name: "Harry",
    "job code": 5600,   //job or code ke beech me space hai isliye isko double quote me likha jayegaa  hum bina gap balo ko bhi quote me likh sakte hai but gap balo ko toh likhna hi hai
    is_handsome: true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);