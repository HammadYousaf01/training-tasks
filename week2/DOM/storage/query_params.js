

function getQueryParams(url) {
    const result = {};
    const params = url.searchParams;

    params.forEach((value, key) => {
        result[key] = value;
    })
    return result;
}

const url = new URL("https://example.com/?user=abc&age=30");

let params = getQueryParams(url);
console.log(params);


