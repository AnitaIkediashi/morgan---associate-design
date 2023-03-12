import React, { useEffect } from "react";
import AboutImg from '../assets/images/about.jpg'
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="w-full my-20  xl:px-[5%] px-8">
      <h3
        className="mb-7 text-color-gray-400 font-Abril text-4xl text-center font-semibold"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        About Us
      </h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
        {/* left */}
        <div
          className="md:grid place-items-center lg:w-full w-[70%] mx-auto lg:mx-0 hidden "
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <div className="relative w-full h-auto ">
            <img
              src={AboutImg}
              alt="about us"
              className="rounded-tl-[5rem] rounded-bl-[5rem] w-full"
            />
            {/* background overlay */}
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.4)] w-full rounded-tl-[5rem] rounded-bl-[5rem]"></div>
            {/* shape */}
            <div className="w-full">
              <div className=" absolute -z-10 top-1/2 -translate-y-1/2 -left-6 xl:w-[40rem] lg:w-full md:w-[38rem] h-20 bg-color-gray-300"></div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col " data-aos="fade-left" data-aos-delay="900">
          <h4 className="md:text-2xl text-xl text-color-gray-400 font-Playfair font-medium mb-4 hidden md:block">
            Who we are?
          </h4>
          <p className="text-sm md:text-base text-color-gray-400 font-Playfair">
            Morgan and Associates is a legal firm located in Birmingham,
            Alabama, United States. The firm provides legal services related to
            personal injury, worker's compensation, insurance disputes, and
            other legal matters.
            <br />
            <br />
            Our goal is to support the political and cultural resurgence of
            First Nations through the recognition and exercise of their inherent
            rights.
            <br />
            <br />
            We work hard to get to know and understand our clients - including
            their perspectives and approaches to addressing issues. This allows
            us to tailor our services to our clients' unique circumstances.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
