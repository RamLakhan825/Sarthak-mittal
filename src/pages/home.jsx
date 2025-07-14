import About from "../components/About";
import Bad from "../components/Bad";
import Begining from "../components/Begining";
import Blogs from "../components/Blogs";
import Connect from "../components/Connect";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Legacy from "../components/Legacy";
import Media from "../components/Media";
import Podcasts from "../components/Podcasts";
import Result from "../components/Result";
import Services from "../components/Services";
import Struggle from "../components/Struggle";
import Success from "../components/Success";
import Testimonials from "../components/Testimonials";
import Why from "../components/Why";



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