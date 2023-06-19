

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("The data"), 2000);
})

promise.then(res => {
    console.log(res);
})