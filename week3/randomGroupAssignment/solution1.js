
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

// Criteria, in a group max students => Math.floor(students.length / 2), min students = 2

const randomNumbersTillMax = max => Math.floor(Math.random() * max);
const MAX_STUDENTS_IN_A_GROUP = Math.floor(students.length / 2);
const MIN_STUDENTS_IN_A_GROUP = 2;

const completedGroups = [];

students.map(student => {
    const groupIndex = randomNumbersTillMax(groups.length);
    groups[groupIndex].groupMembers.push(student);

    if (groups[groupIndex].groupMembers.length === MAX_STUDENTS_IN_A_GROUP) {
        completedGroups.push(groups.splice(groupIndex, 1)[0]);
    }
});

groups.map(group => {
    if (group.groupMembers.length < MIN_STUDENTS_IN_A_GROUP) {
        let extraStudent;
        if (completedGroups[0]) {
            extraStudent = completedGroups[0].groupMembers.shift();
        } else {
            const highestMembersGroupIndex = groups.findIndex(group => {
                return group.groupMembers.length === Math.max(...groups.map(group => group.groupMembers.length))
            });
            extraStudent = groups[highestMembersGroupIndex].groupMembers.shift();
        }
        group.groupMembers.push(extraStudent);
    }
})

completedGroups.push(...groups);
console.log(completedGroups);