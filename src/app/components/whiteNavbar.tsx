"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  return (
    <nav className="flex items-center text-black px-6 py-4 w-full bg-white m-auto text-sm">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <div className="hidden md:block">
          <Image
            src="/assets/blacklogo.svg"
            alt="Instagram"
            width={125}
            height={23}
          />
        </div>

        <div className="block md:hidden">
          <Image
            src="/assets/Logoblacksmall.svg"
            alt="Instagram"
            width={47}
            height={24}
          />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="flex ml-auto md:gap-8">
        <div className="block max-[494px]:hidden">
          <li>
            <a
              href="/buy"
              className={`px-4 py-2 transition ${
                activeButton === "buy" ? "bg-[#f5f4ed] backdrop-blur-md" : ""
              }`}
              onClick={() => handleButtonClick("buy")}
            >
              BUY A HOME
            </a>
          </li>
        </div>
        <div className="hidden max-[494px]:block">
          <li>
            <a
              href="/buy"
              className={`px-4 py-2 transition ${
                activeButton === "buy" ? "bg-[#f5f4ed] backdrop-blur-md" : ""
              }`}
              onClick={() => handleButtonClick("buy")}
            >
              BUY
            </a>
          </li>
        </div>
        <div className="block max-[494px]:hidden">
          <li>
            <a
              href="#sell"
              className={`px-4 py-2 transition ${
                activeButton === "sell" ? "bg-[#f5f4ed] backdrop-blur-md" : ""
              }`}
              onClick={() => handleButtonClick("sell")}
            >
              SELL YOUR HOUSE
            </a>
          </li>
        </div>
        <div className="hidden max-[494px]:block">
          <li>
            <a
              href="/sell"
              className={`px-4 py-2 transition ${
                activeButton === "sell" ? "bg-[#f5f4ed] backdrop-blur-md" : ""
              }`}
              onClick={() => handleButtonClick("sell")}
            >
              SELL
            </a>
          </li>
        </div>
        <div className="block max-[494px]:hidden">
          <li>
            <a
              href="/about"
              className={`px-4 py-2 transition ${
                activeButton === "about" ? "bg-[#f5f4ed] backdrop-blur-md" : ""
              }`}
              onClick={() => handleButtonClick("about")}
            >
              ABOUT US
            </a>
          </li>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="hidden max-[494px]:block relative">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <ul
            className={`absolute top-12 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50 overflow-hidden transition-transform duration-5000 ease-in-out transform ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            <li>
              <a
                href="/buy"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                BUY A HOME
              </a>
            </li>
            <li>
              <a
                href="/sell"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                SELL YOUR HOUSE
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                ABOUT US
              </a>
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
