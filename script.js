
let decreasebtn = document.getElementById("decrease");
let increasebtn = document.getElementById("increase");
 let resetbtn = document.getElementById("reset");
let count = document.getElementById("count")
let value =0;

decreasebtn.addEventListener("click", () =>{
    value--;
    count.value=value
})
increasebtn.addEventListener("click", () =>{
    value++;
    count.value = value;
})
resetbtn.addEventListener("click", () =>{
    value =0;
    count.value=value
})
