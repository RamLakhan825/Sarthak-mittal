import a39 from "../assets/39.jpg";
import a40 from "../assets/40.jpg";
import a41 from "../assets/41.jpg";
import a42 from "../assets/42.jpg";
import a43 from "../assets/43.jpg";
import a44 from "../assets/44.jpg";
import a45 from "../assets/45.png";
import a46 from "../assets/46.jpg";
import a47 from "../assets/47.jpg";
import a48 from "../assets/48.jpg";
import a49 from "../assets/49.jpg";
import a50 from "../assets/50.jpg";
import a51 from "../assets/51.jpg";
import a52 from "../assets/52.jpg";
import a53 from "../assets/53.jpg";
import a54 from "../assets/54.jpg";
import a55 from "../assets/55.jpg";
import a56 from "../assets/56.jpg";
import a57 from "../assets/57.png"; // ✅ Correct import for the last image

export default function Media() {
  const column1 = [a39, a40, a41, a42];
  const column2 = [a43, a44, a45, a46, a47];
  const column3 = [a48, a49, a50, a51];
  const column4 = [a52, a53, a54, a55, a56];

  return (
    <>
      <div className="w-full bg-white px-4 lg:px-20 py-16 font-[Montserrat]">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-[40px] md:text-[60px] font-bold uppercase text-[#D0A151] inline-block relative pb-2">
            Media Honors and Awards
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D0A151]" />
          </h1>
        </div>

        {/* 4 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[column1, column2, column3, column4].map((column, colIndex) => {
            const gapClass =
              colIndex === 1
                ? "gap-[40px]"
                : colIndex === 2
                ? "gap-[80px]"
                : colIndex === 3
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
                      alt={`Award ${colIndex + 1}-${index + 1}`}
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
      <div className="w-full">
        <img
          src={a57}
          alt="Footer Decorative"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
}
