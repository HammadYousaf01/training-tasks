// Local Storage

localStorage.setItem("name", "John Doe");
console.log(localStorage.getItem("name"));
localStorage.removeItem('name');

// Session Storage

sessionStorage.setItem("name", "John Doe");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem('name');


// Cookies

document.cookie = "name=john doe; expires=Tue, 20 Jun 2023 00:00:00 UTC; path=/;";
document.cookie = "age=30; expires=Tue, 20 Jun 2023 00:00:00 UTC; path=/;";

function parseRawCookiesToObject() {
    const cookies = document.cookie.split('; ');
    return cookies.reduce((accumulator, currentValue) => {
        let [key, value] = currentValue.split('=');
        accumulator[key] = value;
        return accumulator;
    }, {})
}

const cookies = parseRawCookiesToObject();
console.log(cookies);
