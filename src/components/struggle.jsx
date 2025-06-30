import a61 from "../assets/61.png";
import a62 from "../assets/62.png";
import a63 from "../assets/63.png";
import a64 from "../assets/64.png";
import a65 from "../assets/65.png";
import a66 from "../assets/66.png";
import a67 from "../assets/67.png";
import a68 from "../assets/68.png";
import a69 from "../assets/69.png";
import a70 from "../assets/70.png";
import a71 from "../assets/71.png";
import a72 from "../assets/72.png";
import a73 from "../assets/73.png"; // Footer Decorative

export default function Struggle() {
  const column1 = [a61, a62, a63, a64];
  const column2 = [a65, a66, a67, a68];
  const column3 = [a69, a70, a71, a72];

  return (
    <>
      <div className="w-full bg-black px-4 lg:px-20 py-16 font-[Montserrat]">
        {/* Heading */}
        <div className="text-center mb-10">
  <h1 className="text-[28px] md:text-[40px] font-bold uppercase text-[#D0A151] inline-block relative pb-2 leading-snug">
    My Struggles Made me Humble & Grounded
    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D0A151]" />
  </h1>
  <br />
  <h2 className="text-[18px] md:text-[24px] font-medium leading-tight text-white mt-4">
    Some moments which made my life memorable
  </h2>
</div>


        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[column1, column2, column3].map((column, colIndex) => {
            const gapClass =
              colIndex === 0
                ? "gap-[40px]"
                : colIndex === 1
                ? "gap-[40px]"
                : "gap-2";

            return (
              <div key={colIndex} className={`flex flex-col ${gapClass}`}>
                {column.map((img, index) => (
                  <div
                    key={index}
                    className="border-[3.33px] border-[#D0A151] p-3 bg-white"
                  >
                    <img
                      src={img}
                      alt={`Moment ${colIndex + 1}-${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-width footer image */}
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
