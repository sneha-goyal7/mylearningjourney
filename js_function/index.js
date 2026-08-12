console.log("hey sneha you are nice!")
console.log("hey sneha you are too good to be fit in this cruel society!")

function nice(name){
    console.log("hey"+ name +"you are nice!")
    console.log("hey"+ name +"you are too good to be fit in this cruel society!")
}

nice(" sneha ")

function sum(a, b, c = 3) {
    console.log(a + b)
    console.log(a, b, c)
    return a + b + c  // for calculating the sum of these
}


result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)
