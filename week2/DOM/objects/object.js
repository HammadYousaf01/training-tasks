

const person = {
    name: "John Doe",
    email: "JohnDoe@gmail.com",
    age: 30,
    address: "Some random address",
    greet() {
        console.log(`Hello, ${this.name}!`)
    }
}

person.greet()

const car = { 
    make: "Kia",
    model: "Sportage AWD",
    year: 2022,
    color: "grey",
    startEngine() {
        console.log("The engine has started!")
    }
}

car.startEngine();