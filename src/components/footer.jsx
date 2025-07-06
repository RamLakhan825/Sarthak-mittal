import a79 from "../assets/79.png";
import a2 from "../assets/2.png"; // Image for bottom right
import { FaRegEnvelope } from "react-icons/fa"; // Message icon

export default function Footer() {
  return (
    <div className="w-full bg-black relative px-6 md:px-12 py-16 text-white font-sans overflow-hidden">
      {/* Message Icon at Top Right */}
      <div className="absolute top-6 right-6 z-10">
        <div className="w-12 h-12 rounded-full bg-[#D0A151] flex items-center justify-center">
          <FaRegEnvelope className="text-black text-xl" />
        </div>
      </div>

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row flex-wrap gap-4 justify-between">
        {/* Company Info */}
        <div className="max-w-md space-y-6 pl-[150px]">
          <div className="flex items-baseline gap-4 ">
            <img src={a79} alt="Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-[#D0A151] text-2xl font-bold">Sarthak Mittal</h1>
          </div>
          <p className="text-[18px] leading-[29px]">
            Sarthak Group of Companies provides the best business solutions,
            helping businesses thrive through strategic and technical
            development. Led by Mr. Sarthak Mittal, a top-tier business consultant
            representing various companies, we are dedicated to "Creating CEOs"
            and fostering the growth of MSMEs.
          </p>
        </div>

        {/* Pages */}
        <div className="space-y-5 min-w-[120px] -ml-30">

          <h1 className="text-xl font-bold text-white">Pages</h1>
          <p>Home</p>
          <p>Services</p>
          <p>Courses</p>
          <p>Blog Insight</p>
          <p>Contact</p>
          <p>Terms & Conditions</p>
        </div>

        {/* Company */}
        <div className="space-y-6 min-w-[120px]">
          <h1 className="text-xl font-bold text-white">Company</h1>
          <p>Careers</p>
          <p>Support</p>
          <p>Price & Plans</p>
        </div>

        {/* Get In Touch */}
        <div className="space-y-6 min-w-[160px] ml-[40px] pr-40">
          <h1 className="text-xl font-bold text-white">Get In Touch</h1>
          <p>Head Office</p>
          <p>Vijay Nagar Part II,</p>
          <p>Indore, INDIA</p>

          <h1 className="mt-4 font-bold">Sub Office</h1>
          <p>Indore, INDIA</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-[#D0A151] my-12" />

      {/* Bottom Section */}
      <div className="text-sm text-white">
        <p className="flex items-center gap-2">
          <span>Copyright ©</span>
          <span className="text-[#D0A151] font-semibold">Sarthak Mittal</span>
          <span>- 2025</span>
        </p>
      </div>

      {/* Decorative Bottom Right Image */}
      <img
        src={a2}
        alt="Decorative"
        className="absolute bottom-0 right-0 w-[120px] md:w-[160px] object-contain"
      />
    </div>
  );
}
