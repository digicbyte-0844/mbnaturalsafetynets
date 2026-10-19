const fs = require('fs');
const path = require('path');

function updateFile(filePath, transforms) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const { search, replace } of transforms) {
    if (content.includes(search)) {
      content = content.replace(search, replace);
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Patched: ${filePath}`);
  }
}

// 1. Navbar.jsx - logo
updateFile('src/components/layout/Navbar.jsx', [
  {
    search: '<img\n                src={logoEmblem}',
    replace: '<img\n                loading="eager"\n                decoding="async"\n                src={logoEmblem}'
  }
]);

// 2. Footer.jsx - logo
updateFile('src/components/layout/Footer.jsx', [
  {
    search: '<img\n              src={logoEmblem}',
    replace: '<img\n              loading="lazy"\n              decoding="async"\n              src={logoEmblem}'
  }
]);

// 3. MobileDrawer.jsx - logo
updateFile('src/components/layout/MobileDrawer.jsx', [
  {
    search: '<img\n                src={logoEmblem}',
    replace: '<img\n                loading="lazy"\n                decoding="async"\n                src={logoEmblem}'
  }
]);

// 4. MobileBottomSheet.jsx - logo
updateFile('src/components/mobile/MobileBottomSheet.jsx', [
  {
    search: '<img\n                src={logoEmblem}',
    replace: '<img\n                loading="lazy"\n                decoding="async"\n                src={logoEmblem}'
  }
]);

// 5. EngineeringSection.jsx - logo & technician
updateFile('src/components/sections/EngineeringSection.jsx', [
  {
    search: '<img\n              src={logoEmblem}',
    replace: '<img\n              loading="lazy"\n              decoding="async"\n              src={logoEmblem}'
  },
  {
    search: '<img\n              src="/images/technician-install.jpg"',
    replace: '<img\n              width="600"\n              height="400"\n              loading="lazy"\n              decoding="async"\n              src="/images/technician-install.webp"'
  }
]);

// 6. ReviewsSection.jsx - logo & avatar
updateFile('src/components/sections/ReviewsSection.jsx', [
  {
    search: '<img\n              src={logoEmblem}',
    replace: '<img\n              loading="lazy"\n              decoding="async"\n              src={logoEmblem}'
  },
  {
    search: '<img\n                      src={review.avatar}',
    replace: '<img\n                      width="40"\n                      height="40"\n                      loading="lazy"\n                      decoding="async"\n                      src={review.avatar}'
  }
]);

// 7. ServicesSection.jsx - service card heroImage
updateFile('src/components/sections/ServicesSection.jsx', [
  {
    search: '<img\n                    src={service.heroImage}',
    replace: '<img\n                    width="600"\n                    height="400"\n                    loading="lazy"\n                    decoding="async"\n                    src={service.heroImage}'
  }
]);

// 8. ServicesPage.jsx - header logo & card heroImage
updateFile('src/pages/ServicesPage.jsx', [
  {
    search: '<img\n              src={logoEmblem}',
    replace: '<img\n              loading="lazy"\n              decoding="async"\n              src={logoEmblem}'
  },
  {
    search: '<img\n                    src={service.heroImage}',
    replace: '<img\n                    width="600"\n                    height="400"\n                    loading="lazy"\n                    decoding="async"\n                    src={service.heroImage}'
  }
]);

// 9. GalleryPage.jsx - header logo & gallery item image
updateFile('src/pages/GalleryPage.jsx', [
  {
    search: '<img\n              src={logoEmblem}',
    replace: '<img\n              loading="lazy"\n              decoding="async"\n              src={logoEmblem}'
  },
  {
    search: '<img\n                    src={item.image}',
    replace: '<img\n                    width="600"\n                    height="400"\n                    loading="lazy"\n                    decoding="async"\n                    src={item.image}'
  }
]);

// 10. CalculatorPage.jsx, ContactPage.jsx, HomePage.jsx, NotFoundPage.jsx, ReviewsPage.jsx logos
['CalculatorPage.jsx', 'ContactPage.jsx', 'HomePage.jsx', 'NotFoundPage.jsx', 'ReviewsPage.jsx'].forEach(page => {
  updateFile(`src/pages/${page}`, [
    {
      search: '<img\n              src={logoEmblem}',
      replace: '<img\n              loading="lazy"\n              decoding="async"\n              src={logoEmblem}'
    }
  ]);
});

// 11. ServiceDetailPage.jsx - hero images and logo
updateFile('src/pages/ServiceDetailPage.jsx', [
  {
    search: '<img\n            src={service.heroImage}\n            alt={service.title}\n            draggable={false}\n            className="w-full h-full object-cover',
    replace: '<img\n            width="1200"\n            height="600"\n            loading="eager"\n            decoding="async"\n            src={service.heroImage}\n            alt={service.title}\n            draggable={false}\n            className="w-full h-full object-cover'
  },
  {
    search: '<img\n              src={logoEmblem}',
    replace: '<img\n              width="80"\n              height="56"\n              loading="lazy"\n              decoding="async"\n              src={logoEmblem}'
  },
  {
    search: '<img\n                src={service.heroImage}\n                alt={service.title}\n                draggable={false}\n                className="w-full h-full object-cover',
    replace: '<img\n                width="600"\n                height="400"\n                loading="lazy"\n                decoding="async"\n                src={service.heroImage}\n                alt={service.title}\n                draggable={false}\n                className="w-full h-full object-cover'
  },
  {
    search: '<img\n                      src={rel.heroImage}\n                      alt={rel.title}\n                      className="w-16 h-16 rounded-xl object-cover shrink-0"',
    replace: '<img\n                      width="64"\n                      height="64"\n                      loading="lazy"\n                      decoding="async"\n                      src={rel.heroImage}\n                      alt={rel.title}\n                      className="w-16 h-16 rounded-xl object-cover shrink-0"'
  }
]);

// 12. BeforeAfterSlider.jsx
updateFile('src/components/interactive/BeforeAfterSlider.jsx', [
  {
    search: '<img\n        src={afterImage}',
    replace: '<img\n        width="800"\n        height="500"\n        loading="lazy"\n        decoding="async"\n        src={afterImage}'
  },
  {
    search: '<img\n          src={beforeImage}',
    replace: '<img\n          width="800"\n          height="500"\n          loading="lazy"\n          decoding="async"\n          src={beforeImage}'
  }
]);

// 13. BalconyVisualShowcase.jsx
updateFile('src/components/interactive/BalconyVisualShowcase.jsx', [
  {
    search: '<img\n                  src={currentItem.image}',
    replace: '<img\n                  width="800"\n                  height="500"\n                  loading="lazy"\n                  decoding="async"\n                  src={currentItem.image}'
  },
  {
    search: '<img\n                    src={item.image}\n                    alt={item.title}\n                    className="w-10 h-10 rounded-xl object-cover shrink-0"',
    replace: '<img\n                    width="40"\n                    height="40"\n                    loading="lazy"\n                    decoding="async"\n                    src={item.image}\n                    alt={item.title}\n                    className="w-10 h-10 rounded-xl object-cover shrink-0"'
  }
]);

// 14. Hero.jsx small logo emblem badge
updateFile('src/components/interactive/Hero.jsx', [
  {
    search: '<img\n                src={logoEmblem}\n                alt="MB Natural Safety Nets"\n                className="w-5 h-5 object-contain filter drop-shadow-sm"',
    replace: '<img\n                width="20"\n                height="20"\n                loading="eager"\n                decoding="async"\n                src={logoEmblem}\n                alt="MB Natural Safety Nets"\n                className="w-5 h-5 object-contain filter drop-shadow-sm"'
  }
]);

console.log('--- Image attribute patch run finished ---');
