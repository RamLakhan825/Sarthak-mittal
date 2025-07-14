import a79 from "../assets/79.png";
import a2 from "../assets/2.png"; // Image for bottom right
import { FaRegEnvelope } from "react-icons/fa"; // Message icon

export default function Footer() {
  return (
    <div className="w-full bg-black relative px-4 sm:px-6 md:px-12 py-12 sm:py-14 md:py-16 text-white font-sans overflow-hidden">
      {/* Message Icon at Top Right */}
      <div className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 z-10">
        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#D0A151] flex items-center justify-center">
          <FaRegEnvelope className="text-black text-lg sm:text-xl" />
        </div>
      </div>

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row flex-wrap gap-10 sm:gap-6 md:gap-8 justify-between">
        {/* Company Info */}
        <div className="max-w-md space-y-4 sm:space-y-5 md:space-y-6 sm:pl-4 md:pl-[80px] lg:pl-[150px]">
          <div className="flex items-baseline gap-3 sm:gap-4">
            <img src={a79} alt="Logo" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
            <h1 className="text-[#D0A151] text-xl sm:text-2xl font-bold">Sarthak Mittal</h1>
          </div>
          <p className="text-sm sm:text-base leading-relaxed sm:leading-[26px]">
            Sarthak Group of Companies provides the best business solutions,
            helping businesses thrive through strategic and technical
            development. Led by Mr. Sarthak Mittal, a top-tier business consultant
            representing various companies, we are dedicated to "Creating CEOs"
            and fostering the growth of MSMEs.
          </p>
        </div>

        {/* Pages */}
        <div className="space-y-3 sm:space-y-4 min-w-[120px]">
          <h1 className="text-lg sm:text-xl font-bold text-white">Pages</h1>
          <p>Home</p>
          <p>Services</p>
          <p>Courses</p>
          <p>Blog Insight</p>
          <p>Contact</p>
          <p>Terms & Conditions</p>
        </div>

        {/* Company */}
        <div className="space-y-3 sm:space-y-4 min-w-[120px]">
          <h1 className="text-lg sm:text-xl font-bold text-white">Company</h1>
          <p>Careers</p>
          <p>Support</p>
          <p>Price & Plans</p>
        </div>

        {/* Get In Touch */}
        <div className="space-y-3 sm:space-y-4 min-w-[160px] sm:ml-2 md:ml-[40px] sm:pr-10 md:pr-40">
          <h1 className="text-lg sm:text-xl font-bold text-white">Get In Touch</h1>
          <p>Head Office</p>
          <p>Vijay Nagar Part II,</p>
          <p>Indore, INDIA</p>

          <h1 className="mt-3 font-bold">Sub Office</h1>
          <p>Indore, INDIA</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-[#D0A151] my-8 sm:my-10 md:my-12" />

      {/* Bottom Section */}
      <div className="text-xs sm:text-sm text-white text-center md:text-left">
        <p className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-2">
          <span>Copyright ©</span>
          <span className="text-[#D0A151] font-semibold">Sarthak Mittal</span>
          <span>- 2025</span>
        </p>
      </div>

      {/* Decorative Bottom Right Image */}
      <img
        src={a2}
        alt="Decorative"
        className="absolute bottom-0 right-0 w-[80px] sm:w-[100px] md:w-[160px] object-contain"
      />
    </div>
  );
}
