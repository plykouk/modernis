const fs = require('fs');

// Read the complete colors array
const colorsArray = fs.readFileSync('complete_colors_array.txt', 'utf8');

// Read the current page structure
const currentPage = fs.readFileSync('src/app/ral-chart/page.tsx', 'utf8');

// Find where the current array starts and ends
const startMarker = '// Complete RAL color dataset with 2,041 authentic colors\nconst ralColors: RalColor[] = [';
const endMarker = '];';

const startIndex = currentPage.indexOf(startMarker);
const arrayStartIndex = currentPage.indexOf('[', startIndex);
const endIndex = currentPage.indexOf(endMarker, arrayStartIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find array markers');
  process.exit(1);
}

// Replace the array content
const beforeArray = currentPage.substring(0, arrayStartIndex + 1);
const afterArray = currentPage.substring(endIndex);

const newPage = beforeArray + '\n' + colorsArray.trim() + '\n' + afterArray;

// Write the complete page
fs.writeFileSync('src/app/ral-chart/page.tsx', newPage);

console.log('Successfully updated page with all 2,041 RAL colors!');