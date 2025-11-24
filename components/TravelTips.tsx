export default function TravelTips() {
  const tips = [
    {
      number: "01",
      title: "Best Time to Visit",
      description: "November to February offers cool, dry weather perfect for exploring. Avoid April-May (hot season) and June-October (rainy season) unless you enjoy fewer crowds.",
    },
    {
      number: "02",
      title: "Visa Requirements",
      description: "Many countries get 30-60 days visa-free entry. Check your country's specific requirements before traveling. Extensions are available for longer stays.",
    },
    {
      number: "03",
      title: "Currency & Money",
      description: "Thai Baht (THB) is the local currency. ATMs are widely available. Credit cards accepted in cities, but carry cash for markets and rural areas.",
    },
    {
      number: "04",
      title: "Transportation",
      description: "Tuk-tuks, taxis, BTS/MRT trains in Bangkok, and domestic flights are affordable. Always agree on taxi fares beforehand or use meter.",
    },
    {
      number: "05",
      title: "Stay Connected",
      description: "Buy a local SIM card at the airport for cheap data. Free WiFi available in most hotels, cafes, and restaurants.",
    },
    {
      number: "06",
      title: "Health & Safety",
      description: "Drink bottled water, use mosquito repellent, and get travel insurance. Thailand is generally safe, but watch for scams in tourist areas.",
    },
  ];

  return (
    <section id="tips" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Essential Travel Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                {tip.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
