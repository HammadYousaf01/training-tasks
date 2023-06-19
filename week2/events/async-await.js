

async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("The data"), 2000);
    })
}

async function logData() {
    const data = await fetchData();
    console.log(data);
}

logData();