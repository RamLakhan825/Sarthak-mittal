import a1 from "../assets/1.png";
import a2 from "../assets/2.png"; // Logo
import a3 from "../assets/3.png"; // CTA Image
import a4 from "../assets/4.png"; // Audience logos
import a5 from "../assets/5.png"; // Trusted logos
import a6 from "../assets/6.png"; // Footer image

export default function Hero() {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center font-montserrat overflow-hidden"
        style={{ backgroundImage: `url(${a1})` }}
      >
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-90 z-0" />

        {/* Navbar */}
        <div className="relative z-10 w-full h-[100px] flex items-center justify-between px-8">
          {/* Logo */}
          <div className="w-[180px] h-[90px] flex items-center">
            <img src={a2} alt="Logo" className="h-full object-contain" />
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap gap-4 text-gray-200 text-base font-normal">
            {["Blogs", "Events", "Podcasts", "Pricing", "Books", "Mentors", "History", "Careers", "FAQs"].map(
              (item) => (
                <li key={item} className="hover:text-blue-400 cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>

          {/* CTA Image/Button */}
          <div className="w-[120px] h-[30px] rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <img src={a3} alt="CTA" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-2 py-4 space-y-4">
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
            <span className="text-[#CE9D4B]">
              Blending Soul & Strategy to Shape Legacy, Influence, and Impact
            </span>
          </p>

          {/* Audience Reach */}
          <div className="text-[#CE9D4B] text-sm md:text-base uppercase tracking-wide">
            My Work has reached audiences at
          </div>

          <div className="w-11/12 md:w-4/5">
            <img src={a4} alt="Audience Logos" className="w-full object-contain" />
          </div>

          {/* Trusted By */}
          <div className="text-[#CE9D4B] text-base font-normal uppercase mt-4">
            Trusted By
          </div>

          {/* Description List */}
          <p className="px-2 text-xs md:text-sm font-normal leading-relaxed max-w-5xl uppercase text-white">
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
