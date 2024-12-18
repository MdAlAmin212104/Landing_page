
import About from "./HomePage/About";
import Banner from "./HomePage/Banner";
import Card from "./HomePage/Card";
import CardSection from "./HomePage/CardSection";
import FaqSection from "./HomePage/FaqSection";
import Feature from "./HomePage/Feature";
import Solution from "./HomePage/Solution";
import Testimonials from "./HomePage/Testimonials";
import Works from "./HomePage/Works";

export default function Home() {
  return (
    <div className="bg-[#f3f7fb]">
      <Banner/>
      <Feature/>
      <About/>
      <Solution/>
      <Testimonials/>
      <Works/>
      <Card/>
      <CardSection/>
      <FaqSection/>
    </div>
  );
}
