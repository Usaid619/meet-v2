import Projects from "./landing-page/Projects";
import Hero from "./landing-page/Hero";
import About from "./landing-page/About";

export default function page() {
  return (
    <div className="snap-y snap-mandatory">
      <Hero/>
      {/* <Projects/>
      <About/> */}
    </div>
  )
}
