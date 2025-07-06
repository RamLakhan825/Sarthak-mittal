import a7 from "../assets/7.png"; // Decorative or profile image
import a8 from "../assets/8.png"; // Footer decorative image

export default function About() {
  return (
    <div>
      <div className="w-full bg-white font-montserrat px-4 md:px-10 py-10 relative overflow-hidden">
        {/* Orange Decorative Box - now also shown in mobile */}
        <div className="absolute top-[50px] left-[30px] lg:left-[150px] w-[100px] lg:w-[120px] h-[200px] lg:h-[300px] bg-[#E6C584] z-0 rounded-xl" />

        {/* Main Layout */}
        <div className="relative z-10 flex flex-row items-start max-w-[1600px] mx-auto gap-4 lg:gap-6 lg:ml-36">
          {/* Left Side: Heading + Bullet Block */}
          <div className="w-[60%] sm:w-[65%] md:w-[70%] lg:w-full">
            {/* Heading */}
            <h2 className="text-[#D0A151] uppercase font-bold text-[20px] sm:text-[24px] md:text-[30px] lg:text-[56px] leading-tight mb-4 text-center lg:text-left lg:ml-[20px] lg:mt-[40px] whitespace-nowrap">
              About Sarthak Mittal
            </h2>

            {/* Bordered Bullet Box */}
            <div className="border-2 border-black rounded-[20px] p-4 md:p-6 lg:p-6 mt-2 w-full lg:w-[calc(100%+60px)] lg:ml-[60px]">
              {[
                `<strong class="font-bold">FOUNDER & CEO</strong> of Mittal Alliance Industries Private Limited (India) and <strong>Mittal Brandtech Inc. (Colorado, USA)</strong> — two successful enterprises partnering with leading brands and <strong>2000+ industrialists</strong> worldwide.`,
                `Recognized as one of the <strong>most trusted branding experts</strong> across APAC, USA, and Europe, with multiple associated ventures and high-impact client portfolios.`,
                `CREATOR of <strong class="font-bold">BADVERSE</strong> (Breakdown, Analysis, and Decision), a thriving community of over <strong>10,000 members</strong> dedicated to strategic personal and business transformation.`,
                `Achieved a LinkedIn reach of over <strong>15 million+</strong>, earning the trust and admiration of top industrialists and business leaders.`,
                `AUTHOR of “Contact Centre Success”, <strong class="font-bold">a Kindle book</strong> focused on sales, communication, and customer engagement in call centers.`,
                `PODCASTER & CONTENT CREATOR, running a <strong class="font-bold">YouTube channel</strong> and LinkedIn Live series with <strong>3,500+ subscribers</strong>, offering powerful insights on branding, entrepreneurship, and leadership.`,
                `<strong class="font-bold">GLOBAL SPEAKER</strong>, delivering <strong>200+ webinars</strong>, featured on <strong>TEDx</strong>, and honored with <strong>12+ awards</strong> and <strong>70+ testimonials</strong> from clients and forums around the globe — including Mittal Business Exchange, MSFB, and AACST.`,
              ].map((text, idx) => (
                <p
                  key={idx}
                  className="relative pl-4 mb-4 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[15px] text-black font-medium uppercase text-justify before:content-['•'] before:absolute before:left-0 before:text-black before:font-bold"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-[40%] sm:w-[100%] md:w-[100%] flex justify-center items-end mt-2 lg:mt-[100px] self-stretch lg:ml-[60]">
  <img
    src={a7}
    alt="About Visual"
    className="w-full sm:w-[90%] h-auto object-contain rounded-xl max-h-[700px] sm:h-[12000px] sm:ml-4"
  />
</div>
        </div>
      </div>

      {/* Footer Image */}
      <div className="w-full bg-black">
        <img
          src={a8}
          alt="Footer Decorative"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
