//strings
//direct in console length and str[0] and all

//literals in string use backtick` template literals
let obj={
    item:"pen",
    price:10,
};
console.log("the cost of",obj.item,"is",obj.price);

let specialstring=`this is a template literal`;
console.log(typeof specialstring);

let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//escape characters
let q="sneha\ngoyal";
console.log(q.length);
console.log(q);