import { useState, useEffect } from "react";
import a58 from "../assets/58.png";
import a59 from "../assets/59.png";
import a60 from "../assets/60.png";
import a8 from "../assets/8.png";

const testimonials = [
  {
    name: "Clay Boykin",
    title: "Author | Thought Partner | Guide",
    quote:
      "Lorem1 ipsum Lorem1 ipsumLorem1 ipsumLorem1 ipsumLorem1 ipsum Lorem1 ipsumLorem1 ipsum",
    img: a58,
    icons: [a59, a60],
  },
   {
    name: "Clay Boykin2222",
    title: "Author | Thought Partner | Guide",
    quote:
      "Lorem1 ipsum Lorem1 ipsumLorem1 ipsumLorem1 ipsumLorem1 ipsum Lorem1 ipsumLorem1 ipsum22222",
    img: a58,
    icons: [a59, a60],
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-16 text-center font-[Montserrat]">
        {/* Heading */}
        <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold uppercase border-b-4 border-[#D0A151] inline-block mb-4">
          Testimonials
        </h1>
        <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#525252] mb-10">
          Trusted by Leaders Across Industries
        </h3>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 relative">
          {/* Image Card */}
          <div className="relative w-[260px] sm:w-[280px] lg:w-[300px]">
            <div className="bg-[#D0A151] pt-28 pb-4 px-4 rounded-lg relative z-10">
              <h2 className="text-md sm:text-lg font-semibold text-black">
                {testimonial.name}
              </h2>
              <p className="text-sm font-bold text-white">
                {testimonial.title}
              </p>
            </div>
            {/* Overlapping Image */}
            <img
              src={testimonial.img}
              alt="Author"
              className="w-[120px] sm:w-[130px] lg:w-[150px] h-[120px] sm:h-[130px] lg:h-[150px] object-cover rounded-full mx-auto absolute -top-[30px] sm:-top-[50px] lg:-top-[60px] left-1/2 transform -translate-x-1/2 z-20"
            />
          </div>

          {/* Quote Box */}
          <div className="w-full max-w-[900px] px-4">
            <div className="bg-gray-100 pt-12 p-4 rounded-lg mx-auto w-[75%] relative">
              {/* Top Left Quote */}
              <img
                src={testimonial.icons[0]}
                alt="quote start"
                className="w-[24px] sm:w-[30px] object-contain absolute top-4 left-4"
              />

              {/* Quote Text */}
              <p className="text-[14px] sm:text-[16px] text-black text-justify">
                {testimonial.quote}
              </p>
              <br />

              {/* Bottom Right Quote */}
              <img
                src={testimonial.icons[1]}
                alt="quote end"
                className="w-[24px] sm:w-[30px] object-contain absolute bottom-4 right-4"
              />
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Button */}
        <button className="mt-8 px-6 py-2 bg-black text-white rounded-full text-sm sm:text-base">
          More Testimonials
        </button>
      </div>

      {/* Footer */}
      <div className="w-full bg-black">
        <img
          src={a8}
          alt="footer"
          className="w-full h-auto object-cover -mt-6"
        />
      </div>
    </>
  );
}
