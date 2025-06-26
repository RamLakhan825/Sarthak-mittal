import a9 from "../assets/9.png";
import a10 from "../assets/10.png"; // Decorative arrow border image

export default function Success() {
  return (
    <div className="w-full min-h-[1000px] bg-black pt-[105px] px-6 lg:px-20">
      {/* Heading */}
      <h1 className="w-[700px] text-[#D0A151] font-montserrat font-bold text-[80px] leading-[110.7px] text-left uppercase border-b-4 border-[#D0A151] mb-16">
        SUCCESS MATRIX
      </h1>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-[24px]">
        {/* Card Template */}
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
              className="w-[420px] h-[230px] object-contain mb-2 -ml-[1px] scale-[1.12]"
            />

            {/* Card Content */}
            <div className="relative z-10 w-full h-full px-3 pt-4 pb-4 flex flex-col items-center justify-start">
              <p className="text-[#D0A151] text-[16px] font-bold uppercase text-center w-[90%] leading-snug">
                {index === 0
                  ? "15,000,000+ PEOPLE REACHED"
                  : index === 1
                  ? "3,500+ SUBSCRIBERS"
                  : "200+ WEBINARS"}
              </p>
              <p className="text-white text-[13px] font-bold leading-[18px] text-justify uppercase w-full mt-2">
                {index === 0
                  ? "Over 1.5 Crore cumulative digital impressions across platforms through branding, education, and marketing campaigns."
                  : index === 1
                  ? "YouTube and LinkedIn Live audience growing steadily through leadership and branding insights."
                  : "Delivered webinars globally on business growth, branding, and strategic transformation."}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-[24px]">
  {[...Array(5)].map((_, index) => (
    <div key={index} className="relative w-[280px] h-[480px] rotate-180">
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
        className="w-[423px] h-[230px] object-contain mb-2 -ml-[0px] scale-[1.16] rotate-180 mt-57"
        style={{
      clipPath: `polygon(
        146px 0%,              /* Left triangle base */
        calc(134px) 0%, /* Right triangle base */
        100% 104px,            /* Right triangle tip */
        100% 100%,            /* Bottom right */
        0% 100%,              /* Bottom left */
        0% 104px               /* Left triangle tip */
      )`
    }}
      />

      {/* Card Content - rotate back */}
      <div className="relative z-10 w-full h-full px-3 pt-4 pb-4 flex flex-col items-center justify-start rotate-180 mt-[-240px]">
        <p className="text-[#D0A151] text-[16px] font-bold uppercase text-center w-[90%] leading-snug">
          {index === 0
            ? "15,000,000+ PEOPLE REACHED"
            : index === 1
            ? "3,500+ SUBSCRIBERS"
            : "200+ WEBINARS"}
        </p>
        <p className="text-white text-[13px] font-bold leading-[18px] text-justify uppercase w-full mt-2">
          {index === 0
            ? "Over 1.5 Crore cumulative digital impressions across platforms through branding, education, and marketing campaigns."
            : index === 1
            ? "YouTube and LinkedIn Live audience growing steadily through leadership and branding insights."
            : "Delivered webinars globally on business growth, branding, and strategic transformation."}
        </p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}
