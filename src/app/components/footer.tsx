import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 flex flex-col gap-20 mt-auto">
      {/* Main Content */}
      <div className="container flex flex-col gap-8 md:flex-row items-start justify-between w-full max-w-6xl mx-auto px-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:items-center">
          <h1 className="text-center md:text-left text-3xl md:text-5xl font-semibold text-gray-900">
            <div>Great homes in </div>
            <div>
              <span className="text-orange-500">Great societies.</span>
            </div>
          </h1>
          <div className="flex justify-start mt-4 space-x-5 items-center justify-center md:items-left md:justify-start">
            <a href="https://www.instagram.com/truva.in/">
              <Image
                src="/assets/InstagramLogo.svg"
                alt="Instagram"
                width={36}
                height={36}
              />
            </a>
            <a href="https://www.facebook.com/people/Truva/61562435537135/">
              <Image
                src="/assets/FacebookLogo.svg"
                alt="Facebook"
                width={36}
                height={36}
              />
            </a>
            <a href="https://in.linkedin.com/company/truvahomes">
              <Image
                src="/assets/LinkedinLogo.svg"
                alt="LinkedIn"
                width={36}
                height={36}
              />
            </a>
            <a href="https://www.youtube.com/@TruvaHomes">
              <Image
                src="/assets/YoutubeLogo.svg"
                alt="YouTube"
                width={36}
                height={36}
              />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <nav className="space-y-2">
            <div>
              <Link
                href="/about"
                className="hover:text-orange-500 text-sm md:text-lg"
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                href="/#live-listings"
                className="hover:text-orange-500 text-sm md:text-lg"
              >
                Browse Homes
              </Link>
            </div>
            <div>
              <Link
                href="/sell"
                className="hover:text-orange-500 text-sm md:text-lg"
              >
                Sell your house
              </Link>
            </div>
            <div>
              <Link
                href="/about#contact-us"
                className="hover:text-orange-500 text-sm md:text-lg"
              >
                Contact us
              </Link>
            </div>
            <div>
              <Link
                href="/about#careers"
                className="hover:text-orange-500 text-sm md:text-lg"
              >
                Careers
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full flex flex-col items-center space-y-0 md:space-y-2 overflow-hidden">
        <p className="text-xs md:text-sm text-black-600 text-center">
          WITH LOVE, FROM BEAUTIFUL POWAI
        </p>

        <div className="w-full relative h-[20vh] md:h-[40vh] lg:h-[50vh]">
          <Image
            src="/assets/Truvalogo_Footer.svg"
            layout="fill"
            objectFit="contain"
            alt="Footer Logo"
            className="w-full h-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
