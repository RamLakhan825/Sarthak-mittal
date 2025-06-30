import a74 from "../assets/74.png";
import a8 from "../assets/8.png";

export default function Podcasts() {
  return (
    <>
      <div className="bg-white w-full px-4 lg:px-16 py-12 font-[Montserrat]">
        {/* Heading */}
        <div className="flex justify-center mb-12">
          <h1 className="text-[#D0A151] text-[28px] md:text-[40px] font-bold uppercase border-b-[3px] border-[#D0A151] inline-block">
            Podcasts
          </h1>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left - Image Section */}
          <div className="relative w-full lg:w-[50%] flex justify-center">
            <div className="absolute top-6 right-3 bottom-10 w-[90%] h-full bg-[#D0A15169] z-0 rounded-lg"></div>

            <img
              src={a74}
              alt="Podcast Host"
              className="relative z-10 border-[4px] border-[#D0A151] w-[90%] max-w-[600px] h-auto object-cover"
            />
          </div>

          {/* Right - Text & Buttons */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center gap-4">
            <h2 className="text-[#15152A] text-[24px] md:text-[32px] font-semibold leading-snug">
              A podcast for makers and entrepreneurs
            </h2>
            <p className="text-[#6D6D6D] text-[16px] md:text-[17px] leading-[1.6]">
              Welcome to our podcast series dedicated to makers and entrepreneurs. Join industry leaders and innovators as they share insights, stories, and practical advice to inspire your journey. Whether you're building a startup or launching your next big idea, these conversations offer valuable guidance and motivation to help you succeed.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <button className="bg-[#D0A151] text-white px-6 py-3 rounded-full text-[16px] md:text-[18px] font-semibold uppercase">
                Watch Podcast
              </button>
              <button className="border-[2px] border-[#D0A151] text-[#D0A151] px-6 py-3 rounded-full text-[16px] md:text-[18px] font-semibold uppercase">
                Join for a podcast
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Decorative Image */}
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
