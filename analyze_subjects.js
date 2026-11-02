const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/data/medicalWords.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Regex to find subjects: ['Subject1', 'Subject2']
const subjectRegex = /subjects:\s*\[([^\]]+)\]/g;
let match;
const counts = {};

while ((match = subjectRegex.exec(content)) !== null) {
    const subjectsStr = match[1];
    // Split by comma and clean up quotes and whitespace
    const subjects = subjectsStr.split(',').map(s => s.trim().replace(/['"]/g, ''));
    subjects.forEach(s => {
        if (s) {
            counts[s] = (counts[s] || 0) + 1;
        }
    });
}

// Convert to array and sort by count
const sortedSubjects = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]);

console.log("--- Subject Distribution ---");
sortedSubjects.forEach(([subject, count]) => {
    console.log(`${subject}: ${count}`);
});
