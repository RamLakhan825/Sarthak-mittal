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
        "Discover the revolutionary innovations that are reshaping industries and learn how to implement them effectively.",
    },
    {
      color: "linear-gradient(135deg, #4ADE80 0%, #3B82F6 100%)",
      category: "Management",
      readTime: "7 min read",
      author: "Sarthak Mittal",
      date: "Jan 10, 2024",
      title: "To carry out put into practice management",
      summary:
        "Practical strategies for implementing management principles that drive results and foster organizational growth.",
    },
    {
      color: "linear-gradient(135deg, #FBBF24 0%, #EF4444 100%)",
      category: "Customer Success",
      readTime: "6 min read",
      author: "Sarthak Mittal",
      date: "Jul 10, 2024",
      title: "B Involves handling over to Customer, Potential",
      summary:
        "Master the art of customer handoffs and unlock the potential for lasting business relationships.",
    },
  ];

  return (
    <>
      <div className="w-full bg-white py-16 px-6 lg:px-20 font-[Montserrat]">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-block bg-[#FF800033] text-[#FDAA56] font-bold text-sm px-6 py-2 rounded-full uppercase tracking-wider mb-4">
            Latest Insight
          </div>
          <h2 className="text-[40px] md:text-[60px] font-bold text-[#D0A151] mb-4 underline">
            My Blogs & Insights
          </h2>
          <p className="max-w-[768px] mx-auto text-black text-[18px] leading-[32px]">
            Thought leadership articles and strategic insights to help you
            navigate the complexities of modern business.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="border-[3px] border-[#D0A151] bg-black rounded-xl overflow-hidden"
            >
              <div
                className="h-[256px] p-4 flex items-start justify-between"
                style={{ background: blog.color }}
              >
                <button className="bg-white text-black text-sm px-3 py-1 rounded-full font-semibold">
                  {blog.category}
                </button>
                <button className="bg-black/60 text-white text-sm px-3 py-1 rounded-full font-semibold">
                  {blog.readTime}
                </button>
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-sm px-6 mt-4">
                <div className="flex items-center gap-2">
                  <FaUser />
                  {blog.author}
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  {blog.date}
                </div>
              </div>

              <div className="text-[#FDAA56] font-bold text-[20px] px-6 mt-4 leading-tight">
                {blog.title}
              </div>
              <p className="text-white text-[16px] px-6 mt-4 leading-[26px]">
                {blog.summary}
              </p>

              <div className="text-[#FDAA56] font-bold flex items-center gap-2 px-6 py-4 mt-2 cursor-pointer hover:underline">
                Read More <FaArrowRight />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button Only (keep inside padding) */}
        
      </div>
      <div className="w-full mt-12 flex justify-center">
  <button className="text-[#FDAA56] border-2 border-[#FDAA56] rounded-full px-8 py-4 text-[16px] font-bold uppercase">
    Visit My Blog and Learn More About Entrepreneurship
  </button>
</div>


      {/* Author Footer Card outside padding to avoid right space */}
      <div className="w-full flex justify-end">
        <div className="bg-black flex items-center gap-6 p-4 pr-0 rounded-l-xl w-[275px] mb-[40px]">
          <img
            src={a76}
            alt="Sarthak Mittal"
            className="w-[75px] h-[75px] rounded-full"
          />
          <div>
            <h1 className="text-[#FDAA56] font-bold text-[18px]">Sarthak Mittal   </h1>
            <h2 className="text-white text-sm">Author</h2>
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
                  <img
                    src={a8}
                    alt="Footer Decorative"
                    className="w-full h-auto object-cover -mt-10"
                  />
                </div>
    </>
  );
}
