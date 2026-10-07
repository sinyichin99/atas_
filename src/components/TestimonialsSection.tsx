import React, { useRef } from 'react';
import { BotanicalLeaf } from './BotanicalDecoration';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  rating: number;
  date: string;
  source: string;
  badge?: string;
}

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const googleReviewUrl =
    'https://www.google.com/search?q=atas+restaurant+melaka+review&sca_esv=b44634d0b9d75b78&rlz=1C1GCEA_enMY1080MY1080&sxsrf=APpeQnvKw3nvu1tktmq2VDQQnNT8gwzl3g%3A1791267311749&ei=75HEaqinLa6hseMPkKXB0AU&uact=5&oq=atas+restaurant+melaka+review&gs_lp=Egxnd3Mtd2l6LXNlcnAiHWF0YXMgcmVzdGF1cmFudCBtZWxha2EgcmV2aWV3MgYQABgWGB4yBhAAGBYYHjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMggQABiABBiiBDIFEAAY7wUyCBAAGIAEGKIEMgUQABjvBUiiHVCKFFiWHHABeACQAQCYAVmgAdYEqgEBOLgBA8gBAPgBAZgCCKAC1gTCAg0QIxjwBRjJAhiwAxgnwgIKEAAYRxjWBBiwA8ICDRAAGIAEGIoFGEMYsAPCAgoQIxjwBRjJAhgnwgIFEAAYgATCAgsQLhiABBjHARivAZgDAIgGAZAGCpIHATigB-kvsgcBN7gHzwTCBwMyLTjIByGACAE&sclient=gws-wiz-serp#lrd=0x31d1f14a3960c1f9:0xa9faf87c157058c5,1,,,,';

  const testimonials: Testimonial[] = [
    {
      quote:
        'The Nasi Lemak served with perfectly cooked fragrant coconut rice, rich sambal, and crispy fried chicken was juicy and tender! Riverside dining by the Malacca River is so peaceful and relaxing.',
      name: 'Christy Tiong',
      rating: 5,
      date: 'Google Review · 2 weeks ago',
      source: 'Google',
      badge: 'Local Guide · 42 reviews',
    },
    {
      quote:
        'The steak here is simply out of this world! Melt-in-your-mouth tenderness, perfectly flame-grilled ribeye with roasted potatoes. Easily beats out premium steakhouses in KL.',
      name: 'Kai Schmidt',
      rating: 5,
      date: 'Google Review · 1 month ago',
      source: 'Google',
      badge: 'Local Guide · 88 reviews',
    },
    {
      quote:
        'The atmosphere, the flavors, and the hospitality were all exceptional. The Lamb Rendang Nasi Lemak was tender and packed with rich spice. One of our best dining experiences in Melaka!',
      name: 'Tania Lim',
      rating: 5,
      date: 'Google Review · 3 weeks ago',
      source: 'Google',
      badge: 'Local Guide · 15 reviews',
    },
    {
      quote:
        'Fancy yet warm heritage decor. Indoor garden courtyard seating with the river view at sunset is breathtaking. Generous portions, beautifully plated, and handcrafted iced brews are top-tier.',
      name: 'Amanda Tan',
      rating: 5,
      date: 'Google Review · 2 months ago',
      source: 'Google',
      badge: 'Verified Diner · 6 reviews',
    },
    {
      quote:
        'From the moment we arrived at 1825 Gallery Hotel, the staff treated us like royalty. Every dish was full of flavor and the riverside table ambiance at night was magical.',
      name: 'Marcus Lee',
      rating: 5,
      date: 'Google Review · Recent',
      source: 'Google',
      badge: 'Local Guide · 31 reviews',
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="relative bg-[#F5EFE6] text-[#153226] py-20 sm:py-28 overflow-hidden">
      {/* Botanical Foliage in bottom left */}
      <div className="absolute bottom-0 left-0 pointer-events-none">
        <BotanicalLeaf position="bottom-left" className="opacity-90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#787265] uppercase">
                Reviews
              </span>
              {/* Google Verified Rating Pill */}
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white border border-[#dfd4c4] px-2.5 py-0.5 rounded-full text-[11px] font-medium text-stone-700 hover:border-[#4285F4] transition-colors shadow-xs"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.43 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.57 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                  />
                </svg>
                <span>Google Reviews 4.8 ★</span>
              </a>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl font-medium text-[#153226] mt-3 leading-[1.15]">
              Dining Stories From <br />
              Our Guests.
            </h2>
          </div>

          {/* Navigation Controls & Direct Google Link */}
          <div className="flex items-center gap-3 mt-6 sm:mt-0">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#d88f4c] hover:text-[#b8702b] uppercase transition-colors px-3 py-2 border border-[#d88f4c]/40 hover:border-[#d88f4c] rounded-xs bg-white/50"
            >
              <span>See All Google Reviews</span>
              <ExternalLink size={13} />
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="cursor-pointer p-2.5 rounded-full border border-[#cfc3b0] hover:bg-[#153226] hover:text-white hover:border-[#153226] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="cursor-pointer p-2.5 rounded-full border border-[#cfc3b0] hover:bg-[#153226] hover:text-white hover:border-[#153226] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Selected Element: Testimonials Horizontal Carousel & Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="bg-white rounded-none p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 border border-[#e5dcd0] min-w-[290px] sm:min-w-[330px] md:min-w-[350px] max-w-[350px] shrink-0 snap-start relative group"
            >
              {/* Google Verified badge at top of card */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#f4ede4] text-[11px] text-stone-500 font-light">
                <span className="flex items-center gap-1 font-medium text-[#4285F4]">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.43 7.34 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.57 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                    />
                  </svg>
                  <span>Google Review</span>
                </span>
                <span>{item.date.replace('Google Review · ', '')}</span>
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm text-[#474e44] leading-relaxed font-light text-center">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Rating Stars & Author */}
              <div className="mt-8 pt-6 border-t border-[#f0e8de] flex flex-col items-center">
                {/* 5 Stars in Ochre/Gold */}
                <div className="flex items-center gap-1 text-[#ea8037] mb-2.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#ea8037" strokeWidth={0} />
                  ))}
                </div>

                {/* Name */}
                <h4 className="font-serif-display text-base font-medium text-[#153226]">
                  {item.name}
                </h4>

                {/* Local Guide / Verified Badge */}
                {item.badge && (
                  <span className="text-[11px] text-[#ea8037] font-medium tracking-wide mt-0.5">
                    {item.badge}
                  </span>
                )}

                {/* Link to Google Review */}
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[11px] text-stone-500 hover:text-[#4285F4] flex items-center gap-1 transition-colors"
                >
                  <span>Verified 5★ Review</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

