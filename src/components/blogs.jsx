import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import a76 from "../assets/76.png";
import a8 from "../assets/8.png";

export default function Blogs() {
  const blogData = [
    {
      color: "linear-gradient(135deg, #FB923C 0%, #EC4899 100%)",
      category: "Innovation",
      readTime: "5 min read",
      author: "Sarthak Mittal",
      date: "August 21, 2023",
      title: "Stop Ignoring These 7 Inspiring Innovations & How to Do It",
      summary:
        "Discover innovations reshaping industries and learn how to implement them effectively.",
    },
    {
      color: "linear-gradient(135deg, #4ADE80 0%, #3B82F6 100%)",
      category: "Management",
      readTime: "7 min read",
      author: "Sarthak Mittal",
      date: "Jan 10, 2024",
      title: "To carry out put into practice management",
      summary:
        "Practical strategies to drive results and foster growth.",
    },
    {
      color: "linear-gradient(135deg, #FBBF24 0%, #EF4444 100%)",
      category: "Customer Success",
      readTime: "6 min read",
      author: "Sarthak Mittal",
      date: "Jul 10, 2024",
      title: "B Involves handling over to Customer, Potential",
      summary:
        "Master customer handoffs for lasting relationships.",
    },
  ];

  return (
    <>
      <div className="w-full bg-white py-14 px-4 lg:px-16 font-[Montserrat]">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-block bg-[#FF800033] text-[#FDAA56] font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-wide mb-3">
            Latest Insight
          </div>
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#D0A151] mb-3 underline">
            My Blogs & Insights
          </h2>
          <p className="max-w-[720px] mx-auto text-black text-[15px] leading-[26px]">
            Thought leadership articles and insights to help navigate modern business challenges.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="border-[2px] border-[#D0A151] bg-black rounded-xl overflow-hidden"
            >
              <div
                className="h-[200px] p-4 flex items-start justify-between"
                style={{ background: blog.color }}
              >
                <button className="bg-white text-black text-xs px-3 py-1 rounded-full font-semibold">
                  {blog.category}
                </button>
                <button className="bg-black/60 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {blog.readTime}
                </button>
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-xs px-5 mt-4">
                <div className="flex items-center gap-1">
                  <FaUser />
                  {blog.author}
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendarAlt />
                  {blog.date}
                </div>
              </div>

              <div className="text-[#FDAA56] font-semibold text-[16px] px-5 mt-3 leading-tight">
                {blog.title}
              </div>
              <p className="text-white text-[14px] px-5 mt-3 leading-[22px]">
                {blog.summary}
              </p>

              <div className="text-[#FDAA56] font-semibold flex items-center gap-2 px-5 py-4 mt-1 cursor-pointer hover:underline text-sm">
                Read More <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full mt-10 flex justify-center px-4">
        <button className="text-[#FDAA56] border-2 border-[#FDAA56] rounded-full px-6 py-3 text-sm font-bold uppercase">
          Visit My Blog and Learn More About Entrepreneurship
        </button>
      </div>

      {/* Author Footer Card */}
      <div className="w-full flex justify-end px-4">
        <div className="bg-black flex items-center gap-4 p-3 pr-0 rounded-l-xl w-[260px] mt-8 mb-10">
          <img
            src={a76}
            alt="Sarthak Mittal"
            className="w-[60px] h-[60px] rounded-full"
          />
          <div>
            <h1 className="text-[#FDAA56] font-bold text-[16px]">
              Sarthak Mittal
            </h1>
            <h2 className="text-white text-xs">Author</h2>
          </div>
        </div>
      </div>

      {/* Footer Decorative */}
      <div className="w-full bg-black">
        <img
          src={a8}
          alt="Footer Decorative"
          className="w-full h-auto object-cover -mt-8"
        />
      </div>
    </>
  );
}
