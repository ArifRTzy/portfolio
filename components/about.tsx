import { GraduationCap } from "lucide-react"
import Image from "next/image"

const About = () => {
  return (
    <section className='h-screen'>
        <div className="max-w-7xl border-2 border-about-bor h-[500px] mx-auto rounded-xl bg-[linear-gradient(160deg,#3A3B3E_0%,#242528_50%,#221D20_100%)] py-10 px-14">
            <div className="flex justify-between items-center">
                <h1 className="text-white font-semibold text-4xl">About Me</h1>
                <div className="flex border-about-bor text-about-f-stu border-2 rounded-full justify-center items-center gap-2 text-sm px-4 py-2">
                    <GraduationCap/>
                    <p>SMK Negeri 2 Yogyakarta</p>
                </div>
            </div>
            <div className="">
                
            </div>
        </div>
    </section>
  )
}

export default About
