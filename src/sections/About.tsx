import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import topPicksCover from "@/assets/images/witcher-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import MySQLIcon from "@/assets/icons/sql-database.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";

const toolboxItems = [
  {
    title: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    title: "HTML5",
    icon: <HTMLIcon />,
  },
  {
    title: "CSS3",
    icon: <CSSIcon />,
  },
  {
    title: "React",
    icon: <ReactIcon />,
  },
  {
    title: "Github",
    icon: <GithubIcon />,
  },
  {
    title: "Typescript",
    icon: <TypescriptIcon />,
  },
  {
    title: "MySQL",
    icon: <MySQLIcon />,
  },
  {
    title: "TailwindCSS",
    icon: <TailwindIcon />,
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="Meet Your Developer"
        description="Find out who I am, what I create, and what I love. "
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Top Picks</h3>
            <p>Books, Games, and more I enjoy.</p>
          </div>
          <Image
            src={topPicksCover.src}
            width={200}
            height={400}
            alt="The Witcher Cover"
          />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Take a look at the technologies and tools I use to create my work.
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
