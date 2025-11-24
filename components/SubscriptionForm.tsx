"use client";

import { useState, FormEvent } from 'react';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate submission (no backend yet)
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-24 px-6">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large decorative circle - top right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-orange-400/20 rounded-full blur-3xl" />

        {/* Medium decorative circle - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-rose-300/20 to-pink-400/20 rounded-full blur-3xl" />

        {/* Small accent circles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-teal-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-orange-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Decorative Top Border */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />
          <div className="mx-4 w-3 h-3 bg-orange-400 rounded-full" />
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
            style={{
              fontFamily: '"Bebas Neue", "Impact", sans-serif',
              textShadow: '2px 2px 0 rgba(251, 146, 60, 0.3)',
              lineHeight: '0.9'
            }}
          >
            <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              STAY IN THE
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
              LOOP
            </span>
          </h2>

          <p
            className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Merriweather", Georgia, serif' }}
          >
            Discover hidden temples, secret beaches, and authentic Thai experiences.
            <span className="block mt-2 text-orange-600 font-semibold">
              Weekly adventures delivered to your inbox.
            </span>
          </p>
        </div>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="relative group">
            {/* Decorative border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-rose-400 to-amber-400 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Input Container */}
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="flex-1 relative">
                  {/* Floating Label */}
                  <label
                    htmlFor="email"
                    className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                      isFocused || email
                        ? 'top-3 text-xs text-orange-600 font-bold'
                        : 'top-1/2 -translate-y-1/2 text-base text-gray-400'
                    }`}
                    style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}
                  >
                    YOUR EMAIL ADDRESS
                  </label>

                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                    className="w-full px-6 pt-9 pb-4 text-lg text-gray-900 bg-transparent border-0 outline-none"
                    style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                    placeholder=""
                  />

                  {/* Bottom border animation */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 via-rose-400 to-amber-400 transform origin-left transition-transform duration-300 ${
                    isFocused ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="group/btn relative md:w-auto px-8 py-6 md:py-0 bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 hover:from-orange-600 hover:via-rose-600 hover:to-amber-600 transition-all duration-300 overflow-hidden"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <span
                    className="relative text-white font-black text-xl tracking-wider flex items-center justify-center gap-3"
                    style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.1em' }}
                  >
                    {isSubmitted ? (
                      <>
                        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        SUBSCRIBED!
                      </>
                    ) : (
                      <>
                        JOIN NOW
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Privacy Note */}
          <p
            className="text-center mt-6 text-sm text-gray-600"
            style={{ fontFamily: '"Merriweather", Georgia, serif' }}
          >
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              No spam. Unsubscribe anytime. We respect your inbox.
            </span>
          </p>
        </form>

        {/* Decorative Bottom Border */}
        <div className="flex items-center justify-center mt-12">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />
          <div className="mx-4 w-3 h-3 bg-orange-400 rounded-full" />
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
}
