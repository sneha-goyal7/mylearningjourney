//promises
let promise=new Promise((resolve,reject)=>{
    console.log("i am a promise");
    //resolve(123);
    resolve("success");
    //reject("some error occured");
});
//apis
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        console.log("data", dataId);
        resolve("successfull");
        // if (getNextData) {
        //     getNextData();
        // }-----------------solve by promise chain no need to apply conditions
    }, 2000);
    })
}
//promise chain

/*
let p3=getData(1);
p3.then((res)=>{
    console.log(res);
});
*/
/*
getData(1).then((res)=>{
    console.log(res);
    getData(2).then(()=>{
        console.log(res);
    })
});
*/
//main promise chaining
getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log(res);
});

//how we resolve the promise?
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am promise");
        resolve("succss");
        //reject("error");
    });
};
let promises=getPromise();
promise.then(()=>{
    console.log("promise fulfilled");
});
// let promises=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);  here res=succss;
// });
promise.catch(()=>{
    console.log("promise rejected"); 
})
//promise chain
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success");
        },4000);
    });
}
// console.log("fetching data1");
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// });
// console.log("fetching data2");
// let p2=asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });
console.log("fetching data1");
let p1=asyncFunc1();
p1.then((res)=>{
    //console.log(res);
    console.log("fetching data2");
    let p2=asyncFunc2();
    p2.then((res)=>{
        //console.log(res);
    });
});
/*
console.log("fetching data1");
asynFunc1().then((res)=>{
    console.log("fetching data2");
    asyncFunc2().then((res)=>{});
});
*/
//main promise chaining
asyncFunc1()
  .then((res) => {
    console.log(res);
    return asyncFunc2();
  })
  .then((res) => {
    console.log(res);
  });  
