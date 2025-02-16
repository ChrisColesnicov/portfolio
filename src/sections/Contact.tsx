import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let’s build something extraordinary together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Got a project in mind? Let’s connect and see how we can bring
                your vision to life and help you reach your goals. <br /> Not
                decided yet ? Take a look at my resume first !
              </p>
            </div>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="text-white bg-gray-900 inline-flex items-center px-6 md:px-8 h-12 rounded-xl gap-2 w-max border border-gray-900 md:text-lg text-nowrap"
              aria-label="Open mail client"
            >
              <span className="font-semibold">Get In Touch</span>
              <ArrowUpRightIcon className="size-4 md:size-5 lg:size-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
