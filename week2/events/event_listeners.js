

const btn = document.querySelector("#myButton");

btn.addEventListener("click", () => {
    console.log("Clicked!")
});

const input = document.querySelector("#myInput");

input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        console.log(input.value);
    }
})