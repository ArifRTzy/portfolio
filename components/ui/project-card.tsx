import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = () => {
  return (
    <div className="mx-4  sm:mx-0 sm:w-[400px] lg:w-[450px] lg:h-[500px] bg-gradient-to-b from-card1 via-card2 to-card3 from-40% via-55% to-85% rounded-lg  p-4 border-about-bor border-2 flex flex-col">
      <Image
        src={"/dummy.png"}
        width={1000}
        height={1000}
        alt="card"
        className="w-full h-60 rounded-md"
      />
      <div className="py-6 flex flex-col gap-2">
        <h1 className="text-white font-semibold text-xl  lg:text-2xl">Suppa</h1>
        <p className="text-card-text lg:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          nesciunt rerum ex.
        </p>
        <div className="flex gap-2">
          <p className="rounded-lg text-white font-medium border-about-bor bg-card-btn border-2 px-2 py-0.5 text-sm">
            html
          </p>
          <p className="rounded-lg text-white font-medium border-about-bor bg-card-btn border-2 px-2  py-0.5 text-sm">
            html
          </p>
          <p className="rounded-lg text-white font-medium border-about-bor bg-card-btn border-2 px-2 py-0.5 text-sm">
            html
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-white flex-1 items-end justify-between">
        <button className="rounded-lg text-white font-medium border-about-bor bg-card-btn border-2 flex justify-center py-1.5 text-sm gap-2 items-center">
          <Github className="w-5 h-5" /> Source
        </button>
        <button className="rounded-lg text-white font-medium border-about-bor bg-card-btn border-2 flex justify-center py-1.5 text-sm gap-2 items-center">
          <ExternalLink className="w-5 h-5" />
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
