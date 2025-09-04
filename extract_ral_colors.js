const fs = require('fs');

const htmlContent = fs.readFileSync('C:/Users/easys/Desktop/rals/All RAL colours _ RAL Colours.html', 'utf8');

// Extract all RAL color entries
const ralPattern = /<a href="[^"]*" class="farbe[^"]*" style="background-color:(#[A-Fa-f0-9]{6})"[^>]*><span>RAL<\/span><span class="number">([^<]*)<\/span><div class="subtext">([^<]*)<br>([^<]*)<\/div><\/a>/g;

const colors = [];
let match;

while ((match = ralPattern.exec(htmlContent)) !== null) {
  const hex = match[1];
  const code = match[2];
  const germanName = match[3];
  const englishName = match[4];
  
  // Determine category based on RAL code pattern
  let category = 'design';
  if (code.match(/^\d{4}$/)) {
    // RAL Classic format (4 digits)
    const num = parseInt(code.substring(0, 1));
    switch(num) {
      case 1: category = 'yellow'; break;
      case 2: category = 'orange'; break;
      case 3: category = 'red'; break;
      case 4: category = 'violet'; break;
      case 5: category = 'blue'; break;
      case 6: category = 'green'; break;
      case 7: category = 'grey'; break;
      case 8: category = 'brown'; break;
      case 9: category = code === '9005' || code === '9011' || code === '9017' ? 'black' : 'white'; break;
      default: category = 'other';
    }
  } else {
    // RAL Design format - categorize by hue
    const hueMatch = code.match(/^(\d{3})/);
    if (hueMatch) {
      const hue = parseInt(hueMatch[1]);
      if (hue >= 0 && hue <= 20) category = 'black';
      else if (hue >= 21 && hue <= 40) category = 'red';
      else if (hue >= 41 && hue <= 80) category = 'orange';
      else if (hue >= 81 && hue <= 120) category = 'yellow';
      else if (hue >= 121 && hue <= 160) category = 'green';
      else if (hue >= 161 && hue <= 240) category = 'blue';
      else if (hue >= 241 && hue <= 300) category = 'violet';
      else if (hue >= 301 && hue <= 340) category = 'red';
      else if (hue >= 341 && hue <= 360) category = 'red';
      else category = 'grey';
    }
  }
  
  colors.push({
    code: `RAL${code}`,
    name: englishName.trim(),
    germanName: germanName.trim(),
    hex: hex.toUpperCase(),
    category: category
  });
}

// Generate JavaScript array format
console.log(`const ralColors: RalColor[] = [`);
colors.forEach((color, index) => {
  const comma = index < colors.length - 1 ? ',' : '';
  console.log(`  { code: '${color.code}', name: '${color.name}', hex: '${color.hex}', category: '${color.category}' }${comma}`);
});
console.log(`];`);

console.log(`\n// Total colors extracted: ${colors.length}`);