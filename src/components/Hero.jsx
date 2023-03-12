import React, { useEffect } from "react";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="lg:pt-10 pt-16 lg:h-screen h-[80vh] w-full">
      <div className="hero-wrapper h-full w-full relative">
        <div className="absolute top-1/2 -translate-y-1/2  flex lg:justify-start justify-center w-full">
          <article className="flex flex-col lg:w-[40rem] md:w-[28rem] w-full gap-3 xl:pl-[5%] px-8">
            <h2
              className="font-Abril lg:text-5xl md:text-3xl text-2xl lg:text-left text-center leading-snug text-white"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              We don't just provide services, We fight for justice.
            </h2>
            <p
              className="text-color-gray-100 font-light md:text-lg text-sm lg:text-left text-center"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              We provide you the best legal services to First Nations and
              Aboriginal organizations.
            </p>
            <div
              className="flex items-center gap-6 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <a
                href="#contact"
                className="border-[3px] text-white border-color-gray-200 md:px-5 px-3 py-2 rounded-md font-medium tracking-wide hover:bg-color-gray-200 duration-300 md:text-base text-sm"
              >
                Hire Us
              </a>
              <a
                href="#about"
                className="border border-transparent text-white bg-color-gray-200 md:px-5 px-3 py-2 rounded-md font-medium tracking-wide hover:border-[3px] hover:bg-transparent duration-200 hover:border-color-gray-200 md:text-base text-sm"
              >
                Learn More
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
