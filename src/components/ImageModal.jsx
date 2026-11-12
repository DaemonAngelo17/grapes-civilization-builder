import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Compass, BookOpen } from 'lucide-react';

export default function ImageModal({ visual, optionText, onClose }) {
  const [zoomLevel, setZoomLevel] = React.useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!visual) return null;

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1));
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#17100b]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="parchment-card rounded-2xl max-w-3xl w-full border border-[#cfc1a8] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#f2e7d5] px-4 sm:px-6 py-3.5 border-b border-[#dfd4c0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-[#935923] text-white flex items-center justify-center font-cinzel text-xs font-bold">
              🔍
            </span>
            <div>
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#241a15] truncate max-w-sm sm:max-w-md">
                {visual.caption || 'Historical Artifact Inspection'}
              </h3>
              <p className="text-[11px] text-[#705c4d] font-sans-ui hidden sm:block">
                Archaeological & Historical Visual Explorer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleZoom}
              className="px-2.5 py-1 rounded-lg bg-[#efe5d5] hover:bg-[#e4d6c2] border border-[#cfbfa7] text-xs font-semibold text-[#443326] flex items-center gap-1 transition-colors cursor-pointer"
              title="Toggle Zoom (1x, 1.5x, 2x)"
            >
              {zoomLevel > 1 ? <ZoomOut size={13} /> : <ZoomIn size={13} />}
              <span>{zoomLevel}x</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-[#efe5d5] hover:bg-[#e4d6c2] text-[#443326] transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Image Canvas Container */}
        <div className="relative bg-[#1b1511] overflow-hidden max-h-[55vh] flex items-center justify-center cursor-zoom-in" onClick={toggleZoom}>
          <img
            src={visual.url}
            alt={visual.alt || optionText}
            className="w-full h-auto max-h-[55vh] object-contain transition-transform duration-300 select-none"
            style={{ transform: `scale(${zoomLevel})` }}
          />
          {zoomLevel > 1 && (
            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded font-sans-ui">
              Zoomed {zoomLevel}x — Click to reset
            </span>
          )}
        </div>

        {/* Context & Description Footer */}
        <div className="p-4 sm:p-6 bg-[#fbf7ee] space-y-2.5">
          <div className="flex items-start gap-2">
            <span className="px-2 py-0.5 rounded bg-[#935923] text-white font-cinzel text-[10px] font-bold shrink-0 mt-0.5">
              OPTION
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#241a15] leading-snug">
              {optionText}
            </p>
          </div>

          {visual.history && (
            <div className="pt-2 border-t border-[#dfd4c0] text-xs text-[#5e4b3c] font-serif leading-relaxed flex items-start gap-2 bg-[#f6eee2] p-3 rounded-lg border">
              <BookOpen size={16} className="text-[#935923] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-sans-ui text-[#483310] font-semibold mb-0.5 text-[11px] uppercase tracking-wide">
                  Historical & Archaeological Context:
                </strong>
                {visual.history}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

