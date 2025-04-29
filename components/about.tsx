import { GraduationCap } from "lucide-react"
import Image from "next/image"

const About = () => {
  return (
    <section className='mt-10 xl:mt-16 sm:container px-4 md:px-0 mx-auto relative'>
              <div className="absolute z-0 left-1/3 -top-52 -translate-x-1/4 h-[1000px] w-[400px] rotate-[130deg]  bg-white/25 opacity-30 blur-3xl rounded-full md:flex hidden"></div>
        <div className="max-w-6xl 2xl:max-w-7xl border-2 border-about-bor mx-auto rounded-xl bg-[linear-gradient(165deg,#3A3B3E_0%,#242528_50%,#221D20_100%)] 2xl:py-10 md:py-8 md:px-10 2xl:px-14 py-6 px-8 relative z-10">
            <div className="abt-ttl:flex justify-between items-center">
                <h1 className="text-white font-semibold text-2xl  md:text-3xl  xl:text-4xl">About Me</h1>
                <div className="flex border-about-bor text-about-f-stu border-2 rounded-full justify-center items-center gap-2 text-sm xl:px-4 xl:py-2 md:px-3 md:py-1.5 px-2 py-1">
                    <GraduationCap/>
                    <p>SMK Negeri 2 Yogyakarta</p>
                </div>
            </div>
            <div className="2xl:mt-8 md:mt-6 mt-4 md:flex gap-6 xl:gap-10 w-full">
                <Image src={'/dummy.png'} width={500} height={500} alt="about-img" className="rounded-lg abt-img:h-48 abt-img:w-48 md:h-fit aspect-square"/>
                <div className="flex flex-col gap-2  md:gap-4 xl:gap-8 text-about-text w-full md:text-lg  xl:text-xl  2xl:text-2xl mt-2 sm:mt-0">
                  <p>I am currently a 12th-grade student at SMK Negeri 2 Yogyakarta, pursuing a major in Sistem Informasi Jaringan dan Aplikasi (SIJA). This program equips me with skills in computer network management, cybersecurity, and software application development, providing a strong foundation in IT infrastructure and programming.</p>
                  <p>Proficient in frontend technologies such as HTML, CSS, React, Next.js, and Tailwind CSS for creating responsive user interfaces, and backend technologies like Node.js, Express.js for building servers and APIs, with MySQL and MongoDB for database management.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
