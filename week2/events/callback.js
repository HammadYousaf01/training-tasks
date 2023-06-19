

function fetchData(callback) {
    const data = "The data";

    setTimeout(() => {
        callback(data);
    }, 2000);
}

fetchData(data => {
    console.log(data);
})