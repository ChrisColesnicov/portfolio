import nodasLanding from "@/assets/images/nodas.png";
import spiceOdysseyLanding from "@/assets/images/spice-odyssey.png";
import youflimLanding from "@/assets/images/youflim.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Youflim",
    year: "2024",
    title: "Netflix-like Platform",
    results: [
      { title: "User-friendly interface with responsive design" },
      { title: "All-in-one search feature" },
      { title: "Administrator access available to manage content" },
    ],
    link: "#",
    image: youflimLanding,
  },
  {
    company: "Nodas Gaming",
    year: "2024",
    title: "Gaming Search Engine",
    results: [
      { title: "Find new games to play to" },
      { title: "Browse by categories or features" },
      { title: "Metadata from external API" },
    ],
    link: "#",
    image: nodasLanding,
  },
  {
    company: "Spice Odyssey",
    year: "2024",
    title: "Restaurants Exploration Tool",
    results: [
      { title: "Dynamic map to search places" },
      { title: "Restaurant list with filters" },
      { title: "Custom user interface design" },
    ],
    link: "#",
    image: spiceOdysseyLanding,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="Take a look at some of my previous projects and apps !"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-12">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pb-0 md:px-10 pt-8 md:pt-12 lg:pt-16 lg:px-20 flex flex-col justify-between min-h-[20rem] md:min-h-[25rem]"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm  text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/70"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white/50 text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Available soon</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 rounded-xl object-cover object-top h-48 md:h-96 w-full md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
