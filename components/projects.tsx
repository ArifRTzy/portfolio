import ProjectCard from "./ui/project-card"

const Projects = () => {
  return (
<section className='py-16  md:py-20 lg:py-28 bg-black border-y-2 border-about-bor relative'>
    <h1 className='bg-gradient-to-b text-center from-h1-black1 to-h1-black2 bg-clip-text text-2xl  md:text-3xl  lg:text-4xl font-semibold from-15% text-transparent'>My Projects</h1>
    <div className="absolute z-10 left-1/3 top-40 lg:h-[400px] lg:w-[700px] h-[300px] w-[500px] bg-white/35 opacity-30 blur-3xl rounded-full md:flex hidden"></div>
    <div className="flex flex-wrap gap-10 justify-center mt-16 relative z-10">
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    </div>
</section>
  )
}

export default Projects
