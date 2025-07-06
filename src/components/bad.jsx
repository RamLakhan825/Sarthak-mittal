import a33 from "../assets/33.png"; // B
import a34 from "../assets/34.png"; // A
import a35 from "../assets/35.png"; // D
import a36 from "../assets/80.png"; // B Text Icon
import a37 from "../assets/81.png"; // A Text Icon
import a38 from "../assets/82.png"; // D Text Icon
import a8 from "../assets/8.png";   // Footer

export default function Bad() {
  const blocks = [
    {
      letter: "B",
      title: "Breakdown",
      img: a33,
      icon: a36,
      desc: "Through plans, you break down a process into small and identify the things you accomplish.",
    },
    {
      letter: "A",
      title: "Analysis",
      img: a34,
      icon: a37,
      desc: "Through Breakdown, analyze each problem your business is facing and find possible solutions.",
    },
    {
      letter: "D",
      title: "Decision",
      img: a35,
      icon: a38,
      desc: "Through Analysis, launch your initiative with clarity and direction.",
    },
  ];

  return (
    <>
      <div className="w-full bg-white py-12 px-4 lg:px-16 font-montserrat text-center">
        {/* Heading with underline */}
        <div className="relative inline-block pb-3 mb-12 mx-auto">
          <h1 className="text-[#D0A151] text-[32px] lg:text-[40px] font-bold uppercase">
            I use “BAD” framework to solve problems
          </h1>
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#D0A151]" />
        </div>

        {/* BAD Blocks Container */}
        <div className="border-2 border-[#D0A151] p-6 md:p-10 bg-[#fffef9]">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-10 lg:hidden">
            {blocks.map((block, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <img src={block.img} alt={block.letter} className="w-[120px] h-[120px]" />
                <div className="bg-black text-white p-4 rounded-xl w-full max-w-[320px]">
                  <img src={block.icon} alt={`${block.letter} icon`} className="mx-auto w-[40px] h-[40px] mb-2" />
                  <button className="bg-[#313131] text-[#CE9D4B] text-sm px-4 py-1 rounded-full font-semibold mb-2">
                    “{block.letter}” STANDS FOR
                  </button>
                  <h2 className="text-[20px] font-bold">{block.title}</h2>
                  <p className="text-[14px] mt-1">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-col items-center gap-10">
            <div className="flex justify-center gap-10">
              {blocks.map((block, index) => (
                <img key={index} src={block.img} alt={block.letter} className="w-[140px] h-[140px]" />
              ))}
            </div>
            <div className="flex justify-center gap-10 w-full">
              {blocks.map((block, index) => (
                <div key={index} className="bg-black text-white p-6 w-full max-w-[350px] text-center">
                  <img src={block.icon} alt={`${block.letter} icon`} className="mx-auto w-[40px] h-[40px] mb-3" />
                  <button className="bg-[#313131] text-[#CE9D4B] text-sm px-5 py-2 rounded-full font-semibold mb-3">
                    “{block.letter}” STANDS FOR
                  </button>
                  <h2 className="text-[22px] font-bold">{block.title}</h2>
                  <p className="text-[15px] mt-2 leading-relaxed">{block.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="bg-[#CE9D4B] text-white rounded-full px-6 py-3 text-[16px] font-medium hover:bg-[#d6ab5a] transition">
            Learn More About Our Framework
          </button>
        </div>
      </div>

      {/* Footer Decorative Image */}
      <div className="w-full bg-black">
        <img
          src={a8}
          alt="Footer Decorative"
          className="w-full h-auto object-cover -mt-6"
        />
      </div>
    </>
  );
}
