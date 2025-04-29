import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"

const Home = () => {
  return (
    <div className="font-inter bg-body">
      <Hero/>
      <About/>
      <TechStack/>
    </div>
  )
}

export default Home
