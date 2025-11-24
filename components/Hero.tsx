"use client";

export default function Hero() {
  const scrollToSubscription = () => {
    const subscriptionSection = document.getElementById('subscription');
    if (subscriptionSection) {
      subscriptionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-indigo-800/60 to-blue-900/70"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in">
          Discover the Magic of{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
            Thailand
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up">
          From pristine beaches to ancient temples, experience the Land of Smiles
        </p>
        <button
          onClick={scrollToSubscription}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-slide-up"
        >
          Start Your Journey
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center text-white animate-bounce-slow">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
