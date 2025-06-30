import a1 from "../assets/31.png";
import a6 from "../assets/6.png"; // Footer image

export default function Legacy() {
  return (
    <>
      <div
        className="relative w-full min-h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white px-4 py-16"
        style={{ backgroundImage: `url(${a1})` }}
      >
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center space-y-6">
          <h1 className="text-[36px] lg:text-[44px] font-bold uppercase text-[#CE9D4B] font-[Montserrat]">
            From Legacy to Leadership
          </h1>

          <p className="text-[18px] lg:text-[20px] leading-[32px] font-[Montserrat] text-justify">
            I was <strong>born in the ruins of a broken empire</strong>. But I chose to <strong>rebuild the Mittal name</strong> — not on
            <strong> inheritance</strong>, but <strong>insight</strong>. Not on <strong>privilege</strong>, but <strong>purpose</strong>.<br /><br />
            This is <strong>just the beginning</strong>. And I’m here to help <strong>others write their own story of</strong><br />
            <strong>reinvention — no matter where they start.</strong>
          </p>

          <button className="mt-4 border-2 border-[#CE9D4B] text-[#CE9D4B] rounded-full px-6 py-2 text-[16px] font-medium hover:bg-[#CE9D4B] hover:text-black transition duration-300">
            View Entire Journey
          </button>
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
