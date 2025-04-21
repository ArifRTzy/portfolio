import Image from "next/image"
import { Sun, Github } from "lucide-react"

const Hero = () => {
  return (
    <section className='h-screen mx-auto'>
        <div className="flex justify-between mx-2 lg:mx-10 xl:mx-16 bg-body">
          <div className="flex items-center">
            <Image src={"/icon(2).png"} width={1000} height={600} alt="web icon" className="h-14 w-14 lg:w-20 lg:h-20"/>
            <p className="text-white font-bold text-lg lg:text-2xl">Arif Ramadhani</p>
          </div>
          <div className="flex items-center gap-4">
            <Sun className="text-white h-6 w-7 lg:w-7 lg:h-7 cursor-pointer"/>
            <Github className="text-white h-6 w-7 lg:w-7 lg:h-7 cursor-pointer"/>
          </div>
        </div>

        <div className="bg-[length:20px_20px] 
            bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_2px),
                linear-gradient(to_bottom,#FFFFFF_1px,transparent_2px)] h-full">
haha
        </div>
    </section>
  )
}

export default Hero
