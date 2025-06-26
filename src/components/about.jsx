import a7 from "../assets/7.png"; // Decorative or profile image
import a8 from "../assets/8.png"; // Footer decorative image

export default function About() {
  return (
    <>
      <div className="w-full bg-white font-montserrat px-4 md:px-10 py-10 relative overflow-hidden">
        {/* Orange Decorative Box - Visible on large screens */}
        <div className="hidden lg:block absolute top-[50px] left-[150px] w-[120px] h-[300px] bg-[#E6C584] z-0 rounded-xl" />

        <div className="relative z-10 flex flex-col lg:flex-row items-end max-w-[1600px] mx-auto">
          {/* Left Side: Heading + Paragraph */}
          <div className="w-full lg:w-[65%]">
            {/* Heading */}
            <h2
              className="text-[#D0A151] uppercase font-bold text-[36px] md:text-[64px] leading-tight mb-4"
              style={{ marginLeft: "155px", marginTop: "40px" }}
            >
              About Sarthak Mittal
            </h2>

            {/* Bordered Box with Bullet Points */}
            <div
              className="min-h-[750px] border-2 border-black rounded-[20px] p-6 md:p-8 w-full"
              style={{ marginLeft: "190px", marginTop: "45px" }}
            >
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
                  className="relative pl-4 mb-4 text-[15px] md:text-[17px] text-black font-medium uppercase text-justify before:content-['•'] before:absolute before:left-0 before:text-black before:font-bold"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <img
  src={a7}
  alt="About Visual"
  className="w-[400px] h-[620px] object-contain rounded-xl 
             block relative top-[100px] left-[60px] mx-auto lg:ml-auto lg:mr-0"
/>



        </div>
      </div>

      {/* Footer Image */}
      <div className="w-full bg-black">
  <img
    src={a8}
    alt="Footer Decorative"
    className="w-full h-auto object-cover -mt-19" // -mt-10 is roughly -40px
  />
</div>

     
    </>
  );
}
