import {
  Hero,
  Slider,
  News,
  Socials,
  Testimonials,
  About,
} from "../components";

export default function Home() {
  return (
    <div>
      {/* <Slider /> */}
      <Hero />
      <About />
      <News />
      <Socials />
      <Testimonials />
    </div>
  );
}
