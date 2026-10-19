import React from 'react';
import { AlertTriangle, RefreshCw, Phone, Home } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

/**
 * Production-grade React Error Boundary.
 * Catches unhandled JavaScript runtime errors in child component tree
 * and renders a polished, accessible fallback UI with recovery actions.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // Log error to console (or third-party error monitoring service in production)
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          aria-live="assertive"
          className="min-h-screen bg-canvas-light dark:bg-obsidian-canvas text-slate-900 dark:text-white flex items-center justify-center p-4 sm:p-6"
        >
          <div className="max-w-lg w-full bg-white dark:bg-obsidian-card border border-rose-500/20 dark:border-rose-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
            {/* Warning Icon */}
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto mb-5 border border-rose-500/20">
              <AlertTriangle className="w-8 h-8" />
            </div>

            {/* Error Heading */}
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-rose-500 block mb-2">
              APPLICATION NOTICE
            </span>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mb-3">
              Something went unexpected
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              We encountered a temporary interface issue while loading this page. You can reload the page or return to the homepage to continue exploring our safety netting services.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-glow-azure transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Application</span>
              </button>

              <button
                type="button"
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-obsidian-surface dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-200 dark:border-white/10 transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            </div>

            {/* Direct Helpline Fallback */}
            <div className="pt-5 border-t border-slate-100 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
              <span>Need immediate balcony safety assistance? Call our 24/7 Hyderabad helpline: </span>
              <a
                href={`tel:${brandConfig.phoneRaw}`}
                className="font-bold text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1 mt-1 sm:mt-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{brandConfig.phone}</span>
              </a>
            </div>

            {/* Developer Error Detail (in development only) */}
            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <details className="mt-6 text-left p-3 rounded-xl bg-slate-950 text-rose-400 font-mono text-[11px] overflow-auto max-h-48 border border-rose-500/30">
                <summary className="cursor-pointer font-bold text-rose-300 mb-2">
                  Technical Stack Trace (Dev Only)
                </summary>
                <p className="font-bold">{this.state.error.toString()}</p>
                <pre className="mt-2 text-slate-400 whitespace-pre-wrap">
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
