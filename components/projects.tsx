import ProjectCard from "./ui/project-card"

const Projects = () => {
  return (
<section className='py-20 bg-black border-y-2 border-about-bor h-screen'>
    <h1 className='bg-gradient-to-b text-center from-h1-black1 to-h1-black2 bg-clip-text text-4xl font-semibold from-15% text-transparent'>My Projects</h1>
    <div className="">
    <ProjectCard/>
    </div>
</section>
  )
}

export default Projects
