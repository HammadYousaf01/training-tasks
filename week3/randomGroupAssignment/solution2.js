
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


function assignRandomGroupsToStudents(groups, students) {
    randomlyReArrangeArray(groups);
    randomlyReArrangeArray(students);

    let groupIndexRef = 0;
    students.map(student => {
        groups[groupIndexRef].groupMembers.push(student);
    
        if (groupIndexRef === groups.length - 1) {
            groupIndexRef = 0;
        } else {
            groupIndexRef++;
        }
    })
}

function randomlyReArrangeArray(arr) {
    arr.sort(() => Math.random() - 0.5);
}

function prettyPrintGroups(groups) {
    groups.forEach(group => {
        let output = `${group.name}: [`

        group.groupMembers.forEach(student => {
            output += `${student.name.split(' ')[1]}, `
        })

        output += "]";
        console.log(output)
    })
}


assignRandomGroupsToStudents(groups, students);
prettyPrintGroups(groups);