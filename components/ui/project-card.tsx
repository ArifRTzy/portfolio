import Image from "next/image"

const ProjectCard = () => {
  return (
    <div className='w-96 h-[400px] bg-gradient-to-b from-card1 via-card2 to-card3 from-40% via-55% to-85% rounded-lg  p-2 border-about-bor border-2'>
      <Image src={'/dummy.png'} width={1000} height={1000} alt="card" className="w-full h-48 rounded-md"/>
      <div className="">
        <h1 className="text-white font-semibold text-xl">Suppa</h1>
        <p></p>
        <div className="">
            <p></p>
        </div>
      </div>
      <div className=""></div>
    </div>
  )
}

export default ProjectCard
