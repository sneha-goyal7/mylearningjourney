const URL = "https://catfact.ninja/fact";
let promise = fetch(URL);
console.log(promise);
//use asyn await to fetch apis
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("get data");
    let response = await fetch(URL);
    console.log(response.status);
    let data = await response.json();
    factPara.innerText = data.text;
    btn.addEventListener("click", getFacts);
    //console.log(data);//here prototype is an object
    //console.log(data[0].text);-------example if prototype is an array
};
//use promise chaining to fetch api
function getFacts() {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText=data.text;
    });
}