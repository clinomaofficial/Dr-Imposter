const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/data/medicalWords.ts');
if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath);
    process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');

// Regex to find subjects: ['Subject1', 'Subject2']
// Improved regex to handle various formatting
const subjectRegex = /subjects:\s*\[([\s\S]*?)\]/g;
let match;
const counts = {};

while ((match = subjectRegex.exec(content)) !== null) {
    const subjectsStr = match[1];
    // Split by comma and clean up quotes and whitespace
    const subjects = subjectsStr.split(',').map(s => s.trim().replace(/['"]/g, ''));
    subjects.forEach(s => {
        if (s && s !== '') {
            counts[s] = (counts[s] || 0) + 1;
        }
    });
}

// Convert to array and sort by count
const sortedSubjects = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]);

console.log("--- Subject Distribution ---");
if (sortedSubjects.length === 0) {
    console.log("No subjects found. Check the regex or file content.");
} else {
    sortedSubjects.forEach(([subject, count]) => {
        console.log(`${subject}: ${count}`);
    });
}
