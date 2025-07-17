import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import a2 from "../../assets/2.png";   // logo
import a3 from "../../assets/3.png";    // CTA button image

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    "Blogs", "Events", "Podcasts", "Pricing", "Books",
    "Mentors", "History", "Careers", "FAQs",
  ];

  return (
    <div className="relative w-full h-[100px] sm:h-[100px] bg-black font-montserrat overflow-hidden">
      {/* Desktop Navbar */}
      <div className="relative z-10 w-full h-full sm:flex hidden items-center justify-between px-8">
        <div className="w-[240px] h-full flex items-center">
          <img src={a2} alt="Logo" className="h-full object-contain" />
        </div>

        <ul className="flex flex-wrap gap-4 text-gray-200 text-base font-normal">
          {navItems.map((item) => (
  <li key={item} className="hover:text-blue-400 cursor-pointer">
    {item === "Podcasts" ? (
      <Link to="/podcasts">{item}</Link>
    ) : item === "Blogs" ? (
      <Link to="/">{item}</Link>  // Assuming "Blogs" points to Home
    ) : (
      item
    )}
  </li>
))}

        </ul>

        <div className="w-[240px] h-[50px] rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-transform">
          <img src={a3} alt="CTA" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden z-20 relative w-full h-[80px] px-4 flex items-center justify-between">
        <div className="w-[140px] h-[60px] flex items-center">
          <img src={a2} alt="Logo" className="h-full object-contain" />
        </div>

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
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FiX />
          </button>

          <div className="flex justify-center mb-4">
            <img src={a2} alt="Logo" className="h-[50px] object-contain mx-auto" />
          </div>

          {navItems.map((item) =>
  item === "Podcasts" ? (
    <Link
      to="/podcasts"
      key={item}
      onClick={() => setSidebarOpen(false)}
      className="text-white text-base text-center w-full py-2 hover:text-blue-400 cursor-pointer"
    >
      {item}
    </Link>
  ) : item === "Blogs" ? (
    <Link
      to="/"
      key={item}
      onClick={() => setSidebarOpen(false)}
      className="text-white text-base text-center w-full py-2 hover:text-blue-400 cursor-pointer"
    >
      {item}
    </Link>
  ) : (
    <span
      key={item}
      className="text-white text-base text-center w-full py-2 cursor-pointer"
    >
      {item}
    </span>
  )
)}


          <div className="w-[120px] h-[30px] mt-4 mx-auto rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <img src={a3} alt="CTA" className="w-full h-full object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}
