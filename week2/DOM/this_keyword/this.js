

function printThis() {
    console.log(this)
}

const anObject = {
    log: printThis
}

// Inside an object, it refers to the object
anObject.log()

// As a function, it refers to the 'window' object in the browser, and 'global' in node
printThis();

// With 'new' it refers to the instance created
new printThis()

