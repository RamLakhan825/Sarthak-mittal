import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import a58 from "../assets/58.png"; // Testimonial author image
import a59 from "../assets/59.png"; // Top-left icon
import a60 from "../assets/60.png"; // Bottom-right icon
import a8 from "../assets/8.png";   // Footer Decorative Image (used at bottom)

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
    name: "Clay Boykin",
    title: "Author | Thought Partner | Guide",
    quote:
      "Lorem1 ipsum Lorem1 ipsumLorem1 ipsumLorem1 ipsumLorem1 ipsum Lorem1 ipsumLorem1 ipsum",
    img: a58,
    icons: [a59, a60],
  },
  {
    name: "Clay Boykin",
    title: "Author | Thought Partner | Guide",
    quote:
      "Lorem1 ipsum Lorem1 ipsumLorem1 ipsumLorem1 ipsumLorem1 ipsum Lorem1 ipsumLorem1 ipsum",
    img: a58,
    icons: [a59, a60],
  },
  {
    name: "Clay Boykin",
    title: "Author | Thought Partner | Guide",
    quote:
      "Lorem1 ipsum Lorem1 ipsumLorem1 ipsumLorem1 ipsumLorem1 ipsum Lorem1 ipsumLorem1 ipsum",
    img: a58,
    icons: [a59, a60],
  },
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

  return (
    <>
      <div className="bg-white py-16 px-6 lg:px-20 text-center relative">
        <h1 className="text-[55px] md:text-[79px] font-bold uppercase mb-6 border-b-[6px] border-[#D0A151] inline-block">
          Testimonials
        </h1>
        <h3 className="text-[28px] md:text-[45px] text-[#525252] capitalize mb-16">
          Trusted by Leaders Across industries
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Left Part */}
          <div className="relative w-[480px] h-[440px] flex items-start justify-center mt-12 lg:mt-24">
            <img
              src={testimonials[index].img}
              alt="Profile"
              className="w-[280px] h-[280px] object-cover rounded-full absolute -top-[140px] z-10"
            />
            <div className="bg-[#D0A151] pt-[160px] p-12 rounded-lg w-full h-full text-center z-0">
              <h2 className="text-[24px] font-medium text-black">
                {testimonials[index].name}
              </h2>
              <p className="text-[18px] font-bold text-white mt-2">
                {testimonials[index].title}
              </p>
            </div>
          </div>

          {/* Right Part */}
          <div className="grid grid-rows-3 max-w-[700px] w-full gap-4">
            {/* Row 1 - Top Left Icon */}
            <div className="row-span-1 flex justify-start">
              <img
                src={testimonials[index].icons[0]}
                alt="icon"
                className="w-[90px] h-[90px] object-contain"
              />
            </div>

            {/* Row 2 - Quote */}
            <div className="row-span-1 flex justify-center items-center text-center">
              <p className="text-[24px] md:text-[27px] text-black leading-[1.6]">
                {testimonials[index].quote}
              </p>
            </div>

            {/* Row 3 - Bottom Right Icon */}
            <div className="row-span-1 flex justify-end">
              <img
                src={testimonials[index].icons[1]}
                alt="icon"
                className="w-[90px] h-[90px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-black" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-12 px-10 py-3 bg-black text-white text-lg rounded-full">
          More Testimonials
        </button>
      </div>

      {/* Footer Decorative Image */}
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
