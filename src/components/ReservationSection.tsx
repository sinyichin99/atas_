import React, { useState } from 'react';
import { BotanicalLeaf } from './BotanicalDecoration';
import { Calendar, Clock, CheckCircle2, X } from 'lucide-react';

interface ReservationSectionProps {
  selectedTable?: string | null;
  onClearTable?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  selectedTable,
  onClearTable,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    babyChair: false,
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }
    if (!formData.date) {
      setErrorMsg('Please select a dining date.');
      return;
    }
    if (!formData.time) {
      setErrorMsg('Please select a dining time.');
      return;
    }

    const ref = `ATAS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setBookingConfirmed(true);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      babyChair: false,
    });
    onClearTable?.();
  };

  return (
    <section id="reservation" className="relative bg-[#F5EFE6] text-[#153226] py-20 sm:py-28 overflow-hidden">
      {/* Decorative Botanical Leaf in top-right */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <BotanicalLeaf position="top-right" className="opacity-90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 pt-4">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#787265] uppercase">
              // Reserve your table
            </span>

            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-[#153226] mt-4 leading-[1.12]">
              Your Seat Awaits. <br />
              Reserve A Memorable <br />
              Dining Experience.
            </h2>

            <p className="mt-6 text-sm text-[#4e554b] leading-relaxed max-w-md font-light">
              Whether it&apos;s an intimate riverside dinner, a family gathering, or a corporate event,
              our team ensures every detail is prepared with the utmost care and elegance.
            </p>

            {/* Quick Contact Info */}
            <div className="mt-8 pt-8 border-t border-[#dfd4c4] space-y-2 text-xs text-[#5f665c]">
              <p>
                <strong className="text-[#153226] font-medium">Opening Hours:</strong> Mon - Sun: 7:30AM – 11PM
              </p>
              <p>
                <strong className="text-[#153226] font-medium">Direct Line:</strong> +60 12-609 3690
              </p>
              <p>
                <strong className="text-[#153226] font-medium">Address:</strong> 29, Jln. Bunga Raya, Kampung Jawa, 75100 Melaka
              </p>
            </div>
          </div>

          {/* Right Column: Dark Reservation Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#142e22] text-white p-8 sm:p-12 rounded-lg shadow-2xl border border-[#214736]">
              {/* Form Title */}
              <div className="text-center mb-8">
                <span className="font-cormorant italic text-sm text-[#d88f4c] tracking-widest uppercase">
                  Book your Table
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl font-normal text-white mt-1">
                  Make A Reservation
                </h3>
                {selectedTable && (
                  <div className="mt-3 inline-flex items-center gap-2 bg-[#1b3d2e] border border-[#55B5A6]/40 px-3 py-1 rounded text-xs text-[#55B5A6]">
                    <span>Preferred Table: <strong>{selectedTable}</strong></span>
                    <button
                      type="button"
                      onClick={onClearTable}
                      className="text-stone-400 hover:text-white"
                      title="Clear table selection"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>

              {errorMsg && (
                <div className="mb-6 p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs text-center rounded">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-normal text-stone-300 mb-2">
                      Booking Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      className="w-full bg-[#0d2218] border border-[#214534] focus:border-[#d88f4c] focus:outline-none px-4 py-3 text-sm text-white placeholder-stone-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-normal text-stone-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Phone Number"
                      className="w-full bg-[#0d2218] border border-[#214534] focus:border-[#d88f4c] focus:outline-none px-4 py-3 text-sm text-white placeholder-stone-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-normal text-stone-300 mb-2">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-[#0d2218] border border-[#214534] focus:border-[#d88f4c] focus:outline-none px-4 py-3 text-sm text-white placeholder-stone-500 transition-colors [color-scheme:dark]"
                        required
                      />
                      <Calendar
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-normal text-stone-300 mb-2">
                      Time
                    </label>
                    <div className="relative">
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-[#0d2218] border border-[#214534] focus:border-[#d88f4c] focus:outline-none px-4 py-3 text-sm text-white placeholder-stone-500 transition-colors [color-scheme:dark]"
                        required
                      />
                      <Clock
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Person of Number & Baby Chair */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div>
                    <label className="block text-xs font-normal text-stone-300 mb-2">
                      Person of Number
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-[#0d2218] border border-[#214534] focus:border-[#d88f4c] focus:outline-none px-4 py-3 text-sm text-white placeholder-stone-500 transition-colors [color-scheme:dark]"
                    >
                      <option value="">Person Of Number</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests (Table for Two)</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8">8 Guests (Large Banquet)</option>
                      <option value="10">10+ Guests (Event Party)</option>
                    </select>
                  </div>

                  <div className="sm:pt-6">
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="babyChair"
                        checked={formData.babyChair}
                        onChange={handleChange}
                        className="w-5 h-5 rounded-none accent-[#d88f4c] bg-[#0d2218] border-[#214534] cursor-pointer"
                      />
                      <span className="text-xs font-normal text-stone-200">
                        Baby Chair
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="cursor-pointer w-full bg-[#ea8037] hover:bg-[#d6722d] active:bg-[#c26424] text-neutral-900 font-bold text-xs uppercase tracking-[0.2em] py-4 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xs"
                  >
                    BOOK YOUR TABLE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {bookingConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#153226] text-white max-w-lg w-full p-8 rounded-lg shadow-2xl border border-[#26553e] text-center relative">
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-1"
            >
              <X size={20} />
            </button>
            <div className="w-16 h-16 bg-[#ea8037]/20 border border-[#ea8037] text-[#ea8037] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="font-serif-display text-2xl sm:text-3xl text-white">
              Reservation Confirmed!
            </h4>
            <p className="text-xs uppercase tracking-widest text-[#d88f4c] mt-1 font-semibold">
              Ref: {bookingRef}
            </p>
            <p className="text-stone-300 text-sm mt-4 font-light leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your table
              {selectedTable ? ` (${selectedTable})` : ''} has been reserved for{' '}
              <strong className="text-white">{formData.guests || '2'} guests</strong> on{' '}
              <strong className="text-white">{formData.date}</strong> at{' '}
              <strong className="text-white">{formData.time}</strong>.
            </p>
            {formData.babyChair && (
              <p className="text-xs text-[#55B5A6] mt-2">
                ✓ Baby chair requested and prepared.
              </p>
            )}
            <div className="mt-6 pt-6 border-t border-white/10 flex gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="w-full bg-[#ea8037] hover:bg-[#d6722d] text-neutral-900 font-bold text-xs uppercase tracking-wider py-3 rounded-xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
