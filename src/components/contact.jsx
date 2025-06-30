import a73 from "../assets/73.png"; // Footer decorative image
import a75 from "../assets/75.png"; // Main image (contact-related)
import { FaDownload, FaBook } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="bg-black text-white w-full px-4 lg:px-12 py-12 font-[Montserrat]">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left - Image */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <img
              src={a75}
              alt="Contact"
              className="border-[4px] border-[#D0A151] shadow-inner shadow-black w-full max-w-[480px] object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-4 w-full lg:w-[60%]">
            <button className="bg-[#FDAA5633] text-[#D0A151] font-semibold text-[12px] px-5 py-1.5 rounded-full uppercase tracking-wider w-fit">
              Latest publications
            </button>

            <h2 className="text-[26px] md:text-[34px] font-bold leading-snug bg-gradient-to-r from-[#D0A151] to-white text-transparent bg-clip-text">
              Mastering Success in Contact Centres
            </h2>

            <p className="text-[15px] leading-[1.6] text-gray-200 max-w-[640px]">
              Unlock customer service excellence with strategic insights, practical examples, and action plans for leadership and digital transformation.
            </p>

            <div className="flex flex-col gap-2 mt-2">
              {[
                "Strategic frameworks for contact centre optimization",
                "Real-world case studies and best practices",
                "Leadership techniques for team excellence",
                "Technology integration and transformation",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#FDAA56]" />
                  <span className="text-white text-[14px]">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-[#D0A151] text-black px-6 py-2.5 rounded-full flex items-center gap-2 text-[14px] font-semibold uppercase">
                <FaDownload /> Download Sample
              </button>
              <button className="border-2 border-[#D0A151] text-[#D0A151] px-6 py-2.5 rounded-full flex items-center gap-2 text-[14px] font-semibold uppercase">
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
          className="w-full h-auto object-cover -mt-8"
        />
      </div>
    </>
  );
}
