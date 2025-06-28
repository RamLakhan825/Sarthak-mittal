import a6 from "../assets/6.png";

export default function Services() {
  const services = [
    {
      title: "Executive Mentoring",
      desc: "Refine strategic thinking, executive presence, decision-making, and leadership communication."
    },
    {
      title: "Sales Enablement",
      desc: "Equip your sales team with messaging, strategies, and structured frameworks to convert better."
    },
    {
      title: "Power Dressing Workshop",
      desc: "Transform appearance into a strategic asset. Dress for confidence, credibility, and impressions."
    },
    {
      title: "Software Demos (2-Day)",
      desc: "Move from walkthroughs to persuasive selling. Engage, qualify, and convert with impact."
    },
    {
      title: "Business Presentations",
      desc: "Structure, present, and pitch effectively. Build compelling presentations that get results."
    },
    {
      title: "Super Salesperson Training",
      desc: "Master selling psychology, relationship building, and revenue-focused market positioning."
    },
    {
      title: "Effective Communication",
      desc: "Develop confident, clear communication skills to influence and connect in all settings."
    },
    {
      title: "Own Any Stage",
      desc: "Build stage presence with vocal mastery, body language, and energy control."
    },
    {
      title: "Executive Presence",
      desc: "Learn behavior, body language, and mindset to gain authority and accelerate growth."
    },
    {
      title: "TEDx Presentation Mastery",
      desc: "Design and deliver talks that move people. Connect, inspire, and simplify your message."
    },
    {
      title: "Storytelling Workshop",
      desc: "Use emotion-driven storytelling frameworks to influence, inspire, and engage."
    },
    {
      title: "Business Consulting",
      desc: "Tailored advisory for strategy, positioning, brand clarity, and efficiency."
    },
    {
      title: "Expansion into Asia",
      desc: "Get strategic support for entering high-growth Asian markets with on-ground execution."
    },
    {
      title: "Professional Development",
      desc: "Accelerate with mindset mastery, leadership training, and future-ready tools."
    },
    {
      title: "Sci/Tech Presentations",
      desc: "Simplify technical concepts for impactful communication and persuasion."
    },
    {
      title: "Unforgettable New Brand",
      desc: "Craft your expert brand identity with narrative, visuals, and positioning."
    },
    {
      title: "Sales Workshop (3-Day)",
      desc: "Deep-dive program to build trust, handle objections, and close consistently."
    },
  ];

  return (
    <>
    <div className="w-full min-h-screen bg-black text-white px-4 lg:px-16 py-12 font-[Montserrat]">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-[40px] font-bold uppercase text-[#D0A151] inline-block relative pb-2">
          SERVICES
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D0A151]" />
        </h1>
        <h3 className="text-[18px] text-[#E0E0E0] mt-2">
          We offer various impactful programs
        </h3>
      </div>

      {/* Grid with 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border-2 border-white p-4 space-y-2 text-justify uppercase text-[14px]"
          >
            <h2 className="text-[18px] font-bold text-center">
              {service.title}
            </h2>
            <p className="leading-6">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
    {/* Footer Decorative Image */}
          <div className="w-full bg-white">
            <img
              src={a6}
              alt="Footer Decorative"
              className="w-full h-auto object-cover"
            />
          </div>
        </>
  );
}
