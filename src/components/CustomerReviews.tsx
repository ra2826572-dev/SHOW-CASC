import React from 'react';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';
import { AUTHENTIC_REVIEWS } from '../data/storeInfo';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="customer-reviews-section" className="w-full py-16 sm:py-24 bg-[#0a0a0c] border-y border-[#18171f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181720] border border-[#d4af37]/30 text-[#f5dfa2] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>REAL EXPERIENCES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            CUSTOMER REVIEWS
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Genuine feedback from our valued Faisalabad boutique and online patrons.
          </p>
        </div>

        {/* 3 Authentic Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUTHENTIC_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#131218] border border-[#24232e] hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Rating stars & Quote mark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#d4af37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#d4af37]/30" />
                </div>

                {/* Exact Genuine Quote */}
                <blockquote className="font-serif italic text-lg sm:text-xl text-white leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author & Verification info */}
              <div className="pt-6 mt-6 border-t border-[#1e1d27] flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-neutral-200">
                    {review.author}
                  </div>
                  {review.productName && (
                    <div className="text-xs text-neutral-400 mt-0.5">
                      {review.productName}
                    </div>
                  )}
                </div>

                {review.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#f5dfa2] bg-[#1a1922] px-2.5 py-1 rounded-md border border-[#2b2a38]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
