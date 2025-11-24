export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Thailand Explorer
            </h3>
            <p className="text-gray-400">
              Your ultimate guide to discovering the beauty and culture of Thailand.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#destinations" className="text-gray-400 hover:text-white transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#culture" className="text-gray-400 hover:text-white transition-colors">
                  Culture
                </a>
              </li>
              <li>
                <a href="#food" className="text-gray-400 hover:text-white transition-colors">
                  Food
                </a>
              </li>
              <li>
                <a href="#tips" className="text-gray-400 hover:text-white transition-colors">
                  Travel Tips
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Travel Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Visa Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Emergency Contacts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Language Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Thailand Explorer. Created for travelers, by travelers.
          </p>
        </div>
      </div>
    </footer>
  );
}
