console.log("Harry")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red"

document.getElementById("redbox").style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "green";
// }) 

//when u have to choose or apply css for the particular box then there is no need to use loop
//but when it apply on all boxes etc then use loop.