import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

/**
 * Reusable Copy to Clipboard Button
 * Copies text using navigator.clipboard.writeText() and displays a "Copied!" state for 2 seconds.
 */
export default function CopyButton({ textToCopy, label = "Copy to clipboard", className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied to clipboard!" : label}
      title={copied ? "Copied!" : label}
      className={`relative inline-flex items-center justify-center p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 active:scale-90 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${className}`}
    >
      {copied ? (
        <span className="flex items-center gap-1 text-emerald-400 font-bold text-[10px]">
          <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
          <span>Copied!</span>
        </span>
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}
