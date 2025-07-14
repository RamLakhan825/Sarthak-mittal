import About from "../components/About.jsx";
import Bad from "../components/Bad.jsx";
import Begining from "../components/Begining.jsx";
import Blogs from "../components/Blogs.jsx";
import Connect from "../components/Connect.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Legacy from "../components/Legacy.jsx";
import Media from "../components/Media.jsx";
import Podcasts from "../components/Podcasts.jsx";
import Result from "../components/Result.jsx";
import Services from "../components/Services.jsx";
import Struggle from "../components/Struggle.jsx";
import Success from "../components/Success.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Why from "../components/Why.jsx";



export default function Home(){
    return (
        <>
            <Hero></Hero>
      <About></About>
      <Success/>
      <Result></Result>
      <Connect/>
      <Begining/>
      <Legacy/>
      <Bad/>
      <Services/>
      <Media/>
      <Testimonials/>
      <Struggle/>
      <Podcasts/>
      <Contact/>
      <Blogs/>
      <Why/>
      <Connect/>
      <Footer/>
        </>
    );
}