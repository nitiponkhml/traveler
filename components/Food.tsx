const NoodlesIcon = () => (
  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-2.239-8-5V8m8 13c4.418 0 8-2.239 8-5V8m-8 13V8m-8 0c0-2.761 3.582-5 8-5s8 2.239 8 5M4 8v2m16-2v2M6 6v2m4-2v2m4-2v2m4-2v2" />
  </svg>
);

const CurryIcon = () => (
  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9v4c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4v-4c0-4.97-4.03-9-9-9zm0 0V1M8 12h8M6 15h12" />
  </svg>
);

const SoupIcon = () => (
  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M5 12c0-3.866 3.134-7 7-7s7 3.134 7 7m-14 0v5c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-5M8 5C8 3.343 9.343 2 11 2M16 5c0-1.657-1.343-3-3-3" />
  </svg>
);

const PotIcon = () => (
  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M5 10c0-1.657 1.343-3 3-3h8c1.657 0 3 1.343 3 3m-14 0v7c0 1.657 1.343 3 3 3h8c1.657 0 3-1.343 3-3v-7M1 10h2m18 0h2M12 3v4" />
  </svg>
);

const SaladIcon = () => (
  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-5.523 0-10-3.358-10-7.5S6.477 6 12 6s10 3.358 10 7.5S17.523 21 12 21zm0-15C8.134 6 5 8.686 5 12m7-6c3.866 0 7 2.686 7 6M9 10l3 3m3-3l-3 3" />
  </svg>
);

const DessertIcon = () => (
  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-7-6c0-3.866 3.134-7 7-7s7 3.134 7 7m-14 0h14M8 8c0-2.21 1.79-4 4-4s4 1.79 4 4" />
  </svg>
);

export default function Food() {
  const foods = [
    {
      icon: NoodlesIcon,
      name: "Pad Thai",
      description: "Stir-fried rice noodles with eggs, tofu, tamarind, and peanuts",
    },
    {
      icon: CurryIcon,
      name: "Green Curry",
      description: "Spicy coconut curry with herbs, vegetables, and your choice of protein",
    },
    {
      icon: SoupIcon,
      name: "Tom Yum",
      description: "Hot and sour soup with lemongrass, lime, and chili",
    },
    {
      icon: PotIcon,
      name: "Massaman Curry",
      description: "Rich, mild curry with peanuts, potatoes, and aromatic spices",
    },
    {
      icon: SaladIcon,
      name: "Som Tam",
      description: "Spicy green papaya salad with peanuts and dried shrimp",
    },
    {
      icon: DessertIcon,
      name: "Mango Sticky Rice",
      description: "Sweet sticky rice with fresh mango and coconut cream",
    },
  ];

  return (
    <section id="food" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[var(--font-playfair)]">
            Thai Cuisine
          </h2>
          <p className="text-xl text-gray-600">
            A perfect balance of sweet, sour, salty, and spicy flavors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food, index) => {
            const IconComponent = food.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-orange-100"
              >
                <div className="text-gray-900 mb-4">
                  <IconComponent />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {food.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {food.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
