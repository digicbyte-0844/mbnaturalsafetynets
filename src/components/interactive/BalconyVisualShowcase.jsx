import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  CheckCircle2, 
  Layers,
  Info
} from 'lucide-react';
import Badge from '../ui/Badge';

export default function BalconyVisualShowcase({ onOpenQuoteSheet }) {
  const showcaseItems = [
    {
      id: 'invisible-grill',
      serviceId: 'balcony-invisible-grill',
      title: 'SS 316 Marine Balcony Invisible Grills',
      subtitle: 'Luxury High-Rise Penthouse Specification',
      description: 'Vertical 316 marine stainless steel cables spaced at 2 inches with DuPont Teflon coating. Provides 400kg+ breaking load while maintaining a 100% unblocked skyline view.',
      image: '/images/hero-balcony.jpg',
      price: '₹120 – ₹165 / sq.ft',
      turnaround: '4 – 6 Hours',
      badge: '400kg+ Tensile Certified',
      highlights: ['0% View Blockage', 'SS 316 Marine Grade', 'Fire Evacuation Cuttable', 'Zero Rust Forever'],
      hotspots: [
        { top: '35%', left: '28%', title: 'SS 316 Marine Cables', desc: 'DuPont Teflon-sheathed vertical wire cables spaced at 2 inches.' },
        { top: '78%', left: '60%', title: 'Anodized Aluminum Base Track', desc: 'Heavy extruded track fastened with Hilti anchor bolts.' },
        { top: '22%', left: '72%', title: '100% Panoramic View', desc: 'Zero cage feeling with full natural sunlight and cross-breeze.' }
      ]
    },
    {
      id: 'pigeon-net',
      serviceId: 'balcony-pigeon-net',
      title: 'Ultra-Clear Balcony Pigeon Netting',
      subtitle: '100% Invisible from 10ft Distance',
      description: 'High-density UV copolymer monofilament netting tailored tightly from balcony railing to ceiling slab. Eliminates pigeons, droppings, and bird mites permanently.',
      image: '/images/balcony-pigeon-net.jpg',
      price: '₹18 – ₹26 / sq.ft',
      turnaround: '2 – 3 Hours',
      badge: '100% Pigeon Proof • 5-Yr Warranty',
      highlights: ['98% Optical Transparency', 'UV-Stabilized Monomers', 'Zero Sag Rigging', 'Humane & Safe'],
      hotspots: [
        { top: '25%', left: '45%', title: 'Invisible Monofilament Grid', desc: 'Virgin UV-treated copolymer twine, invisible from 10ft distance.' },
        { top: '82%', left: '30%', title: 'SS 316 Eyelet Anchors', desc: 'Drilled into concrete with zero wall cracking or tile damage.' },
        { top: '50%', left: '80%', title: 'High-Tension Perimeter Wire', desc: 'Stainless steel boundary rope tensioned with turnbuckles.' }
      ]
    },
    {
      id: 'child-safety',
      serviceId: 'balcony-child-safety-net',
      title: 'Child & Toddler Balcony Fall Safety Net',
      subtitle: '180kg+ Certified Impact Capacity',
      description: 'Heavy-duty braided nylon twines engineered to protect young toddlers and children from accidental trips or low-railing climbing hazards in high-rises.',
      image: '/images/invisible-grill-toddler.jpg',
      price: '₹20 – ₹28 / sq.ft',
      turnaround: '2 – 4 Hours',
      badge: '180kg+ Child Impact Certified',
      highlights: ['Zero Crawl Bottom Seal', 'Smooth Anti-Abrasion', 'Multi-Point Anchor Lock', 'High-Rise Approved'],
      hotspots: [
        { top: '65%', left: '35%', title: 'Toddler Play Safe Zone', desc: 'Children play safely near balcony edge with zero vertigo or fear.' },
        { top: '88%', left: '55%', title: 'Railing Bottom Crawl Lock', desc: 'Seals the gap between balcony floor and railing where toddlers could slip.' },
        { top: '30%', left: '70%', title: 'Reinforced Knot Weave', desc: 'Heat-set diamond mesh engineered for 180kg+ sudden impact.' }
      ]
    },
    {
      id: 'duct-shaft',
      serviceId: 'balcony-duct-shaft-net',
      title: 'Balcony Utility Duct & AC Area Netting',
      subtitle: 'Total Pigeon Quarantine & Service Hatches',
      description: 'Encloses building utility shafts and balcony AC compressor ledges with heavy-duty bird netting fitted with industrial YKK zipper ports for maintenance technicians.',
      image: '/images/balcony-duct-shaft.jpg',
      price: '₹16 – ₹24 / sq.ft',
      turnaround: '1 – 3 Days',
      badge: 'Sanitization & Zipper Port Included',
      highlights: ['AC Technician Zipper Hatches', 'Deep Chemical Disinfection', 'High-Altitude Rope Rigging', '5-Year Guarantee'],
      hotspots: [
        { top: '40%', left: '50%', title: 'High-Rise Utility Enclosure', desc: 'Full vertical shaft coverage preventing pigeon nesting on AC units.' },
        { top: '70%', left: '35%', title: 'YKK Industrial Zipper Port', desc: 'Allows HVAC technicians easy access to service air conditioners.' }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const currentItem = showcaseItems[currentIndex];

  const handleNext = () => {
    setActiveHotspot(null);
    setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  const handlePrev = () => {
    setActiveHotspot(null);
    setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const selectItem = (index) => {
    setActiveHotspot(null);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-obsidian-card border-y border-slate-200/80 dark:border-white/5 relative overflow-hidden">
      
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-safety-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <Badge variant="azure" size="sm" className="mb-3">
            INTERACTIVE BALCONY SHOWCASE • TAP TO EXPLORE
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Explore Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-sky-500 to-safety-500">Balcony Solutions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Tap between balcony types below to inspect real installations in Hyderabad, explore live engineering hotspots, and check verified specifications.
          </p>
        </div>

        {/* Changeable Category Switcher Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {showcaseItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => selectItem(idx)}
              className={`shrink-0 min-h-[44px] px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                currentIndex === idx
                  ? 'bg-gradient-to-r from-brand-600 to-safety-600 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-canvas-muted dark:bg-obsidian-surface text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-brand-500'
              }`}
            >
              <span>{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
              {currentIndex === idx && (
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping inline-block" />
              )}
            </button>
          ))}
        </div>

        {/* Main Interactive Showcase Stage */}
        <div className="bg-canvas-muted dark:bg-obsidian-surface rounded-3xl p-4 sm:p-8 border border-slate-200 dark:border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Stage with Hotspot Pins (7 cols) */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 shadow-2xl group select-none">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                key={currentItem.id}
                className="w-full h-full object-cover object-center animate-fade-in group-hover:scale-102 transition-transform duration-500"
              />

              {/* Scrim Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top Specification Badges */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                <span className="px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold shadow-md">
                  {currentItem.price}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-500/90 text-white text-xs font-bold flex items-center gap-1 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{currentItem.badge}</span>
                </span>
              </div>

              {/* Interactive Hotspot Pins */}
              {currentItem.hotspots.map((spot, sIdx) => {
                const isActive = activeHotspot === sIdx;

                return (
                  <div
                    key={sIdx}
                    style={{ top: spot.top, left: spot.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveHotspot(isActive ? null : sIdx)}
                      aria-label={`View detail: ${spot.title}`}
                      className="relative w-8 h-8 rounded-full bg-white text-brand-600 shadow-xl flex items-center justify-center border-2 border-brand-500 hover:scale-110 active:scale-95 transition-all cursor-pointer group/pin"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-600 animate-pulse" />
                      <span className="absolute inset-0 rounded-full bg-brand-400 opacity-60 animate-ping pointer-events-none" />
                    </button>

                    {/* Hotspot Tooltip Card */}
                    {isActive && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-56 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/20 text-white text-left shadow-2xl z-30 animate-fade-in pointer-events-auto">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-400 block mb-0.5">
                          {spot.title}
                        </span>
                        <p className="text-[11px] text-slate-300 leading-tight">
                          {spot.desc}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Arrow Slide Navigation Buttons */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Balcony Solution"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all active:scale-90 cursor-pointer shadow-lg z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Balcony Solution"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all active:scale-90 cursor-pointer shadow-lg z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Helper Hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-white/80 pointer-events-none">
                Tap glowing pulse pins to inspect specifications
              </div>
            </div>

            {/* Information & Action Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-eyebrow text-emerald-600 dark:text-emerald-400 block mb-1">
                  {currentItem.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
                  {currentItem.description}
                </p>

                {/* Key Specification Checklist */}
                <div className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-200 dark:border-white/10 pt-4">
                  {currentItem.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Turnaround & Warranty Row */}
                <div className="mt-5 p-3.5 rounded-2xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold">Turnaround Time</span>
                      <span className="font-bold text-slate-900 dark:text-white">{currentItem.turnaround}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold">Replacement Warranty</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">5-Year Stamped</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenQuoteSheet(currentItem.serviceId)}
                  className="w-full min-h-[48px] py-3.5 px-4 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-safety-500 hover:from-brand-500 hover:to-safety-400 text-white font-extrabold text-sm shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span>Book Free Inspection for This Balcony</span>
                </button>
              </div>

            </div>

          </div>

          {/* Interactive Thumbnails Bar (Tap to change) */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-3 text-center sm:text-left">
              Select Balcony Solution to Change View:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {showcaseItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => selectItem(idx)}
                  className={`p-2 rounded-2xl text-left border transition-all cursor-pointer flex items-center gap-2.5 ${
                    currentIndex === idx
                      ? 'bg-white dark:bg-obsidian-card border-brand-500 shadow-md ring-2 ring-brand-500/20'
                      : 'bg-white/60 dark:bg-obsidian-card/60 border-slate-200 dark:border-white/5 opacity-70 hover:opacity-100 hover:border-slate-300'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 rounded-xl object-cover shrink-0"
                  />
                  <div className="truncate">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
                      {item.title.split(' ')[0]} {item.title.split(' ')[1]}
                    </span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                      {item.price.split(' ')[0]}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
