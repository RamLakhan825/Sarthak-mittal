import img27 from "../assets/27.jpg";
import img28 from "../assets/28.jpg";
import img29 from "../assets/29.png";
import img30 from "../assets/30.jpg";
import img31 from "../assets/31.jpg";

export default function Connect() {
  return (
    <div className="w-full bg-black text-white pt-20 px-4 lg:px-20 space-y-14 font-[Montserrat]">
      {/* Heading */}
      <div className="flex justify-center">
        <div className="relative inline-block pb-2">
          <h1 className="text-[32px] lg:text-[40px] font-bold uppercase text-center">
            <span className="text-white">A </span>
            <span className="text-[#D0A151]">Painful </span>
            <span className="text-white">Beginning</span>
          </h1>
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#D0A151]" />
        </div>
      </div>

      {/* Origin Story */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 text-[18px] lg:text-[20px] leading-[30px] text-justify space-y-4">
          <p><strong>I didn’t inherit an empire.<br />I inherited the ashes of one.</strong></p>
          <p>
            In <strong>1907</strong>, two brave visionaries – <strong>Ganga Ram Mohanlal Mittal</strong> and <strong>Shri Babulal Mittal</strong> –
            built <strong>India’s first brass rolling mill</strong>. What began as a small dream grew into the <strong>mighty Mittal Group</strong>,
            a symbol of strength, jobs, and national pride.
          </p>
        </div>
        <div className="lg:w-1/3 flex gap-4 justify-start ml-3">
          <img src={img27} alt="Founder 1" className="w-[160px] h-[200px] border-[3px] border-[#D0A151] object-cover rounded" />
          <img src={img28} alt="Founder 2" className="w-[160px] h-[200px] border-[3px] border-[#D0A151] object-cover rounded" />
        </div>
      </div>

      {/* Collapse */}
      <div className="text-[18px] lg:text-[20px] leading-[30px] text-justify space-y-4">
        <p>But <strong>success doesn’t always last forever.</strong></p>
        <p>
          By <strong>2003</strong>, after decades of <strong>internal disputes</strong> and <strong>poor financial decisions</strong>,
          the empire collapsed. The <strong>₹1,000 crore</strong> dream faded into <strong>bankruptcy</strong> — the same year <strong>I was born</strong>.
        </p>
      </div>

      {/* Personal Journey */}
      <div className="text-[18px] lg:text-[20px] leading-[30px] text-justify space-y-4">
        <p>
          My father, once a <strong>proud industrialist</strong>, sank into <strong>depression</strong>. But in that darkness, <strong>my mother
          became our light</strong> — a symbol of <strong>grace, strength</strong>, and <strong>unbreakable love</strong>.
        </p>
        <p>I grew up with <strong>responsibilities, not toys.</strong></p>
        <p>
          In <strong>2011</strong>, my <strong>grandmother passed away</strong>, and my mother made the bold decision to <strong>leave our
          family home</strong> — starting over from scratch.
        </p>
        <p>
          I ran errands. I stood by her. I learned <strong>resilience, empathy</strong>, and the <strong>fire to build something of my own.</strong>
        </p>
      </div>

      <div className="w-full h-[3px] bg-[#797979]" />

      {/* Rebellion Years */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <img src={img29} alt="The Rebellion Years" className="w-full lg:w-[400px] border-[4px] border-[#CE9D4B] object-cover" />
        <div className="lg:w-2/3 space-y-4">
          <h3 className="text-[#CE9D4B] text-[28px] font-bold uppercase text-center">The Rebellion Years</h3>
          <p className="text-[18px] leading-[30px] text-justify">
            Like many Indian kids, I was pushed into the IIT race. I enrolled in a <strong>dummy school</strong> and <strong>FIITJEE
            coaching</strong>, but deep down, I knew I was meant for something else.<br /><br />
            I started with <strong>YouTube</strong>, then <strong>e-commerce</strong>, selling my <strong>mother’s handmade crafts</strong>.
            I <strong>failed. Learned. Grew.</strong><br /><br />
            When <strong>COVID-19</strong> struck, it hit us hard. My <strong>mother, grandfather</strong>, and I - all ill at once. I cooked. Cleaned.
            Studied. Survived. Finished <strong>12th grade with 74%</strong>, but I knew my real exam was <strong>life itself</strong>.
          </p>
        </div>
      </div>

      <div className="w-full h-[3px] bg-[#797979]" />

      {/* Rise of an Entrepreneur */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="lg:w-2/3 space-y-4">
          <h3 className="text-[#CE9D4B] text-[28px] uppercase font-semibold text-center">The Rise of an Entrepreneur</h3>
          <p className="text-[18px] leading-[30px] text-justify">
            In <strong>2022</strong>, I joined <strong>NMIMS Indore</strong> for a <strong>B.Tech + MBA</strong>. But my soul belonged to <strong>entrepreneurship</strong>.<br /><br />
            I founded <strong>Mittal Alliance Industries</strong> (2020) to help <strong>MSMEs with AI and digital transformation</strong>.<br />
            Then came <strong>BAD Youth Media, BadTalks</strong>, and a <strong>C++ WhatsApp community</strong> that grew to <strong>1,000+ members</strong>.<br /><br />
            I built <strong>MentorMenti</strong>, my first <strong>tech startup</strong>. It eventually shut down — but gave me <strong>leadership, clarity</strong>,
            and the gift of <strong>real-world learning</strong>.
          </p>
        </div>
        <img src={img30} alt="The Rise of an Entrepreneur" className="w-full lg:w-[400px] border-[4px] border-[#CE9D4B] object-cover" />
      </div>

      <div className="w-full h-[3px] bg-[#797979]" />

      {/* From BadBusiness to Badverse */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <img src={img31} alt="BadBusiness to Badverse" className="w-full lg:w-[400px] border-[4px] border-[#CE9D4B] object-cover" />
        <div className="lg:w-2/3 space-y-4">
          <h3 className="text-[#CE9D4B] text-[28px] font-bold uppercase text-center">From BadBusiness to Badverse</h3>
          <p className="text-[18px] leading-[30px] text-justify">
            <strong>2024</strong> changed everything.<br /><br />
            I launched <strong>BadBusiness</strong>, a consulting firm — which became a huge success. It transformed into <strong>BADVERSE.IN</strong>,
            a <strong>global community of creators, leaders, and strategists</strong>.<br /><br />
            With <strong>30,000+ followers</strong>, it became my <strong>legacy</strong>.<br /><br />
            By <strong>2025</strong>, I officially registered:<br />
            ➡ <strong>Mittal Alliance Industries Pvt. Ltd. (India)</strong><br />
            ➡ <strong>Mittal Brandtech Inc. (Colorado, USA)</strong><br />
            A <strong>branding powerhouse</strong> serving <strong>2,000+ industrialists and solopreneurs</strong>.
          </p>
        </div>
      </div>

      <div className="w-full h-[3px] bg-[#797979]" />
    </div>
  );
}
