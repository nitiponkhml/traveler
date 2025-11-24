const WaiIcon = () => (
  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-6-6h12M9 3l3 3 3-3" />
  </svg>
);

const TempleIcon = () => (
  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V3m0 0L8 7m4-4l4 4M3 12h18M5 17h14M7 21h10" />
  </svg>
);

const CrownIcon = () => (
  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 7l3 4 5-2 5 2 3-4-8-4zM4 15v4h16v-4M7 19v2M12 19v2M17 19v2" />
  </svg>
);

const FestivalIcon = () => (
  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18a9 9 0 019 9m-9-9a9 9 0 00-9 9m18 0a9 9 0 01-9 9m9-9H3m9 9a9 9 0 01-9-9M8 8l8 8M16 8l-8 8" />
  </svg>
);

export default function Culture() {
  const cultureItems = [
    {
      icon: WaiIcon,
      title: "Wai Greeting",
      description: "The traditional Thai greeting involves pressing palms together in a prayer-like gesture. It's a sign of respect and courtesy.",
    },
    {
      icon: TempleIcon,
      title: "Buddhist Temples",
      description: "Over 95% of Thais are Buddhist. Temples (wats) are sacred places where respect is essential - dress modestly and remove shoes.",
    },
    {
      icon: CrownIcon,
      title: "Royal Family",
      description: "The Thai royal family is highly revered. Show respect when the national anthem plays and never criticize the monarchy.",
    },
    {
      icon: FestivalIcon,
      title: "Festivals",
      description: "Experience Songkran (Water Festival), Loy Krathong (Lantern Festival), and many other vibrant celebrations throughout the year.",
    },
  ];

  return (
    <section id="culture" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Thai Culture & Traditions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultureItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-gray-900 mb-4">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
