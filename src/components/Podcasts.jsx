import a74 from "../assets/74.png"; // Make sure you have 74.png in assets
import a8 from "../assets/8.png";

export default function Podcasts() {
  return (
    <>
    <div className="bg-white w-full px-6 lg:px-20 py-16 font-[Montserrat]">
      {/* Heading */}
      {/* Heading */}
<div className="flex justify-center mb-16">
  <h1 className="text-[#D0A151] text-[40px] md:text-[60px] font-bold uppercase border-b-[4px] border-[#D0A151] inline-block">
    Podcasts
  </h1>
</div>


      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left - Image Section */}
        <div className="relative w-full lg:w-[50%] flex justify-center">
          {/* Background Block */}
          <div className="absolute top-8 right-4 bottom-12 w-[90%] h-[100%] bg-[#D0A15169] z-0 rounded-lg"></div>

          {/* Main Image */}
          <img
            src={a74}
            alt="Podcast Host"
            className="relative z-10 border-[6px] border-[#D0A151] w-[90%] max-w-[684px] h-auto object-cover"
          />
        </div>

        {/* Right - Text & Buttons */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center gap-6">
          <h2 className="text-[#15152A] text-[32px] md:text-[48px] lg:text-[64px] xl:text-[80px] font-semibold leading-tight">
            A podcast for makers and entrepreneurs
          </h2>
          <p className="text-[#6D6D6D] text-[18px] md:text-[20px] leading-[1.7]">
            Welcome to our podcast series dedicated to makers and entrepreneurs. Join industry leaders and innovators as they share insights, stories, and practical advice to inspire your journey. Whether you're building a startup or launching your next big idea, these conversations offer valuable guidance and motivation to help you succeed.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-4">
            <button className="bg-[#D0A151] text-white px-8 py-4 rounded-full text-[18px] md:text-[22px] font-semibold uppercase">
              Watch Podcast
            </button>
            <button className="border-[3px] border-[#D0A151] text-[#D0A151] px-8 py-4 rounded-full text-[18px] md:text-[22px] font-semibold uppercase">
              Join for a podcast
            </button>
          </div>
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
