export default function Destinations() {
  const destinations = [
    {
      name: "Bangkok",
      description: "The vibrant capital city filled with ornate temples, bustling markets, and amazing street food. Visit the Grand Palace, Wat Pho, and explore the floating markets.",
      gradient: "from-purple-500 to-indigo-600",
      tags: ["Culture", "Shopping", "Nightlife"],
    },
    {
      name: "Phuket",
      description: "Thailand's largest island famous for stunning beaches, crystal-clear waters, and vibrant nightlife. Perfect for beach lovers and water sports enthusiasts.",
      gradient: "from-pink-500 to-rose-600",
      tags: ["Beaches", "Diving", "Resorts"],
    },
    {
      name: "Chiang Mai",
      description: "Northern Thailand's cultural hub surrounded by mountains. Known for ancient temples, night markets, and elephant sanctuaries.",
      gradient: "from-blue-500 to-cyan-600",
      tags: ["Mountains", "Temples", "Nature"],
    },
    {
      name: "Krabi",
      description: "Stunning limestone cliffs, emerald waters, and pristine beaches. Home to the famous Railay Beach and Phi Phi Islands.",
      gradient: "from-emerald-500 to-teal-600",
      tags: ["Islands", "Rock Climbing", "Snorkeling"],
    },
    {
      name: "Ayutthaya",
      description: "Ancient capital with magnificent ruins and historical temples. A UNESCO World Heritage Site showcasing Thailand's rich history.",
      gradient: "from-amber-500 to-orange-600",
      tags: ["History", "UNESCO", "Ruins"],
    },
    {
      name: "Koh Samui",
      description: "Tropical paradise with palm-fringed beaches, luxury resorts, and the famous Big Buddha temple. Perfect for relaxation and romance.",
      gradient: "from-indigo-500 to-purple-700",
      tags: ["Luxury", "Wellness", "Beaches"],
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 font-[var(--font-playfair)]">
          Top Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${destination.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {destination.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
