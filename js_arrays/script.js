//map filter reduce(MFR)


//1.MAP

let arr = [1, 13, 5 ,7, 11];
let newArr = []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)
}

let newArr = arr.map((e, index, array)=>{
    return e**2
})

//2.FILTER

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

//3. REDUCE

console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))// yaha red ki jagah kuch bhi likh sakte hai compulsaro nhi hai just main thing yeh hai ki konsa operation apply ho raha hi red is just a name that comes after const