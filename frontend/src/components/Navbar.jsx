import React, { useState } from "react";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r rounded from-zinc-500 via-zinc-500 to-zinc-200 shadow-md sticky top-0 z-50 lg:rounded-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src="https://eurocabs.uk/static/assets/images/eurocabs-logo.png" // Replace with your logo path
              alt="Eurocabs"
            />
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#primary" className="text-gray-800 hover:text-yellow-600">
              Primary
            </a>
            <a
              href="#secondary"
              className="text-gray-800 hover:text-yellow-600"
            >
              Secondary
            </a>
            <a href="#about" className="text-gray-800 hover:text-yellow-600">
              About
            </a>
            <a href="#contact" className="text-gray-800 hover:text-yellow-600">
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              title="Login"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
            />
            <Button
              title="Signup"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
            />

            <div className="flex space-x-2 items-center">
              <ModeToggle />
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-yellow-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#primary"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-yellow-600"
            >
              Primary
            </a>
            <a
              href="#secondary"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-yellow-600"
            >
              Secondary
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-yellow-600"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-yellow-600"
            >
              Contact
            </a>
          </div>
          <div className="px-4 py-3 border-t border-gray-200 flex flex-col items-start space-y-2">
            <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
