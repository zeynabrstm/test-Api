let fetchApi = async ()=>{


let res = await fetch ("https://zeynabrstm.github.io/test-Api/test.json");

let jsonout = await res.json();
let output = await jsonout.map( elem =>{

    if(elem.side === "left"){
         return `
         <div>${elem.title}</div>`
    }

} ).join("")

document.querySelector("div.wrapper").innerHTML = output;

}
 fetchApi();