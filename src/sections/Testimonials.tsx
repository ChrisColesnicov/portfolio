import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

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
    <div>
      <SectionHeader
        eyebrow="Happy (future) Clients"
        title="What Clients (Will) Say About Me"
        description="This could be your review here—let’s make it happen!"
      />
      <div>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name}>
            <Image src={testimonial.avatar} alt={testimonial.name} />
            <div>{testimonial.name}</div>
            <div>{testimonial.position}</div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
