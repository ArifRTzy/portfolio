import Image from "next/image";
import { Sun, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-screen mx-auto">
      <div className="flex justify-between mx-2 lg:mx-10 xl:mx-16 bg-body relative z-20">
        <div className="flex items-center">
          <Image
            src={"/icon(2).png"}
            width={1000}
            height={600}
            alt="web icon"
            className="h-14 w-14 lg:w-20 lg:h-20"
          />
          <p className="text-white font-bold text-lg lg:text-2xl">
            Arif Ramadhani
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Sun className="text-white h-6 w-7 lg:w-7 lg:h-7 cursor-pointer" />
          <Github className="text-white h-6 w-7 lg:w-7 lg:h-7 cursor-pointer" />
        </div>
      </div>

      <div className="bg-grid-pattern bg-grid-size bg-grid-crop h-96 md:h-[580px] relative md:mx-0 mx-4">
        <div className="absolute z-10 left-1/2 -top-4 -translate-x-1/4 h-[500px] w-[300px] bg-white/25 opacity-30 blur-3xl rounded-full md:flex hidden"></div>
        <div className="flex flex-col items-center justify-center h-full gap-4  md:gap-6">
          <p className="text-enthu py-1 px-4 bg-enthu-bg border-border border-2 rounded-full text-sm font-semibold">
            Web Enthusiast
          </p>
          <h1 className="text-white text-4xl  sm:text-5xl  md:text-7xl 2xl:text-8xl font-bold  lg:font-extrabold">
            <span className="bg-gradient-to-r from-span-g1 via-span-g2 to-span-g3 bg-clip-text text-transparent">
              Hallo, I&apos;m{" "}
            </span>
            Arif
          </h1>
          <p className="text-fe-wannabe text-base  sm:text-xl  md:text-2xl 2xl:text-3xl font-medium text-center">
            Just a student who wannabe a frontend developer
          </p>
          <button className="text-base 2xl:text-lg bg-gradient-to-r from-cv-g1 to-cv-g2 text-white rounded-full py-1.5 px-3  sm:py-2 sm:px-4  md:py-3 md:px-6 font-medium cursor-pointer">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
