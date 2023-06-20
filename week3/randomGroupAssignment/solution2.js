
const groups = [
    { name: "Group A", groupMembers: [] },
    { name: "Group B", groupMembers: [] },
    { name: "Group C", groupMembers: [] },
    { name: "Group D", groupMembers: [] },
    { name: "Group E", groupMembers: [] },
    { name: "Group F", groupMembers: [] },
]

const students = [];
for (let i = 1; i <= 16; i++) {
    students.push({id: i, name: `Student ${i}`})
}

randomlyReArrangeArray(groups);

let groupIndexRef = 0;
students.map(student => {
    groups[groupIndexRef].groupMembers.push(student);

    if (groupIndexRef === groups.length - 1) {
        groupIndexRef = 0;
    } else {
        groupIndexRef++;
    }
})

console.log(groups);

function randomlyReArrangeArray(arr) {
    arr.sort(() => Math.random() - 0.5);
}