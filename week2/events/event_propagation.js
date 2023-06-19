

const outerDiv = document.querySelector("#outerDiv");
const innerDiv1 = document.querySelector("#innerDiv1");
const innerDiv2 = document.querySelector("#innerDiv2");
const innerDiv3 = document.querySelector("#innerDiv3");


outerDiv.addEventListener("click", () => {
    console.log("Outer div clicked!");
})

innerDiv1.addEventListener("click", () => {
    console.log("Inner Div 1 clicked!");
})

innerDiv2.addEventListener("click", () => {
    console.log("Inner Div 2 clicked!");
})

innerDiv3.addEventListener("click", () => {
    console.log("Inner Div 3 clicked!");
})