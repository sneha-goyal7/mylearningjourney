document.body.childNodes[3].innerText="sneha"; 
let heading=document.getElementById("heading");
console.log(heading);
let firstE1=document.querySelector("p");
console.log(firstE1); 
//practice appending
let h4=document.querySelector("h4");
console.dir(h4.innerText);
h4.innerText = h4.innerText + "from apna college";
console.dir(h4.innerText);
//  
divs=document.querySelectorAll(".box");
divs[0].innerText="new unique value 1";
divs[1].innerText="new unique value 2";
//use loop
let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}