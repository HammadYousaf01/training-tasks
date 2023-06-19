

const parent = document.querySelector("#parent");

parent.addEventListener("click", event => {
    console.log(event.target.innerHTML);
})

const newListItem = document.createElement("li");
newListItem.innerHTML = "List Item 4";
parent.appendChild(newListItem);