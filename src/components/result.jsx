import a12 from "../assets/12.png";
import a13 from "../assets/13.png";
import a14 from "../assets/14.png";
import a15 from "../assets/15.png";
import a16 from "../assets/16.png";
import a17 from "../assets/17.png";
import a18 from "../assets/18.png";

export default function Result() {
  return (
    <>
      {/* Background Section with Glass Effect */}
      <div
  className="w-full h-[1400px] sm:h-[1200px] md:h-[1000px] lg:h-screen bg-cover bg-center relative"
  style={{ backgroundImage: `url(${a12})` }}
>
        {/* Glass Layer */}
        <div className="w-full h-full bg-black/80 backdrop-blur-md px-6 lg:px-[100px] pt-[80px]">
          {/* Title */}
          <h1
  className="inline-block text-[36px] lg:text-[48px] leading-tight font-bold font-montserrat uppercase text-left lg:border-b-4 lg:border-[#D0A151] mb-16 bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(89.74deg, #D0A151 8.4%, #DCB56C 51.24%, #E6C584 60.57%, #DDB56D 67.77%, #CE9D4B 98.28%)",
  }}
>
  Result of My Consistency & Pain
</h1>


          {/* Subtitle */}
          <h3 className="text-white text-[20px] lg:text-[20px] font-normal font-montserrat mt-[-50px] text-left">
            Businesses & Industries Acquired by Mittal Alliance
          </h3>
<br /><br />
          {/* Circle Logos Row */}
          <div className="flex justify-center items-center gap-[16px] mt-[40px] max-w-[1306px] mx-auto flex-wrap lg:flex-nowrap">
            {[a14, a15, a16, a17].map((logo, idx) => (
              <div
                key={idx}
                className="relative w-[200px] h-[200px] rounded-[24px] overflow-hidden"
              >
                <img
                  src={a13}
                  alt={`circle-${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-[45px] left-[45px] w-[110px] h-[110px] rounded-[12px] overflow-hidden">
                  <img
                    src={logo}
                    alt={`logo-${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <p className="text-white font-bold text-[20px] lg:text-[28px] text-center mt-[40px] underline decoration-white">
  A Multinational “MITTAL” Brand Expanding by 2030
</p>

        </div>
      </div>

      {/* Decorative Footer Image */}
      <div className="w-full bg-black -mt-[20px]">
        <img
          src={a18}
          alt="Footer Decorative"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
}
