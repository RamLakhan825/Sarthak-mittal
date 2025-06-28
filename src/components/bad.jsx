import a33 from "../assets/33.png";
import a34 from "../assets/34.png";
import a35 from "../assets/35.png";
import a36 from "../assets/36.png";
import a37 from "../assets/37.png";
import a38 from "../assets/38.png";
import a8 from "../assets/8.png";

export default function Bad() {
  return (
    <>
      <div className="w-full bg-white py-20 px-6 lg:px-24 space-y-16 text-center font-[Montserrat]">
        {/* Heading with underline */}
        <div className="relative inline-block pb-4 mx-auto">
          <h1 className="text-[#D0A151] text-[50px] font-bold uppercase">
            I use “BAD” framework to solve problems
          </h1>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D0A151]" />
        </div>

        {/* Border container */}
        <div className="border-2 border-[#D0A151] p-6 flex flex-col items-center gap-10">
          {/* Top images: B, A, D logos */}
          <div className="flex flex-wrap justify-center gap-12">
            <img src={a33} alt="B" className="w-[220px] h-[220px]" />
            <img src={a34} alt="A" className="w-[220px] h-[220px]" />
            <img src={a35} alt="D" className="w-[220px] h-[220px]" />
          </div>

          {/* Explanation cards side-by-side */}
          <div className="flex flex-col lg:flex-row justify-center gap-6 w-full">
            <img src={a36} alt="B Explain" className="w-full lg:w-1/3 object-cover" />
            <img src={a37} alt="A Explain" className="w-full lg:w-1/3 object-cover" />
            <img src={a38} alt="D Explain" className="w-full lg:w-1/3 object-cover" />
          </div>
        </div>

        {/* Button */}
        <button className="bg-[#CE9D4B] text-white rounded-full px-8 py-3 text-[18px] font-semibold hover:bg-[#d6ab5a] transition">
          Learn More About Our Framework
        </button>
      </div>

      {/* Footer Decorative Image */}
      <div className="w-full bg-black">
        <img
          src={a8}
          alt="Footer Decorative"
          className="w-full h-auto object-cover -mt-10"
        />
      </div>
    </>
  );
}
