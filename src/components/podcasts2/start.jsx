import a1 from "../../assets/podcasts2/1.jpg";
import a2 from "../../assets/podcasts2/2.png";

export default function Start() {
  return (
    <>
      {/* Top margin with white background */}
      <div className="w-full h-[25px] bg-white" />

      {/* Main Section */}
      <div
        className="relative w-full h-[795px] bg-black text-white overflow-hidden"
        style={{
          backgroundImage: `url(${a1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient overlay only at top for 90px */}
        <div className="absolute top-0 left-0 w-full h-[90px] bg-gradient-to-b from-black to-transparent z-0" />

        {/* Content aligned to left half */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-20">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight text-left font-montserrat">
              PODCASTS
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl text-left font-semibold font-montserrat">
              Authentic Talks. Practical Insights. Proven Success.
            </h3>
          </div>
        </div>

        {/* Decorative bottom strip image */}
        <img
          src={a2}
          alt="Decorative Strip"
          className="absolute bottom-0 left-0 w-full h-[62px] object-cover z-10"
        />
      </div>
    </>
  );
}
