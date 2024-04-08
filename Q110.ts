// Question110: Create a Function that assigns a grade (A,B,C,D,F) based on a student's score.
function assignGrade(score: number): string {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Example usage:
const studentScore = 85;
const grade = assignGrade(studentScore);
console.log(`The student's grade is: ${grade}`);

