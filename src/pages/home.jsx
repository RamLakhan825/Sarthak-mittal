import About from "../components/about.jsx";
import Bad from "../components/bad.jsx";
import Begining from "../components/begining.jsx";
import Blogs from "../components/blogs.jsx";
import Connect from "../components/connect.jsx";
import Contact from "../components/contact.jsx";
import Footer from "../components/footer.jsx";
import Hero from "../components/hero.jsx";
import Legacy from "../components/legacy.jsx";
import Media from "../components/media.jsx";
import Podcasts from "../components/Podcasts.jsx";
import Result from "../components/result.jsx";
import Services from "../components/services.jsx";
import Struggle from "../components/struggle.jsx";
import Success from "../components/success.jsx";
import Testimonials from "../components/testimonials.jsx";
import Why from "../components/why.jsx";



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