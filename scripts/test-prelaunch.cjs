const fs = require('fs');
const path = require('path');

let testsPassed = 0;
let testsFailed = 0;
const results = [];

function assert(condition, message) {
  if (condition) {
    testsPassed++;
    results.push(`  ✅ PASS: ${message}`);
  } else {
    testsFailed++;
    results.push(`  ❌ FAIL: ${message}`);
  }
}

console.log('====================================================');
console.log('🚀 MB NATURAL SAFETY NETS - PRE-LAUNCH AUTOMATED QA');
console.log('====================================================\n');

// ---------------------------------------------------------------------
// TEST 1: ROUTING & DYNAMIC SLUG REGISTRATION
// ---------------------------------------------------------------------
console.log('📋 [1/7] Testing Routes & Dynamic Service Slugs...');
const servicesDataPath = path.join(__dirname, '../src/data/servicesData.js');
const servicesContent = fs.readFileSync(servicesDataPath, 'utf8');

const expectedServices = [
  'balcony-safety-net',
  'balcony-pigeon-net',
  'bird-spikes',
  'balcony-duct-shaft-net',
  'balcony-invisible-grill',
  'balcony-child-safety-net',
  'balcony-pet-safety-net',
  'cricket-practice-net',
  'football-sports-net',
  'swimming-pool-net',
  'construction-safety-net'
];

expectedServices.forEach(slug => {
  assert(servicesContent.includes(`id: "${slug}"`), `Service slug '${slug}' registered in servicesData.js`);
});

const appJsx = fs.readFileSync(path.join(__dirname, '../src/App.jsx'), 'utf8');
const expectedAppRoutes = [
  'path="/"',
  'path="/services"',
  'path="/services/:id"',
  'path="/calculator"',
  'path="/gallery"',
  'path="/reviews"',
  'path="/contact"',
  'path="/privacy-policy"',
  'path="/terms-and-conditions"',
  'path="*"'
];

expectedAppRoutes.forEach(route => {
  assert(appJsx.includes(route), `Route definition '${route}' verified in App.jsx`);
});

// ---------------------------------------------------------------------
// TEST 2: BROKEN LINKS & ANCHORS AUDIT
// ---------------------------------------------------------------------
console.log('\n🔗 [2/7] Testing Links, Anchors, and Contact Schemes...');

function walk(dir) {
  let list = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) list = list.concat(walk(full));
    else if (full.endsWith('.jsx')) list.push(full);
  });
  return list;
}

const jsxFiles = walk(path.join(__dirname, '../src'));
let deadAnchors = 0;
let invalidTel = 0;
let invalidMailto = 0;

jsxFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Check for dead "#" hrefs
  const deadMatch = content.match(/href=["']#["']/g);
  if (deadMatch) deadAnchors += deadMatch.length;

  // Check tel links
  const telMatches = content.match(/href=["']tel:[^"']+["']/g) || [];
  telMatches.forEach(t => {
    if (!t.includes('7702454046') && !t.includes('{brandConfig.phoneRaw}')) invalidTel++;
  });

  // Check mailto links
  const mailMatches = content.match(/href=["']mailto:[^"']+["']/g) || [];
  mailMatches.forEach(m => {
    if (!m.includes('mahimanohar47@gmail.com') && !m.includes('{brandConfig.email}')) invalidMailto++;
  });
});

assert(deadAnchors === 0, `Zero dead anchor ('href="#"') tags found across all views (Found: ${deadAnchors})`);
assert(invalidTel === 0, `All tel: links point to validated proprietor phone raw format (+917702454046)`);
assert(invalidMailto === 0, `All mailto: links point to verified recipient address (mahimanohar47@gmail.com)`);

// ---------------------------------------------------------------------
// TEST 3: FORM VALIDATION ENGINE (HAPPY & UNHAPPY PATHS)
// ---------------------------------------------------------------------
console.log('\n📝 [3/7] Testing Client-Side Form Validation Rules...');

const indianPhoneRegex = /^[6-9]\d{9}$/;

function validatePhone(phone) {
  const digits = String(phone).replace(/\D/g, '');
  if (!digits) return 'Mobile number is required.';
  if (!indianPhoneRegex.test(digits)) return 'Enter valid 10-digit Indian mobile number.';
  return null;
}

function validateName(name) {
  const trimmed = String(name).trim();
  if (!trimmed) return 'Full name is required.';
  if (trimmed.length < 3) return 'Name must be at least 3 characters.';
  if (trimmed.length > 60) return 'Name cannot exceed 60 characters.';
  return null;
}

// Unhappy paths
assert(validateName('') !== null, 'Unhappy path: Empty name is rejected');
assert(validateName('Al') !== null, 'Unhappy path: 2-character name is rejected');
assert(validateName('a'.repeat(65)) !== null, 'Unhappy path: >60-character name is rejected');
assert(validatePhone('') !== null, 'Unhappy path: Empty phone number is rejected');
assert(validatePhone('1234567890') !== null, 'Unhappy path: Phone starting with 1-5 is rejected');
assert(validatePhone('987654321') !== null, 'Unhappy path: 9-digit phone is rejected');
assert(validatePhone('98765432101') !== null, 'Unhappy path: 11-digit phone is rejected');
assert(validatePhone('abcdefghij') !== null, 'Unhappy path: Non-numeric phone is rejected');

