import { ImTab } from "react-icons/im";
import a1 from "../../assets/podcasts2/3.png";
import a2 from "../../assets/podcasts2/4.png";
import a3 from "../../assets/podcasts2/5.png";
import a4 from "../../assets/podcasts2/6.png";
import a5 from "../../assets/podcasts2/7.png";
import a6 from "../../assets/podcasts2/8.png";
import a7 from "../../assets/podcasts2/9.png";

const podcastData = [
  {
    img: a1,
    title: "Learn About Coworking Space",
    date: "August 21, 2023",
    desc:
      "The Future of Work: Insights on Coworking Spaces with CEOs Benjamin Franklin & Sarthak Mittal Join us in this enlightening discussion with CEOs Benjamin Franklin and Sarthak Mittal as they explore the future of work and the rising trend of coworking spaces...",
  },
  {
    img: a2,
    title: "Hotel Worker to Successful Dog Food CEO",
    date: "August 21, 2023",
    desc:
      "From Hotel Worker to Successful Dog Food CEO | Podcast with Balraj Jhala by CEO Sarthak Mittal. Hey everyone, CEO Sarthak here with another inspiring podcast episode...",
  },
  {
    img: a3,
    title: "Cloth Man of India",
    date: "August 21, 2023",
    desc:
      "Today, I have an incredible guest, Ritesh Agarwal, known as 'The Cloth Man of India.' In this episode, we dive into his journey, the challenges he faced...",
  },
  {
    img: a4,
    title: "Bad Talks",
    date: "August 21, 2023",
    desc:
      "Join host Sarthak Mittal in this exciting podcast episode as he sits down with CEO Soham Mandal, who defied the odds by achieving incredible success without attending college...",
  },
  {
    img: a5,
    title: "India’s Youngest Coder & Founder",
    date: "August 21, 2023",
    desc:
      "Today, I have an incredible guest, one of India's youngest and brightest minds in the tech world. Join us as we delve into the remarkable journey...",
  },
  {
    img: a6,
    title: "Setback to CEO",
    date: "August 21, 2023",
    desc:
      "Hey everyone, CEO Sarthak here with another inspiring podcast episode! Today, I have an incredible guest, Kaushal Modi, Co-founder and Head of Marketing & Communication...",
  },
  {
    img: a7,
    title: "Becoming a Successful Legal Entrepreneur",
    date: "August 21, 2023",
    desc:
      "Today, I have an incredible guest, Akhil Mishra, the co-founder of MTLegal Team. In this episode, we dive into his journey from starting a legal firm...",
  },
];

export default function Podcasts21() {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-12">
      <h1 className="text-center text-4xl md:text-5xl font-bold uppercase text-[#D0A151] underline mb-12 font-montserrat">
        Podcasts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {podcastData.map((podcast, index) => {
          const isLastCard = index === podcastData.length - 1;
          return (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border-[3px] shadow-lg w-full max-w-sm mx-auto bg-black ${
                isLastCard && podcastData.length % 3 === 1 ? "lg:col-span-full" : ""
              }`}
              style={{
                borderImage:
                  "linear-gradient(155.88deg, #C27C06 0%, #613E03 50%, #000000 100%) 1",
                borderImageSlice: 1,
              }}
            >
              {/* Image */}
              <img
                src={podcast.img}
                alt="Podcast"
                className="w-full h-[250px] object-cover"
              />

              {/* Card Content */}
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center text-sm text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-[#CE9D4B] text-xs font-bold">
                      SM
                    </div>
                    <span>Sarthak Mittal</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ImTab className="text-[#CE9D4B]" />
                    <span>{podcast.date}</span>
                  </div>
                </div>

                <h2 className="text-[#CE9D4B] text-lg font-bold">
                  {podcast.title}
                </h2>

                <p className="text-white text-sm line-clamp-5">{podcast.desc}</p>

                <div className="text-right">
                  <span className="text-sm text-white cursor-pointer hover:underline">
                    Read more →
                  </span>
                </div>

                <button className="mt-1 px-3 py-1.5 border border-[#CE9D4B] text-[#CE9D4B] text-sm rounded bg-black hover:bg-[#CE9D4B] hover:text-black transition-all duration-200">
                  Browse podcast ↗
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
