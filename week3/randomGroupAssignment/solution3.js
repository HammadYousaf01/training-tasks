const groups = [
    { name: "Group A", groupMembers: [] },
    { name: "Group B", groupMembers: [] },
    { name: "Group C", groupMembers: [] },
    { name: "Group D", groupMembers: [] },
]

const students = [];
for (let i = 1; i <= 10; i++) {
    students.push({id: i, name: `Student ${i}`})
}


function assignRandomGroupsToStudents(groups, students) {
    const studentsPerGroup = Math.floor(students.length / groups.length);
    let extraStudents = students.length % groups.length;

    groups.map(group => {
        for (let i = 0; i < studentsPerGroup; i++) {
            const randomStudent = getRandomStudent(students);
            group.groupMembers.push(randomStudent)
        }

        if (extraStudents) {
            group.groupMembers.push(getRandomStudent(students));
            extraStudents--;
        }
    });
}

function getRandomStudent(students) {
    const randomStudentIndex = Math.floor(Math.random() * students.length);
    return students.splice(randomStudentIndex, 1)[0];
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