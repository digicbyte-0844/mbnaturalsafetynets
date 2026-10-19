import React, { useState } from 'react';
import { Sparkles, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import Badge from '../components/ui/Badge';
import { brandConfig } from '../data/brandConfig';
import logoEmblem from '../assets/logo-emblem.png';
import SEOHead from '../components/seo/SEOHead';
import EmptyState from '../components/ui/EmptyState';


export default function GalleryPage({ onOpenQuoteSheet }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photos (17)' },
    { id: 'safety-nets', label: 'Balcony & Child Safety' },
    { id: 'bird-control', label: 'Pigeon Nets & Bird Spikes' },
    { id: 'invisible-grill', label: 'SS 316 Invisible Grills' },
    { id: 'sports-nets', label: 'Cricket & Sports Turf' },
    { id: 'specialized', label: 'Pool & Construction' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'invisible-grill',
      title: 'High-Rise Balcony SS 316 Invisible Grills',
      community: 'My Home Bhooja, HITEC City',
      spec: 'SS 316 Marine • 2" Spacing • 400kg Load',
      image: '/images/hero-balcony.webp'
    },
    {
      id: 2,
      category: 'bird-control',
      title: 'Ultra-Clear Balcony Pigeon Netting',
      community: 'Prestige High Fields, Financial District',
      spec: '30mm Copolymer • Invisible from 10ft',
      image: '/images/balcony-pigeon-net.webp'
    },
    {
      id: 3,
      category: 'bird-control',
      title: 'Architectural SS 304 Anti-Bird Spikes on Ledges',
      community: 'Banjara Hills Luxury Residences',
      spec: 'SS 304 Marine Spikes • UV Polycarbonate Base',
      image: '/images/bird-spikes.webp'
    },
    {
      id: 4,
      category: 'sports-nets',
      title: 'Rooftop Cricket Practice Net Pitch Enclosure',
      community: 'Gachibowli Sports Academy',
      spec: 'Heavy-Duty Garware Nylon • Multi-Box Framing',
      image: '/images/cricket-practice-net.webp'
    },
    {
      id: 5,
      category: 'sports-nets',
      title: 'Multi-Sport Futsal & Turf Perimeter Barrier Net',
      community: 'Jubilee Hills Sports Arena',
      spec: '20ft High High-Tensile Polyethylene Barrier',
      image: '/images/football-sports-net.webp'
    },
    {
      id: 6,
      category: 'specialized',
      title: 'Swimming Pool Anti-Drowning Tension Safety Net',
      community: 'Financial District Luxury Villa',
      spec: 'Brass Flush Anchors • Central Tension Float',
      image: '/images/swimming-pool-net.webp'
    },
    {
      id: 7,
      category: 'specialized',
      title: 'High-Rise Construction & Debris Containment Net',
      community: 'HITEC City Commercial Tower',
      spec: 'IS 5175 Certified Personnel Fall Arrest',
      image: '/images/construction-safety-net.webp'
    },
    {
      id: 8,
      category: 'safety-nets',
      title: 'Child & Toddler Balcony Fall Prevention Net',
      community: 'Aparna Sarovar Zenith, Nallagandla',
      spec: '180kg Impact Load • Railing Gap Lock',
      image: '/images/invisible-grill-toddler.webp'
    },
    {
      id: 9,
      category: 'bird-control',
      title: 'High-Rise Balcony Pigeon Protection Netting',
      community: 'Ramky One Galaxia, Gachibowli',
      spec: 'Garware Monofilament • Zero View Blockage',
      image: '/images/balcony-after-clean.webp'
    },
    {
      id: 10,
      category: 'bird-control',
      title: 'Balcony Utility Duct & AC Compressor Quarantine',
      community: 'Lanco Hills, Manikonda',
      spec: 'Garware Copolymer • YKK Zipper Hatches',
      image: '/images/balcony-duct-shaft.webp'
    },
    {
      id: 11,
      category: 'safety-nets',
      title: 'Balcony Railing Bottom Crawl Gap Seal',
      community: 'Incor One City, KPHB Kukatpally',
      spec: 'Multi-Point Steel Cable Lock',
      image: '/images/invisible-grill-toddler.webp'
    },
    {
      id: 12,
      category: 'invisible-grill',
      title: 'Corner Balcony High-Tensile Grills',
      community: 'Prestige Tranquil, Kokapet',
      spec: 'Extruded Aluminum Track • 10-Yr Rust Free',
      image: '/images/hero-balcony.webp'
    },
    {
      id: 13,
      category: 'safety-nets',
      title: 'Floor-to-Ceiling High-Rise Balcony Shield',
      community: 'My Home Mangala, Kondapur',
      spec: 'High-Tenacity Heat-Set Braided Nylon',
      image: '/images/invisible-grill-toddler.webp'
    },
    {
      id: 14,
      category: 'safety-nets',
      title: 'Balcony Pet & Dog Safety Netting',
      community: 'Salarpuria Sattva Magnolia, Gachibowli',
      spec: 'Claw-Proof & Chew-Proof Finish',
      image: '/images/balcony-pet-dog-safety.webp'
    },
    {
      id: 15,
      category: 'invisible-grill',
      title: 'Penthouse Panoramic Skyline Invisible Grills',
      community: 'Lodha Bellezza, KPHB Colony',
      spec: 'SS 316 Marine Grade • Quick-Cut Fire Safe',
      image: '/images/hero-balcony.webp'
    },
    {
      id: 16,
      category: 'bird-control',
      title: 'Double Balcony Pigeon Netting & Sanitization',
      community: 'My Home Tarkshya, Kokapet',
      spec: 'UV-Treated Copolymer Monofilament',
      image: '/images/balcony-pigeon-net.webp'
    },
    {
      id: 17,
      category: 'safety-nets',
      title: 'Full Balcony Fall Arrest Safety Netting',
      community: 'My Home Avatar, Puppalaguda',
      spec: '180kg Multi-Point Breaking Load • 5-Yr Warranty',
      image: '/images/hero-balcony.webp'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="pt-8 sm:pt-12 md:pt-14 pb-20 bg-canvas-light dark:bg-obsidian-canvas min-h-screen">
      <SEOHead
        title="Safety Nets & Invisible Grills Photo Gallery Hyderabad | MB"
        description="Explore real installation photos of balcony safety nets, pigeon nets, bird spikes, cricket nets & SS 316 invisible grills across Hyderabad high-rise societies."
        canonicalPath="/gallery"
        image="/images/hero-balcony.webp"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="w-20 h-14 mx-auto mb-4 flex items-center justify-center">
            <img
              loading="lazy"
              decoding="async"
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
            VERIFIED SITE INSTALLATIONS ACROSS HYDERABAD
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Safety Nets, Sports & Invisible Grills <span className="text-brand-600 dark:text-brand-400">Photo Portfolio</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            High-clarity photographs of genuine safety netting, pigeon spikes, rooftop cricket practice pitches, sports turf arenas, and SS 316 invisible grills installed across premium residential and sports properties in Hyderabad.
          </p>
        </div>

        {/* Filter Categories (Smooth horizontal scroll on mobile, centered on desktop) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar select-none">
          {categories.map(cat => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 min-h-[42px] px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-glow-azure scale-[1.02]'
                  : 'bg-white dark:bg-obsidian-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-brand-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid or Empty State */}
        {filteredItems.length === 0 ? (
          <EmptyState
            title="No Photos Found"
            description="No installation photos found in this category. Reset the filter to view all 17 verified installations across Hyderabad."
            actionLabel="View All Photos"
            onAction={() => setActiveCategory('all')}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="group bg-white dark:bg-obsidian-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-card-hover transition-all flex flex-col justify-between select-none"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900 select-none">
                  <img
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                    onError={(e) => {
                      e.currentTarget.src = '/images/hero-balcony.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-brand-600 text-white inline-block mb-1">
                      {item.spec}
                    </span>
                    <h3 className="text-sm font-bold text-white drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    <span className="truncate font-medium">{item.community}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenQuoteSheet(null, item.community)}
                    className="text-brand-600 dark:text-brand-400 hover:text-brand-500 font-bold shrink-0 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Book Free Quote →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
