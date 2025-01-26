import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "Aspiring Client @ Future Inc.",
    text: "I can't wait to work with Chris! If his portfolio is anything to go by, our next project will be a masterpiece.",
    avatar: memojiAvatar1,
  },
  {
    name: "Jane Smith",
    position: "CEO @ Imaginary Startups",
    text: "Chris's imaginary work is already blowing my mind. I just know my website will be stunning when we collaborate for real!",
    avatar: memojiAvatar2,
  },
  {
    name: "Chris Taylor",
    position: "Visionary @ The Future",
    text: "Chris hasn't built my website yet, but judging by his portfolio, I’m confident it’s going to be the best thing ever. Highly recommended (in advance)!",
    avatar: memojiAvatar3,
  },
  {
    name: "Sophia Green",
    position: "Director @ Yet-to-Exist Company",
    text: "If I had hired Chris, I’m sure my website would be clean, functional, and downright amazing. Future me is very happy with this decision!",
    avatar: memojiAvatar4,
  },
  {
    name: "Liam Carter",
    position: "Marketing Guru @ Soon-To-Be-Successful",
    text: "I'm already imagining the incredible results Chris will deliver. It’s like he’s the developer I’ve been waiting for all along.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy (future) Clients"
          title="What Clients (Will) Say About Me"
          description="This could be your review here—let’s make it happen!"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
