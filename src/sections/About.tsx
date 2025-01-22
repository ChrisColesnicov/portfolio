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
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "MySQL",
    iconType: MySQLIcon,
  },
  {
    title: "TailwindCSS",
    iconType: TailwindIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Cars",
    emoji: "🚗",
  },
  {
    title: "Travel",
    emoji: "🌍",
  },
  {
    title: "Tech",
    emoji: "📱",
  },
  {
    title: "Cooking",
    emoji: "🍳",
  },
  {
    title: "Food",
    emoji: "🌮",
  },
  {
    title: "Music",
    emoji: "🎧",
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
            height={200}
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
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Beyond the Code</h3>
            <p>Explore my interests and hobbies beyond the coding ground.</p>
          </div>
          <div>
            {hobbies.map((hobby) => (
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <Image src={mapImage.src} alt="Local map" width={200} height={200} />
          <Image
            src={smileMemoji.src}
            alt="smile memoji"
            width={200}
            height={200}
          />
        </Card>
      </div>
    </div>
  );
};
