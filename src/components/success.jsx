import a10 from "../assets/10.png"; // Decorative border
import a83 from "../assets/83.png";
import a84 from "../assets/84.png";
import a85 from "../assets/85.png";
import a86 from "../assets/86.png";
import a87 from "../assets/87.png";
import a88 from "../assets/88.png";
import a89 from "../assets/89.png";
import a90 from "../assets/90.png";
import a91 from "../assets/91.png";

export default function Success() {
  const firstRow = [
    {
      image: a83,
      title: "32,000+ Linkedin connections",
      description:
        "Strong network of CXOs, entrepreneurs, and professionals actively engaging with thought leadership and brand content.",
    },
    {
      image: a84,
      title: "15,000,000+ people reached",
      description:
        "Over 1.5 Crore cumulative digital impressions across platforms through branding, education, and marketing campaigns.",
    },
    {
      image: a85,
      title: "12,000+ newsletter subscribers",
      description:
        "Consistent audience consuming insights, updates, and strategies via high-engagement email campaigns.",
    },
    {
      image: a86,
      title: "50,000+ students impacted",
      description:
        "Learners reached through workshops, mentorships, webinars, and academic outreach programs.",
    },
  ];

  const secondRow = [
    {
      image: a87,
      title: "3,600+ YouTube subscribers",
      description:
        "Educational video content creating continuous impact and community growth.",
    },
    {
      image: a88,
      title: "75 global projects delivered",
      description:
        "Successful branding, digital, and consulting projects executed across India, USA, UK, Spain, Dubai, and Australia.",
    },
    {
      image: a89,
      title: "2 incorporated companies",
      description:
        "Leading ventures in brandtech, digital transformation, and consulting.",
    },
    {
      image: a90,
      title: "1 community platform (Badverse)",
      description:
        "Empowering solopreneurs, students, and creators with mentorship and digital tools.",
    },
    {
      image: a91,
      title: "1 handicraft firm (AnjuCreations)",
      description:
        "Promoting Indian craftsmanship globally through sustainable and ethical commerce.",
    },
  ];

  const Card = ({
    image,
    title,
    description,
    borderRotated = false,
    contentOrder = "default",
    extraClass = "",
    imgOffset = false,
    contentOffset = false,
  }) => (
    <div className={`relative w-full max-w-[270px] mx-auto ${extraClass}`}>
      <img
        src={a10}
        alt="border"
        className={`w-full object-contain ${borderRotated ? "rotate-180 -mt-[45px]" : ""}`}
        style={{ height: "calc(100% + 100px)" }}
      />

      <div className="absolute inset-0 px-3 py-4 flex flex-col items-center justify-center text-center">
        {contentOrder === "img-first" && (
          <>
            <img
              src={image}
              alt={title}
              className={`w-full h-auto object-contain mb-2 ${imgOffset ? "ml-[15px]" : ""}`}
            />
            <div className={`${imgOffset ? "ml-[15px]" : ""}`}>
              <h2 className="text-[#D0A151] text-sm font-bold uppercase leading-tight font-montserrat mb-1">
                {title}
              </h2>
              <p className="text-white text-[10px] uppercase leading-snug text-justify font-montserrat font-medium">
                {description}
              </p>
            </div>
          </>
        )}
        {contentOrder === "text-first" && (
          <>
            <div className={`${contentOffset ? "mt-[100px] ml-[-4px]" : ""}`}>
              <h2 className="text-[#D0A151] text-sm font-bold uppercase leading-tight font-montserrat text-center mb-1">
                {title}
              </h2>
              <p className="text-white text-[10px] uppercase leading-snug text-justify font-montserrat font-medium mb-1">
                {description}
              </p>
            </div>
            <img
              src={image}
              alt={title}
              className={`w-full h-auto object-contain ${contentOffset ? "mt-[-16px]" : "mt-[18px]"}`}
            />
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-black pt-[105px] px-6 lg:px-20">
      <h1 className="inline-block text-[#D0A151] font-montserrat font-bold text-[40px] leading-[110.7px] text-left uppercase border-b-4 border-[#D0A151] mb-16">
        SUCCESS MATRIX
      </h1>

      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-12">
        {firstRow.map((item, index) => (
          <Card
            key={index}
            {...item}
            contentOrder="img-first"
            imgOffset={index === 0 || index === 2}
            extraClass={index === 0 ? "pl-4" : ""}
          />
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
        {secondRow.map((item, index) => (
          <Card
            key={index}
            {...item}
            borderRotated
            contentOrder="text-first"
            contentOffset={index === secondRow.length - 1}
            extraClass={index === secondRow.length - 1 ? "pr-4" : ""}
          />
        ))}
      </div>
    </div>
  );
}
