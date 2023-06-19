// Exclude the items with the properties included in the 'excludes' array.

let items = [
    {color: 'red', type: 'tv', age: 18},
    {color: 'silver', type: 'phone', age: 20},
    {color: 'blue', type: 'phone', age: 20},
    {color: 'green', type: 'phone', age: 20}
];
  
let excludes = [
    {k: 'color', v: 'silver'},
    {k: 'type', v: 'tv'},
];


// const filteredItems = items.filter(item => {
//     for (const excludeFilter of excludes) {
//         if (item[excludeFilter['k']] === excludeFilter['v']) return false;
//     }
//     return true;
// })

const filteredItems = items.filter(item => {
    return !excludes.some(excludeFilter => item[excludeFilter['k']] === excludeFilter['v'])
})

console.log(filteredItems);