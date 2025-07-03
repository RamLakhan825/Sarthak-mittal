import img19 from "../assets/19.png";
import img20 from "../assets/20.png";
import img21 from "../assets/21.png";
import img22 from "../assets/22.png";
import img23 from "../assets/23.png";
import img24 from "../assets/24.png";
import img25 from "../assets/25.png";
import footerImg from "../assets/26.png";

export default function Connect() {
  const icons = [img19, img20, img21, img22, img23, img24, img25];

  return (
    <>
      <div className="bg-white py-10 px-4 lg:px-16 text-center">
        {/* Heading */}
        <h1 className="text-[#D0A151] text-[32px] font-bold uppercase underline leading-tight">
          Connect with me
        </h1>

        {/* Card Box */}
        <div className="mt-8 max-w-[1000px] mx-auto p-6 rounded-[16px] border border-[#CE9D4B] space-y-6">
          {/* Title */}
          <p className="text-[20px] font-bold text-[#333]">Connect with Sarthak</p>

          {/* Icons */}
          <div className="grid grid-cols-3 gap-6 sm:flex sm:flex-wrap sm:justify-center">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`w-[100px] h-[100px] border border-[#D0A151] rounded-[10px] flex items-center justify-center ${
                  index === icons.length - 1 ? "col-span-3 mx-auto" : ""
                }`}
              >
                <img
                  src={icon}
                  alt={`connect-icon-${index + 1}`}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <div>
        <img
          src={footerImg}
          alt="footer"
          className="mx-auto w-full h-auto object-cover"
        />
      </div>
    </>
  );
}
