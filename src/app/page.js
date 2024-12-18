
import About from "./HomePage/About";
import Banner from "./HomePage/Banner";
import Card from "./HomePage/Card";
import CardSection from "./HomePage/CardSection";
import Feature from "./HomePage/Feature";
import Testimonials from "./HomePage/Testimonials";
import Works from "./HomePage/Works";

export default function Home() {
  return (
    <div className="bg-[#f3f7fb]">
      <Banner/>
      <Feature/>
      <About/>
      <Testimonials/>
      <Works/>
      <Card/>
      <CardSection/>
    </div>
  );
}
