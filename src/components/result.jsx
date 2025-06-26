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
        className="w-full h-[1409px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${a12})` }}
      >
        {/* Glass Layer */}
        <div className="w-full h-full bg-black/80 backdrop-blur-md px-[132px] pt-[155px]">
          {/* Title */}
          <h1
            className="text-[60px] leading-[110.7px] font-bold font-montserrat uppercase text-left underline decoration-6 underline-offset-[10px] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(89.74deg, #D0A151 8.4%, #DCB56C 51.24%, #E6C584 60.57%, #DDB56D 67.77%, #CE9D4B 98.28%)",
            }}
          >
            Result of My Consistency & Pain
          </h1>

          {/* Subtitle */}
          <h3 className="text-white text-[40px] font-normal font-montserrat mt-[20px] text-left">
            Businesses & Industries Acquired by Mittal Alliance
          </h3>

          {/* Circle Logos Row */}
          <div className="flex justify-center items-center gap-[20px] mt-[100px] max-w-[1306px] mx-auto flex-wrap lg:flex-nowrap">
            {[a14, a15, a16, a17].map((logo, idx) => (
              <div
                key={idx}
                className="relative w-[326px] h-[326px] rounded-[38px] overflow-hidden"
              >
                <img
                  src={a13}
                  alt={`circle-${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-[75px] left-[75px] w-[175px] h-[175px] rounded-[18px] overflow-hidden">
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
          <p className="text-white font-bold text-[40px] text-center mt-[120px]">
            A Multinational “MITTAL” Brand Expanding by 2030
          </p>
        </div>
      </div>

      {/* Decorative Footer Image */}
      <div className="w-full bg-black -mt-[40px]">
        <img
          src={a18}
          alt="Footer Decorative"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
}
