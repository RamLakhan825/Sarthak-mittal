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
      className="relative w-full min-h-screen bg-cover bg-center font-montserrat overflow-hidden"
      style={{ backgroundImage: `url(${a1})` }}
    >
      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-90 z-0" />

      {/* Navbar */}
      <div className="relative z-10 w-full h-[150px] flex items-center justify-between px-12">
        {/* Logo */}
        <div className="w-[266px] h-[130px] flex items-center">
          <img src={a2} alt="Logo" className="h-full object-contain" />
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap gap-6 text-gray-200 text-lg font-normal">
          {["Blogs", "Events", "Podcasts", "Pricing", "Books", "Mentors", "History", "Careers", "FAQs"].map(
            (item) => (
              <li key={item} className="hover:text-blue-400 cursor-pointer">
                {item}
              </li>
            )
          )}
        </ul>

        {/* CTA Image/Button */}
        <div className="w-[160px] h-[33px] rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-transform">
          <img src={a3} alt="CTA" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 py-12 space-y-8">
        {/* Title */}
        <h1 className="uppercase text-5xl md:text-7xl font-bold leading-tight">
          <span className="text-[#CE9D4B]">MITTAL</span> CREATE
        </h1>

        {/* Subtitle */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <span className="uppercase text-2xl md:text-4xl font-normal text-[#CE9D4B]">
            VISIONARY CEO'S
          </span>
          <span className="uppercase text-3xl md:text-4xl font-bold">&</span>
          <span className="uppercase text-2xl md:text-4xl font-normal text-[#CE9D4B]">
            INDUSTRY LEADING ENTERPRISES
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-2xl leading-relaxed max-w-4xl">
          I BUILD ICONIC PERSONAL BRANDS & REDEFINE CORPORATE IDENTITIES
          <br />
          <span className="text-[#CE9D4B]">
            Blending Soul & Strategy to Shape Legacy, Influence, and Impact
          </span>
        </p>

        {/* Audience Reach */}
        <div className="text-[#CE9D4B] text-lg md:text-xl uppercase tracking-wide">
          My Work has reached audiences at
        </div>

        <div className="w-11/12 md:w-4/5">
          <img src={a4} alt="Audience Logos" className="w-full object-contain" />
        </div>

        {/* Trusted By */}
        <div className="text-[#CE9D4B] text-xl font-normal uppercase mt-8">
          Trusted By
        </div>

        {/* Description List */}
        <p className="px-4 text-sm md:text-base font-normal leading-relaxed max-w-8xl uppercase text-white">
          Industry Icons | Conscious Companies | Soulful Celebrities | Internet Influencers | Passionate Professionals |
          Solopreneurs | Industrialists | Legacy-Driven Leaders
        </p>

        {/* Trusted Logos */}
        <div className="w-full ">
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