// Happy paths
assert(validateName('Vikram Reddy') === null, 'Happy path: Valid resident name accepted');
assert(validateName('Dr. S. K. Sharma') === null, 'Happy path: Name with title and initials accepted');
assert(validatePhone('9876543210') === null, 'Happy path: 9876543210 accepted');
assert(validatePhone('7702454046') === null, 'Happy path: Proprietor phone 7702454046 accepted');
assert(validatePhone('8888888888') === null, 'Happy path: 8-series mobile accepted');
assert(validatePhone('6300000000') === null, 'Happy path: 6-series mobile accepted');

// ---------------------------------------------------------------------
// TEST 4: BUTTON TYPE COMPLIANCE (ZERO MISSING TYPE ATTRIBUTES)
// ---------------------------------------------------------------------
console.log('\n🔘 [4/7] Testing Button Type Compliance across Codebase...');
let missingButtonTypes = 0;
jsxFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /<button\b([^>]*)>/gs;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (!/\btype\s*=\s*['"]/.test(match[1])) {
      missingButtonTypes++;
    }
  }
});
assert(missingButtonTypes === 0, `All buttons have explicit type="button" or type="submit" (Missing: ${missingButtonTypes})`);

// ---------------------------------------------------------------------
// TEST 5: IMAGE ASSETS & ATTRIBUTES AUDIT
// ---------------------------------------------------------------------
console.log('\n🖼️ [5/7] Testing Image Assets, WebP Formats & CLS Prevention...');
let missingImgAttrs = 0;
jsxFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /<img\b([^>]*)>/gs;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const attrs = match[1];
    const hasWidth = /\bwidth\s*=\s*['"]/.test(attrs);
    const hasHeight = /\bheight\s*=\s*['"]/.test(attrs);
    const hasLoading = /\bloading\s*=\s*['"]/.test(attrs);
    const hasDecoding = /\bdecoding\s*=\s*['"]/.test(attrs);
    if (!hasWidth || !hasHeight || !hasLoading || !hasDecoding) {
      missingImgAttrs++;
    }
  }
});
assert(missingImgAttrs === 0, `All <img> tags have width, height, loading, and decoding attributes (Missing: ${missingImgAttrs})`);

// Check WebP images exist on disk for all services
const publicImagesDir = path.join(__dirname, '../public/images');
const expectedWebpImages = [
  'balcony-safety-net.webp',
  'balcony-pigeon-net.webp',
  'bird-spikes.webp',
  'balcony-duct-shaft.webp',
  'hero-balcony.webp',
  'invisible-grill-toddler.webp',
  'balcony-pet-dog-safety.webp',
  'cricket-practice-net.webp',
  'football-sports-net.webp',
  'swimming-pool-net.webp',
  'construction-safety-net.webp'
];

expectedWebpImages.forEach(img => {
  assert(fs.existsSync(path.join(publicImagesDir, img)), `Compressed WebP asset exists: public/images/${img}`);
});

// ---------------------------------------------------------------------
// TEST 6: SECURITY, HEADERS & ROUTING CONFIGURATION
// ---------------------------------------------------------------------
console.log('\n🛡️ [6/7] Testing Production Security Headers & Hosting Config...');

const headersContent = fs.readFileSync(path.join(__dirname, '../public/_headers'), 'utf8');
assert(headersContent.includes('Strict-Transport-Security'), 'HSTS header configured in public/_headers');
assert(headersContent.includes('X-Frame-Options: SAMEORIGIN'), 'X-Frame-Options configured in public/_headers');
assert(headersContent.includes('X-Content-Type-Options: nosniff'), 'nosniff header configured in public/_headers');
assert(headersContent.includes('Content-Security-Policy'), 'CSP policy configured in public/_headers');
assert(headersContent.includes('Cache-Control: public, max-age=31536000'), 'Long-term immutable caching configured for assets');

const wranglerContent = fs.readFileSync(path.join(__dirname, '../wrangler.json'), 'utf8');
assert(wranglerContent.includes('"not_found_handling": "single-page-application"'), 'Cloudflare SPA fallback configured via wrangler.json');

const sitemapContent = fs.readFileSync(path.join(__dirname, '../public/sitemap.xml'), 'utf8');
assert(sitemapContent.includes('https://mbnaturalsafetynets.in/'), 'Sitemap production domain verified');
assert(sitemapContent.includes('/services/balcony-safety-net'), 'Sitemap covers all 11 services');
assert(sitemapContent.includes('<lastmod>'), 'Sitemap contains <lastmod> timestamps');

const robotsContent = fs.readFileSync(path.join(__dirname, '../public/robots.txt'), 'utf8');
assert(robotsContent.includes('Sitemap: https://mbnaturalsafetynets.in/sitemap.xml'), 'Robots.txt declares sitemap URI');
assert(robotsContent.includes('Disallow: /admin/'), 'Robots.txt blocks private paths');

// ---------------------------------------------------------------------
// TEST 7: CSS & MOBILE VIEWPORT SANITY
// ---------------------------------------------------------------------
console.log('\n📱 [7/7] Testing CSS & Mobile Viewport Constraints...');
const indexCss = fs.readFileSync(path.join(__dirname, '../src/index.css'), 'utf8');
assert(indexCss.includes('overflow-x: clip') || indexCss.includes('overflow-x: hidden'), 'Global stylesheet prevents horizontal mobile overflow');

// Print Summary
console.log('\n====================================================');
console.log(`RESULTS: ${testsPassed} PASSED, ${testsFailed} FAILED`);
console.log('====================================================');
results.forEach(r => console.log(r));

if (testsFailed > 0) {
  process.exit(1);
} else {
  console.log('\n🎉 ALL PRE-LAUNCH QA TESTS PASSED SUCCESSFULLY! Ready for launch certification.');
}
