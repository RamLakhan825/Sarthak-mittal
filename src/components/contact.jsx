import a73 from "../assets/73.png"; // Footer decorative image
import a75 from "../assets/75.png"; // Main image (contact-related)
import { FaDownload, FaBook } from "react-icons/fa";


export default function Contact() {
  return (
    <>
      <div className="bg-black text-white w-full px-6 lg:px-20 py-20 font-[Montserrat]">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left - Image */}
          <div className="flex-shrink-0 w-full lg:w-[40%] flex justify-center">
            <img
              src={a75}
              alt="Contact"
              className="border-[5px] border-[#D0A151] shadow-inner shadow-black w-full max-w-[580px] h-auto object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-6 w-full lg:w-[60%]">
            {/* Tag Button */}
            <button className="bg-[#FDAA5633] text-[#D0A151] font-bold text-[14px] px-6 py-2 rounded-full uppercase tracking-widest w-fit">
              Latest publications
            </button>

            {/* Gradient Heading */}
            <h2 className="text-[32px] md:text-[48px] font-bold leading-tight bg-gradient-to-r from-[#D0A151] to-white text-transparent bg-clip-text">
              Mastering Success in Contact Centres
            </h2>

            {/* Description */}
            <p className="text-[18px] leading-[1.7] max-w-[700px]">
              Unlock the secrets to exceptional customer service and operational
              excellence. This comprehensive guide provides proven strategies, real-
              world case studies, and actionable insights for contact centre leaders
              and professionals.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col gap-3 mt-2">
              {[
                "Strategic frameworks for contact centre optimization",
                "Real-world case studies and best practices",
                "Leadership techniques for team excellence",
                "Technology integration and digital transformation",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#FDAA56] flex-shrink-0"></div>
                  <span className="text-white text-[16px]">{point}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 mt-8">
              <button className="bg-[#D0A151] text-black px-8 py-3 rounded-full flex items-center gap-3 font-semibold text-[16px] uppercase">
                <FaDownload /> Download Free Sample
              </button>
              <button className="border-2 border-[#D0A151] text-[#D0A151] px-8 py-3 rounded-full flex items-center gap-3 font-semibold text-[16px] uppercase">
                <FaBook /> Read Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Decorative Image */}
      <div className="w-full bg-white">
        <img
          src={a73}
          alt="Footer Decorative"
          className="w-full h-auto object-cover -mt-10"
        />
      </div>
    </>
  );
}
