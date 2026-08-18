import React, { useState } from 'react';
import { X, Ruler, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'men' | 'women'>('men');

  if (!isOpen) return null;

  const menSizes = [
    { eu: 39, uk: 6, us: 6.5, cm: 24.5, inches: '9.6"' },
    { eu: 40, uk: 6.5, us: 7.5, cm: 25.0, inches: '9.8"' },
    { eu: 41, uk: 7.5, us: 8.5, cm: 26.0, inches: '10.2"' },
    { eu: 42, uk: 8.5, us: 9.0, cm: 26.5, inches: '10.4"' },
    { eu: 43, uk: 9.5, us: 10.0, cm: 27.5, inches: '10.8"' },
    { eu: 44, uk: 10.5, us: 11.0, cm: 28.5, inches: '11.2"' },
    { eu: 45, uk: 11.5, us: 12.0, cm: 29.5, inches: '11.6"' },
  ];

  const womenSizes = [
    { eu: 36, uk: 3.5, us: 5.5, cm: 22.5, inches: '8.8"' },
    { eu: 37, uk: 4.5, us: 6.5, cm: 23.5, inches: '9.2"' },
    { eu: 38, uk: 5.0, us: 7.0, cm: 24.0, inches: '9.4"' },
    { eu: 39, uk: 6.0, us: 8.0, cm: 25.0, inches: '9.8"' },
    { eu: 40, uk: 6.5, us: 8.5, cm: 25.5, inches: '10.0"' },
    { eu: 41, uk: 7.5, us: 9.5, cm: 26.5, inches: '10.4"' },
  ];

  const consultationWaUrl = `https://wa.me/${STORE_INFO.whatsappInternational}?text=${encodeURIComponent(
    'Hello SHOE CASA Team, I need personalized assistance with selecting the right shoe size for my foot.'
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#121117] border border-[#2c2b38] rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#22212d] flex items-center justify-between bg-[#15141c]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#201e29] text-[#d4af37]">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                SHOE CASA Footwear Size &amp; Fit Guide
              </h3>
              <p className="text-xs text-neutral-400">
                Standard Pakistani &amp; European Shoe Sizing Standards
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-[#201f2b]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Tab Selector */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setTab('men')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                tab === 'men'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] shadow-md'
                  : 'bg-[#181720] text-neutral-400 hover:text-white border border-[#2b2a37]'
              }`}
            >
              Men&apos;s Footwear Size Chart
            </button>
            <button
              onClick={() => setTab('women')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                tab === 'women'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] shadow-md'
                  : 'bg-[#181720] text-neutral-400 hover:text-white border border-[#2b2a37]'
              }`}
            >
              Women&apos;s Footwear Size Chart
            </button>
          </div>

          {/* Sizing Table */}
          <div className="overflow-x-auto rounded-xl border border-[#272533] bg-[#16151f]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1e1d28] text-white uppercase text-[11px] font-bold border-b border-[#2d2b3c]">
                <tr>
                  <th className="py-3 px-4 text-[#f5dfa2]">EU / PK Size</th>
                  <th className="py-3 px-4">UK Size</th>
                  <th className="py-3 px-4">US Size</th>
                  <th className="py-3 px-4">Foot Length (CM)</th>
                  <th className="py-3 px-4">Foot Length (Inches)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#242330] text-neutral-300">
                {(tab === 'men' ? menSizes : womenSizes).map((row) => (
                  <tr key={row.eu} className="hover:bg-[#1f1e2a] transition-colors">
                    <td className="py-2.5 px-4 font-bold text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      {row.eu}
                    </td>
                    <td className="py-2.5 px-4">{row.uk}</td>
                    <td className="py-2.5 px-4">{row.us}</td>
                    <td className="py-2.5 px-4 font-mono">{row.cm} cm</td>
                    <td className="py-2.5 px-4 text-neutral-400">{row.inches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Measuring Instructions */}
          <div className="p-5 rounded-2xl bg-[#16151f] border border-[#272534] space-y-3">
            <h4 className="font-serif text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>How to Measure Your Foot at Home:</span>
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Place a piece of blank paper on the floor against a flat wall.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Stand on the paper with your heel lightly pressing against the wall.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Mark the longest part of your foot (usually the big toe) with a pencil.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Measure the distance in centimeters from the wall edge to the mark and cross-check with the table above.</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp Direct Size Consultation Action */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#171620] via-[#1f1e29] to-[#171620] border border-[#2e2c3c] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-serif font-bold text-white text-sm">
                Still unsure about your exact fit?
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Our Faisalabad showroom staff is ready to help you on WhatsApp with custom advice.
              </div>
            </div>

            <a
              href={consultationWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
