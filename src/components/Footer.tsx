import { ShoppingCart, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
            <img src="public/images/Sheop_time_logo2.png" alt="Logo" className="w-12 bg-white rounded-full" />
              <span className="text-xl font-bold">
                It's Shopee Time
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted source for the best Shopee deals, honest reviews, and trending products. 
              Making online shopping smarter, one deal at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.87 3.87 3.81 3.81 0 01-3.81-3.81 3.81 3.81 0 013.81-3.81c.21 0 .41.02.61.05V1.96c-.2-.02-.4-.02-.61-.02A5.87 5.87 0 004 7.81a5.87 5.87 0 005.94 5.94c3.77 0 5.24-3.18 5.24-5.24V7.5a6.07 6.07 0 003.41 1.23V6.69z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#deals" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Hot Deals
                </a>
              </li>
              <li>
                <a href="#categories" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 It's Shopee Time. All rights reserved. Made with ❤️ for smart shoppers.
          </p>
        </div>
      </div>
    </footer>
  );
}