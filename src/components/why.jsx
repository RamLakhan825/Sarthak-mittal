import a77 from "../assets/77.png";
import a78 from "../assets/78.png";
import a73 from "../assets/73.png";

export default function Why() {
  return (
    <>
    <div className="w-full bg-black text-white py-20 px-6 lg:px-20 font-[Montserrat]">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h1 className="text-[40px] md:text-[60px] font-bold uppercase text-[#D0A151]">
          Let’s build something great together
        </h1>
        <h3 className="text-[20px] md:text-[30px] font-light text-[#E0E0E0] mt-4">
          Ready to transform your business? Get in touch with our team of experts.
        </h3>
      </div>

      {/* WHY MITTAL Intro */}
      <div className="mb-12">
        <div className="flex items-baseline gap-2">
  <span className="text-[100px] md:text-[120px] text-[#D0A151] font-bold leading-none">W</span>
  <span className="text-[50px] md:text-[60px] text-[#D0A151] font-bold leading-none">hy</span>
</div>

        <div className="flex items-baseline gap-2 mt-4">
          <span className="text-[100px] md:text-[120px] text-[#D0A151] font-bold leading-none">M</span>
          <span className="text-[50px] md:text-[60px] text-[#D0A151] font-bold leading-none">ittal</span>
        </div>
        <p className="mt-4 text-[#E0E0E0] text-[24px] font-light">Creating World-Class Brands</p>
        <div className="h-[4px] w-[300px] mt-2 bg-[#D0A151]" />
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-12 mt-16">
        {/* Left - Acronym Breakdown */}
        <div className="flex-1 space-y-10">
          {[
            {
              letter: "M",
              title: "Meaning",
              quote: "“Efforts and courage are not enough without purpose and direction.”",
              author: "John F. Kennedy",
              desc: "Discover the soul of the brand — its deeper purpose, vision, and mission. Meaning drives impact.",
            },
            {
              letter: "I",
              title: "Integrity",
              quote: "“Integrity is doing the right thing, even when no one is watching.”",
              author: "C.S. Lewis",
              desc: "Audit the alignment between your message and your actions — across online, offline, and internal culture.",
            },
            {
              letter: "T",
              title: "Trust",
              quote: "“Trust is built with consistency.”",
              author: "Lincoln Chafee",
              desc: "Build and measure reputation, reviews, and credibility — how others speak about you matters more than what you say.",
            },
            {
              letter: "T",
              title: "Transparency",
              quote: "“Honesty and transparency make you vulnerable. Be honest and transparent anyway.”",
              author: "Mother Teresa",
              desc: "Showcase authentic communication, open processes, and ethical storytelling. Vulnerability builds connection.",
            },
            {
              letter: "A",
              title: "Authority",
              quote: "“Become the expert, the authority, the leader — and profits will follow.”",
              author: "Dan Kennedy",
              desc: "Develop your thought leadership, recognition, and influence in the market or community you serve.",
            },
            {
              letter: "L",
              title: "Legacy",
              quote: "“Carve your name on hearts, not tombstones.”",
              author: "Shannon L. Alder",
              desc: "Architect a future-ready brand that leaves a meaningful mark, scales sustainably, and transcends trends.",
            },
          ].map(({ letter, title, quote, author, desc }, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="text-[100px] font-bold text-[#D0A151] min-w-[80px]">{letter}</div>
              <div>
                <h1 className="text-[#D0A151] text-[28px] font-semibold">{title}</h1>
                <p className="italic text-white text-[16px] mt-1">{quote}</p>
                <p className="text-sm text-[#CCCCCC] mb-2">— {author}</p>
                <p className="text-white text-[14px]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-[4px] bg-[#D0A151] mx-6" />

        {/* Right - Image + Call to Action */}
        <div className="flex-1 flex flex-col items-center justify-start gap-8">
          <div className="relative w-full max-w-[500px]">
            <img src={a77} alt="Laptop" className="w-full rounded-md box-shadow: 0px 0px 30px 0px #D0A151;
" />
            <img
              src={a78}
              alt="Inside Laptop"
              className="absolute top-[20%] left-[12%] w-[76%] h-[46%] object-cover border-2"
            />
          </div>
          <h1
  className="text-center text-[32px] md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#CC9A48] via-white to-[#C99748]"
>
  Behind the Badass Brands
</h1>

          <h2 className="text-[20px] md:text-[26px] text-center text-white font-light">
            INNOVATIVE INSIGHTS FROM 100+ ICONIC INTERNET INFLUENCERS
          </h2>
          <button className="bg-[#D0A151] text-black px-8 py-4 rounded-full text-lg font-semibold uppercase">
            Schedule a meeting
          </button>
        </div>
      </div>
    </div>
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
