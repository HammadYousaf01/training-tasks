
const paragraph = document.querySelector("#paragraph");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    updateInnerHTML("Button Clicked!", paragraph);
});


function updateInnerHTML(newInnerHTML, element) {
    element.innerHTML = newInnerHTML;
}