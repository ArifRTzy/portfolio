import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

const Home = () => {
  return (
    <div className="font-inter bg-body">
      <Hero/>
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
