const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) results = results.concat(walk(full));
    else if (full.endsWith('.jsx')) results.push(full);
  });
  return results;
}

const files = walk('./src');
const issues = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /<img\b([^>]*)>/gs;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const attrs = match[1];
    const index = match.index;
    const lineNumber = content.substring(0, index).split('\n').length;
    const hasWidth = /\bwidth\s*=\s*['"]/.test(attrs);
    const hasHeight = /\bheight\s*=\s*['"]/.test(attrs);
    const hasLoading = /\bloading\s*=\s*['"]/.test(attrs);
    const hasDecoding = /\bdecoding\s*=\s*['"]/.test(attrs);

    if (!hasWidth || !hasHeight || !hasLoading || !hasDecoding) {
      issues.push({
        file: f,
        line: lineNumber,
        missing: [
          !hasWidth && 'width',
          !hasHeight && 'height',
          !hasLoading && 'loading',
          !hasDecoding && 'decoding'
        ].filter(Boolean).join(', '),
        tag: match[0].replace(/\s+/g, ' ').substring(0, 90)
      });
    }
  }
});

console.log('Total img elements with missing attributes:', issues.length);
issues.forEach(i => console.log(`${i.file}:${i.line} [missing: ${i.missing}] -> ${i.tag}`));
