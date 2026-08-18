import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  Instagram, 
  Facebook, 
  Video,
  Navigation,
  Sparkles
} from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    // Send formatted WhatsApp inquiry
    const waText = `*SHOE CASA STORE INQUIRY*\n\n*Name:* ${name}\n*Phone:* ${phone || 'Not provided'}\n*Subject:* ${subject || 'General Inquiry'}\n*Message:* ${message}\n\n_Sent via SHOE CASA Online Contact Form_`;
    const url = `https://wa.me/${STORE_INFO.whatsappInternational}?text=${encodeURIComponent(waText)}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setIsSubmitted(false);
      setName('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 600);
  };

  return (
    <section id="contact-section" className="w-full py-16 sm:py-24 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181720] border border-[#d4af37]/30 text-[#f5dfa2] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>WE ARE AT YOUR SERVICE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            CONTACT SHOE CASA
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Visit our boutique in Regent Mall, Faisalabad or get in touch for inquiries and orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Information & Google Maps Link */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Store Information Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#14131a] border border-[#262432] space-y-6">
              
              <div className="border-b border-[#21202a] pb-5">
                <div className="text-lg font-serif font-bold text-white">
                  {STORE_INFO.brandName}
                </div>
                <div className="text-xs text-[#d4af37] font-medium mt-0.5">
                  Regent Mall • Chen One Road, Faisalabad
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#201e28] text-[#d4af37] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#b5b1a3] tracking-wider">Address</div>
                  <div className="text-sm font-semibold text-white mt-0.5 leading-snug">
                    {STORE_INFO.address}
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5 pt-2">
                <div className="p-2.5 rounded-lg bg-[#201e28] text-[#25D366] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#b5b1a3] tracking-wider">Phone / WhatsApp</div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {STORE_INFO.phoneDisplay}
                  </div>
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsappInternational}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#25D366] hover:underline font-medium inline-block mt-0.5"
                  >
                    Chat directly on WhatsApp →
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5 pt-2">
                <div className="p-2.5 rounded-lg bg-[#201e28] text-[#d4af37] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#b5b1a3] tracking-wider">Opening Hours</div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    Monday – Sunday
                  </div>
                  <div className="text-xs text-neutral-400">
                    11:00 AM – 11:00 PM (Daily)
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#21202a]">
                <div className="text-xs uppercase font-bold text-[#b5b1a3] tracking-wider mb-3">
                  Follow Us Online
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={STORE_INFO.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#1a1922] hover:bg-[#d4af37] hover:text-[#0c0c0e] text-neutral-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={STORE_INFO.social.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#1a1922] hover:bg-[#d4af37] hover:text-[#0c0c0e] text-neutral-300 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={STORE_INFO.social.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#1a1922] hover:bg-[#d4af37] hover:text-[#0c0c0e] text-neutral-300 transition-colors"
                    aria-label="TikTok"
                  >
                    <Video className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Google Maps Visual Box */}
            <div className="p-6 rounded-2xl bg-[#14131a] border border-[#262432] space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#d4af37]" />
                  <span>Google Maps Location</span>
                </div>
                <span className="text-[11px] text-[#f5dfa2] bg-[#1d1b26] px-2 py-0.5 rounded border border-[#2e2d3d]">
                  Regent Mall
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Located conveniently on Chen One Road in People&apos;s Colony No. 1, Faisalabad.
              </p>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#1d1b26] hover:bg-[#d4af37] text-neutral-200 hover:text-[#0c0c0e] font-bold text-xs uppercase tracking-wider border border-[#312f3f] hover:border-[#d4af37] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact / Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#14131a] border border-[#262432] shadow-xl">
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-white">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Have a question about sizes, styles, or bulk wedding orders? Leave us a note and we will reply promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Usman Ali"
                      className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#292834] text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Phone / WhatsApp Input */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0300-1234567"
                      className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#292834] text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Size Availability / Wedding Order / Loafers"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#292834] text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-neutral-600"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe which shoes you are interested in, your preferred size, or any questions..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#292834] text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-neutral-600 resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] font-bold text-sm uppercase tracking-wider hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Opening WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message via WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 pt-1">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Connects immediately with the Faisalabad store team</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
