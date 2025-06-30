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
      <div className="bg-white py-12 px-6 lg:px-16 text-center font-[Montserrat]">
        <h1 className="text-[40px] font-bold uppercase border-b-4 border-[#D0A151] inline-block mb-4">
          Testimonials
        </h1>
        <h3 className="text-[20px] text-[#525252] mb-10">
          Trusted by Leaders Across Industries
        </h3>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Image Card */}
          <div className="relative w-[300px] h-[300px]">
            <img
              src={testimonial.img}
              alt="Author"
              className="w-[150px] h-[150px] object-cover rounded-full mx-auto absolute -top-20 left-1/2 transform -translate-x-1/2"
            />
            <div className="bg-[#D0A151] mt-20 pt-20 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-black">
                {testimonial.name}
              </h2>
              <p className="text-sm font-bold text-white">{testimonial.title}</p>
            </div>
          </div>

          {/* Quote */}
          <div className="max-w-md text-center">
            <img
              src={testimonial.icons[0]}
              alt="quote start"
              className="w-[40px] mx-auto mb-2"
            />
            <p className="text-[16px] text-black">{testimonial.quote}</p>
            <img
              src={testimonial.icons[1]}
              alt="quote end"
              className="w-[40px] mx-auto mt-2"
            />
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
        <button className="mt-8 px-6 py-2 bg-black text-white rounded-full">
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
