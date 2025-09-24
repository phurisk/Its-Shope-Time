import { Search, ShoppingCart, Clock } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="public/images/Sheop_time_logo2.png" alt="Logo" className="w-12" />
            <span className="text-xl font-bold text-primary-blue">
              It's Shopee Time
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary-blue hover:text-primary-orange transition-colors font-medium">
              Home
            </a>
            <a href="#deals" className="text-primary-blue hover:text-primary-orange transition-colors font-medium">
              Hot Deals
            </a>
            <a href="#categories" className="text-primary-blue hover:text-primary-orange transition-colors font-medium">
              Categories
            </a>
          </nav>

          {/* Search Bar */}
          <div className="flex items-center">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search for deals..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <Search className="w-6 h-6 text-primary-blue sm:hidden ml-4 cursor-pointer hover:text-primary-orange transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
}