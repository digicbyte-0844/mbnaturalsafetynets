const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) results = results.concat(walk(full));
    else if (full.endsWith('.jsx') || full.endsWith('.js')) results.push(full);
  });
  return results;
}

const files = walk('./src');
const missing = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Match full <button ... > opening tags across lines
  const regex = /<button\b([^>]*)>/gs;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const attrs = match[1];
    const index = match.index;
    const lineNumber = content.substring(0, index).split('\n').length;
    if (!/\btype\s*=\s*['"]/.test(attrs)) {
      missing.push({ file: f, line: lineNumber, tag: match[0].replace(/\s+/g, ' ').substring(0, 80) });
    }
  }
});

console.log('Total buttons missing type:', missing.length);
missing.forEach(m => console.log(`${m.file}:${m.line} -> ${m.tag}`));
