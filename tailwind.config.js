/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Vibrant Royal
          600: '#2563EB', // Primary Royal Accent
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
          glow: '#60A5FA',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        safety: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // Verified Green & WhatsApp
          600: '#059669',
          700: '#047857',
          dark: '#34D399',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          400: '#FBBF24',
          500: '#F59E0B', // Sunburst Gold / Rating Stars
          600: '#D97706',
        },
        obsidian: {
          canvas: '#0B1120', // Rich Deep Navy Obsidian (Award-Winning Depth)
          card: '#0F172A',   // Slate 900
          surface: '#1E293B',// Slate 800
          hover: '#26354D',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(59, 130, 246, 0.35)',
        },
        canvas: {
          light: '#F8FAFC',  // Crisp Pristine Canvas
          card: '#FFFFFF',   // Pure White Card
          muted: '#F1F5F9',  // Subtle Slate 100
          border: '#E2E8F0', // Slate 200
          borderHover: '#BFDBFE',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'dock': '24px',
        'sheet': '32px',
        'card': '20px',
        'pill': '9999px',
        'btn': '14px',
      },
      boxShadow: {
        'dock': '0 20px 45px -10px rgba(37, 99, 235, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'sheet': '0 -20px 50px -12px rgba(11, 17, 32, 0.45)',
        'card-hover': '0 20px 35px -10px rgba(37, 99, 235, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.06)',
        'glow-royal': '0 0 30px rgba(37, 99, 235, 0.4)',
        'glow-emerald': '0 0 30px rgba(16, 185, 129, 0.4)',
        'glow-azure': '0 0 25px rgba(56, 189, 248, 0.35)',
      },
      letterSpacing: {
        eyebrow: '0.14em',
        tightest: '-0.035em',
      }
    },
  },
  plugins: [],
}
