import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700">
            🔗 My Leads
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-blue-600 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-blue-600 transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/download" className="hover:text-blue-600 transition-colors">
                Download
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <ul className="flex flex-col gap-3 text-gray-700 font-medium pt-4">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/features" 
                  className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-works" 
                  className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  to="/download" 
                  className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Download
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}