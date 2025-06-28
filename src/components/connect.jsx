import img19 from "../assets/19.png";
import img20 from "../assets/20.png";
import img21 from "../assets/21.png";
import img22 from "../assets/22.png";
import img23 from "../assets/23.png";
import img24 from "../assets/24.png";
import img25 from "../assets/25.png";
import footerImg from "../assets/26.png"; // example footer image

export default function Connect() {
  const icons = [img19, img20, img21, img22, img23, img24, img25];

  return (
    <>
    <div className="bg-white py-16 px-4 lg:px-20 text-center">
      <h1 className="text-[#D0A151] text-[60px] font-bold uppercase underline leading-[110px]">
        Connect with me
      </h1>

      <div className="mt-12 max-w-[1345px] mx-auto p-10 rounded-[21px] border-2 border-[#CE9D4B]  space-y-8">
        <p className="text-[28px] font-bold text-[#333]">Connect with Sarthak</p>

        <div className="flex flex-wrap justify-center gap-8">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="w-[146px] h-[146px] border border-[#D0A151] rounded-[11px] flex items-center justify-center"
            >
              <img src={icon} alt={`connect-icon-${index + 1}`} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      
    </div>
    <div>
        <img src={footerImg} alt="footer" className="mx-auto" />
      </div>
      </>
  );
}
