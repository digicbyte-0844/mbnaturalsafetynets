import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage = "/images/balcony-before-mess.jpg",
  afterImage = "/images/balcony-after-clean.jpg",
  beforeLabel = "Pigeon Infested Balcony",
  afterLabel = "Sanitized with Invisible Protection",
  className = ""
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef(null);

  // Sine-wave idle auto-sweep until user touches
  useEffect(() => {
    if (isInteracting) return;

    let startTime = performance.now();
    let animationFrameId;

    const animateSweep = (time) => {
      const elapsed = time - startTime;
      // Oscillate smoothly between 25% and 75%
      const sweep = 50 + 25 * Math.sin((elapsed / 4000) * 2 * Math.PI);
      setSliderPosition(sweep);
      animationFrameId = requestAnimationFrame(animateSweep);
    };

    animationFrameId = requestAnimationFrame(animateSweep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInteracting]);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;

    // 5% edge boundary lock
    percentage = Math.max(5, Math.min(95, percentage));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    setIsInteracting(true);
    updatePosition(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isInteracting && e.buttons !== 1) return;
    updatePosition(e.clientX);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Visual Container */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setIsInteracting(true);
          updatePosition(e.clientX);
        }}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          setIsInteracting(true);
          updatePosition(e.touches[0].clientX);
        }}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-slate-200 dark:border-white/10 group bg-slate-900"
      >
        {/* AFTER Image (Full container width) */}
        <img
          src={afterImage}
          alt={afterLabel}
          width="800"
          height="500"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* AFTER Label Badge */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-xl bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5 shadow-lg pointer-events-none">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{afterLabel}</span>
        </div>

        {/* BEFORE Image (Clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            width="800"
            height="500"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none filter brightness-90"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
              height: '100%'
            }}
          />
          {/* Overlay Darkening on Before side for stark contrast */}
          <div className="absolute inset-0 bg-amber-950/20" />
        </div>

        {/* BEFORE Label Badge */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-red-500/30 text-red-300 text-xs font-bold flex items-center gap-1.5 shadow-lg pointer-events-none">
          <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          <span>{beforeLabel}</span>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none transform -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Center Handle Capsule */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-2xl flex items-center justify-center border-2 border-brand-500 ring-4 ring-black/20 group-hover:scale-110 transition-transform">
            <div className="flex items-center gap-0.5 text-brand-600 font-extrabold text-xs">
              <span>◀</span>
              <span>▶</span>
            </div>
          </div>
        </div>

        {/* Helper Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-white/80 pointer-events-none">
          {isInteracting ? "Drag left or right to inspect" : "↔ Drag or tap buttons below to compare"}
        </div>
      </div>

      {/* One-Tap Segmented Switch for Mobile & Quick Toggling */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => {
            setIsInteracting(true);
            setSliderPosition(85); // Show mostly before
          }}
          className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            sliderPosition > 50
              ? 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30 shadow-sm'
              : 'bg-canvas-muted dark:bg-obsidian-surface text-slate-600 dark:text-slate-400 border border-transparent'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>View Unprotected Mess</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setIsInteracting(true);
            setSliderPosition(15); // Show mostly after
          }}
          className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            sliderPosition <= 50
              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-sm'
              : 'bg-canvas-muted dark:bg-obsidian-surface text-slate-600 dark:text-slate-400 border border-transparent'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>View Invisible Clean Result</span>
        </button>
      </div>
    </div>
  );
}
