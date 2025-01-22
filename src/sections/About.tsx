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
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

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
    <div className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Meet Your Developer"
          description="Find out who I am, what I create, and what I love. "
        />
        <div className="mt-16">
          <Card className="h-[320px]">
            <CardHeader
              title="My Top Picks"
              description="Books, Games, Franchises (and more) I enjoy."
            />
            <div className="w-50 mx-auto mt-6">
              <Image
                src={topPicksCover.src}
                width={400}
                height={400}
                alt="The Witcher Cover"
                className="size-50 rounded-3xl"
              />
            </div>
          </Card>
          <Card className="h-[320px] pt-0 px-0">
            <CardHeader
              title="My Toolbox"
              description="Take a look at the technologies and tools I use to create my
                work."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="" />
            <ToolboxItems items={toolboxItems} className="flex-row-reverse" />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the coding ground."
            />
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
            <Image
              src={mapImage.src}
              alt="Local map"
              width={200}
              height={200}
            />
            <Image
              src={smileMemoji.src}
              alt="smile memoji"
              width={200}
              height={200}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};
