import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import a1 from "../assets/1.png";
import a2 from "../assets/2.png"; // Logo
import a3 from "../assets/3.png"; // CTA Image
import a4 from "../assets/4.png"; // Audience logos
import a5 from "../assets/5.png"; // Trusted logos
import a6 from "../assets/6.png"; // Footer image

export default function Hero() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navItems = [
    "Blogs",
    "Events",
    "Podcasts",
    "Pricing",
    "Books",
    "Mentors",
    "History",
    "Careers",
    "FAQs",
  ];

  return (
    <>
      <div
        className="relative w-full min-h-screen bg-cover bg-center font-montserrat overflow-hidden"
        style={{ backgroundImage: `url(${a1})` }}
      >
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-90 z-0" />

        {/* Desktop Navbar */}
        <div className="relative z-10 w-full h-[100px] sm:flex hidden items-center justify-between px-8">
          {/* Logo */}
          <div className="w-[240px] h-[120px] flex items-center">
            <img src={a2} alt="Logo" className="h-full object-contain" />
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap gap-4 text-gray-200 text-base font-normal">
            {navItems.map((item) => (
              <li key={item} className="hover:text-blue-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Image/Button */}
          <div className="w-[240px] h-[50px] rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <img src={a3} alt="CTA" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="sm:hidden z-20 relative w-full h-[80px] px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="w-[140px] h-[60px] flex items-center">
            <img src={a2} alt="Logo" className="h-full object-contain" />
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white text-2xl"
          >
            <FiMenu />
          </button>
        </div>

        {/* Sidebar Menu (Mobile Only) */}
        {sidebarOpen && (
          <div className="fixed top-0 left-0 w-64 h-full overflow-y-auto bg-black z-50 flex flex-col px-6 py-6 space-y-6 transition-all duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <FiX />
            </button>

            {/* Centered Logo */}
            <div className="flex justify-center mb-4">
              <img src={a2} alt="Logo" className="h-[50px] object-contain mx-auto" />
            </div>

            {/* Navigation Links */}
            {navItems.map((item) => (
              <span
                key={item}
                className="text-white text-base text-center w-full py-2 hover:text-blue-400 cursor-pointer"
              >
                {item}
              </span>
            ))}

            {/* CTA Button */}
            <div className="w-[120px] h-[30px] mt-4 mx-auto rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-transform">
              <img src={a3} alt="CTA" className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-2 pt-[80px] pb-6 space-y-4">
          {/* Title */}
          <h1 className="uppercase text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#CE9D4B]">MITTAL</span> CREATE
          </h1>

          {/* Subtitle */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="uppercase text-xl md:text-2xl font-normal text-[#CE9D4B]">
              VISIONARY CEO'S
            </span>
            <span className="uppercase text-2xl font-bold">&</span>
            <span className="uppercase text-xl md:text-2xl font-normal text-[#CE9D4B]">
              INDUSTRY LEADING ENTERPRISES
            </span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base leading-normal max-w-3xl px-2">
            I BUILD ICONIC PERSONAL BRANDS & REDEFINE CORPORATE IDENTITIES
            <br />
            <span className="text-white">
              Blending Soul & Strategy to Shape Legacy, Influence, and Impact
            </span>
          </p>

          {/* Audience Reach */}
          <div className="text-[#CE9D4B] text-sm md:text-base uppercase tracking-wide mt-6">
  My Work has reached audiences at
</div>


          <div className="w-11/12 md:w-4/5 -mt-4">
  <img src={a4} alt="Audience Logos" className="w-full object-contain" />
</div>


          {/* Trusted By */}
          <div className="text-[#CE9D4B] text-base font-normal uppercase mt-4">
            Trusted By
          </div>

          {/* Description List */}
          <p className="px-2 text-xs md:text-sm font-normal leading-relaxed max-w-5xl uppercase text-white whitespace-normal lg:whitespace-nowrap text-center lg:ml-[-200px]">
  Industry Icons | Conscious Companies | Soulful Celebrities | Internet Influencers | Passionate Professionals |
  Solopreneurs | Industrialists | Legacy-Driven Leaders
</p>



          {/* Trusted Logos */}
          <div className="w-full px-4">
            <img src={a5} alt="Trusted Logos" className="w-full object-contain" />
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <div className="w-full bg-white">
        <img
          src={a6}
          alt="Footer Decorative"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
}
