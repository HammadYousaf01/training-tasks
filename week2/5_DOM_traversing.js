
const parent = document.querySelector("#parent");

for (const child of parent.children) {
    console.log(child)
}


const child2 = document.querySelector("#child-2");

console.log(child2.parentNode)