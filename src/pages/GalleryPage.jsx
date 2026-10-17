import React, { useState } from 'react';
import { Sparkles, MapPin, X, ZoomIn } from 'lucide-react';
import Badge from '../components/ui/Badge';
import { brandConfig } from '../data/brandConfig';
import logoEmblem from '../assets/logo-emblem.png';

export default function GalleryPage({ onOpenQuoteSheet }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = [
    { id: 'all', label: 'All Balcony Photos (12)' },
    { id: 'pigeon-net', label: 'Balcony Pigeon Nets' },
    { id: 'child-safety', label: 'Child Balcony Nets' },
    { id: 'invisible-grill', label: 'Balcony Invisible Grills' },
    { id: 'pet-net', label: 'Pet & Cat Balcony Nets' },
    { id: 'ducts', label: 'Balcony Duct & AC Area' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'invisible-grill',
      title: 'High-Rise Balcony SS 316 Invisible Grills',
      community: 'My Home Bhooja, HITEC City',
      spec: 'SS 316 Marine • 2" Spacing • 400kg Load',
      image: '/images/hero-balcony.jpg'
    },
    {
      id: 2,
      category: 'pigeon-net',
      title: 'Ultra-Clear Balcony Pigeon Netting',
      community: 'Prestige High Fields, Financial District',
      spec: '30mm Copolymer • Invisible from 10ft',
      image: '/images/balcony-pigeon-net.jpg'
    },
    {
      id: 3,
      category: 'child-safety',
      title: 'Child & Toddler Balcony Fall Prevention Net',
      community: 'Aparna Sarovar Zenith, Nallagandla',
      spec: '180kg Impact Load • Railing Gap Lock',
      image: '/images/invisible-grill-toddler.jpg'
    },
    {
      id: 4,
      category: 'pigeon-net',
      title: 'High-Rise Balcony Pigeon Protection Netting',
      community: 'Ramky One Galaxia, Gachibowli',
      spec: 'Garware Monofilament • Zero View Blockage',
      image: '/images/balcony-after-clean.jpg'
    },
    {
      id: 5,
      category: 'ducts',
      title: 'Balcony Utility Duct & AC Compressor Quarantine',
      community: 'Lanco Hills, Manikonda',
      spec: 'Garware Copolymer • YKK Zipper Hatches',
      image: '/images/balcony-duct-shaft.jpg'
    },
    {
      id: 6,
      category: 'child-safety',
      title: 'Balcony Railing Bottom Crawl Gap Seal',
      community: 'Incor One City, KPHB Kukatpally',
      spec: 'Multi-Point Steel Cable Lock',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 7,
      category: 'invisible-grill',
      title: 'Corner Balcony High-Tensile Grills',
      community: 'Prestige Tranquil, Kokapet',
      spec: 'Extruded Aluminum Track • 10-Yr Rust Free',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 8,
      category: 'pigeon-net',
      title: 'Master Bedroom French Window Net',
      community: 'Jayabheri The Peak, Nanakramguda',
      spec: 'Zero Sag SS Turnbuckle Rigging',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 9,
      category: 'child-safety',
      title: 'Floor-to-Ceiling High-Rise Balcony Shield',
      community: 'My Home Mangala, Kondapur',
      spec: 'High-Tenacity Heat-Set Braided Nylon',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 10,
      category: 'pet-net',
      title: 'Dog Balcony Fall Prevention Net',
      community: 'Salarpuria Sattva Magnolia, Gachibowli',
      spec: 'Claw-Proof & Chew-Proof Finish',
      image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 11,
      category: 'invisible-grill',
      title: 'Penthouse Panoramic Skyline Invisible Grills',
      community: 'Lodha Bellezza, KPHB Colony',
      spec: 'SS 316 Marine Grade • Quick-Cut Fire Safe',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 12,
      category: 'pigeon-net',
      title: 'Double Balcony Pigeon Netting & Sanitization',
      community: 'My Home Tarkshya, Kokapet',
      spec: 'UV-Treated Copolymer Monofilament',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-canvas-light dark:bg-obsidian-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="w-20 h-14 mx-auto mb-4 flex items-center justify-center">
            <img
              src={logoEmblem}
              alt="MB Natural Safety Nets"
              className="w-full h-full object-contain filter drop-shadow-sm"
              width="80"
              height="56"
              onError={(e) => {
                e.currentTarget.src = '/logo.jpeg';
              }}
            />
          </div>
          <Badge variant="azure" size="sm" className="mb-3">
            VERIFIED BALCONY INSTALLATIONS IN HYDERABAD
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hyderabad Balcony Netting <span className="text-brand-600 dark:text-brand-400">Photo Portfolio</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            High-clarity photographs of real balcony netting, child fall-protection barriers, and SS 316 invisible grills installed across premium Hyderabad high-rise apartments.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-glow-azure'
                  : 'bg-white dark:bg-obsidian-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-brand-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group bg-white dark:bg-obsidian-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-card-hover transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-brand-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-brand-600 text-white inline-block mb-1">
                    {item.spec}
                  </span>
                  <h3 className="text-sm font-bold text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                  <span className="truncate">{item.community}</span>
                </div>
                <span className="text-brand-600 dark:text-brand-400 font-bold shrink-0">
                  Inspect →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <div className="relative w-full max-w-4xl bg-slate-900 text-white rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] w-full bg-black">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-950 border-t border-white/10">
                <div>
                  <span className="text-xs font-mono text-brand-400 block mb-0.5">
                    {selectedPhoto.spec}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-400" />
                    <span>{selectedPhoto.community}</span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedPhoto(null);
                    onOpenQuoteSheet(null, selectedPhoto.community);
                  }}
                  className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-extrabold text-xs shadow-glow-azure flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>I Want This Installed in My Balcony</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
