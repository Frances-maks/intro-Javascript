let marks = 95;

if (marks > 90) {
    grade = "AA"
}
else if (marks <= 90 && marks > 80) {
    grade = "AB"
}
else if (marks <= 80 && marks > 70) {
    grade = "BB"
}
else if (marks <= 70 && marks > 60) {
    grade = "BC"
}
else if (marks <= 60 && marks > 50) {
    grade = "CC"
}
else if (marks <= 50 && marks > 40) {
    grade = "CD"
}
else if (marks <= 40 && marks > 30) {
    grade = "DD"
}
else {
    grade = "FF"
}

console.log(grade);