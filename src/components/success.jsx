import a9 from "../assets/9.png";
import a10 from "../assets/10.png"; // Decorative arrow border image

export default function Success() {
  return (
    <div className="w-full bg-black pt-[105px] px-6 lg:px-20">
      {/* Heading */}
      <h1 className="w-full max-w-[700px] text-[#D0A151] font-montserrat font-bold text-[80px] leading-[110.7px] text-left uppercase border-b-4 border-[#D0A151] mb-16">
        SUCCESS MATRIX
      </h1>

      {/* First Row Cards */}
      <div className="flex flex-wrap justify-center gap-[24px] mb-16">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative w-[280px] h-[480px]">
            {/* Arrow Border Behind */}
            <img
              src={a10}
              alt="Arrow Border"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Top Image */}
            <img
              src={a9}
              alt="Card Visual"
              className="w-[420px] h-[230px] object-contain mb-2 -ml-[1px] scale-[1.16]"
            />

            {/* Card Content */}
            <div className="relative z-10 w-full h-full px-3 pt-4 pb-4 flex flex-col items-center justify-start">
              <p className="text-[#D0A151] text-[16px] font-bold uppercase text-center w-[90%] leading-snug">
                "15,000,000+ PEOPLE REACHED"
              </p>
              <p className="text-white text-[13px] font-bold leading-[18px] text-justify uppercase w-full mt-2">
                "Over 1.5 Crore cumulative digital impressions across platforms through branding, education, and marketing campaigns."
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row (Rotated Style) */}
      <div className="flex justify-center gap-[24px] flex-wrap lg:flex-nowrap w-full max-w-[1440px] mx-auto px-6">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative w-[268px] h-[460px] shrink-0 rotate-180">
            {/* Background Arrow Border - rotated */}
            <img
              src={a10}
              alt="Arrow Border"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Foreground Image - rotate back */}
            <img
              src={a9}
              alt="Card Visual"
              className="w-[423px] h-[230px] object-contain mb-2 scale-[1.11] rotate-180 mt-54"
              style={{
                clipPath: `polygon(
                  145px 0%,
                  125px 0%,
                  100% 103px,
                  100% 100%,
                  0% 100%,
                  0% 102px
                )`,
              }}
            />

            {/* Card Content - rotate back */}
            <div className="relative z-10 w-full h-full px-3 pb-4 rotate-180">
  <div className="absolute top-[750px] left-0 right-0 px-3  flex flex-col items-center">
    <p className="text-[#D0A151] text-[16px] font-bold uppercase text-center w-[90%] leading-snug">
      15,000,000+ PEOPLE REACHED
    </p>
    <p className="text-white text-[13px] font-bold leading-[18px] text-justify uppercase w-full mt-2">
      Over 1.5 Crore cumulative digital impressions across platforms through branding, education, and marketing campaigns.
    </p>
  </div>
</div>


          </div>
        ))}
      </div>
    </div>
  );
}
