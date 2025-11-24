export default function QuickFacts() {
  const facts = [
    { value: "69M+", label: "Population" },
    { value: "40K+", label: "Buddhist Temples" },
    { value: "1,430", label: "Islands" },
    { value: "Thai", label: "Official Language" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-[var(--font-playfair)]">
          Quick Facts About Thailand
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {fact.value}
              </div>
              <div className="text-lg text-white/90 font-medium">
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
