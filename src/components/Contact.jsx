import React, { useEffect } from "react";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="contact" className="mb-20  xl:px-[5%] px-8 section-gradient">
      <h3
        className="mb-7 text-color-gray-400 font-Abril text-4xl text-center font-semibold"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Contact Us
      </h3>

      <div
        className="lg:w-[70%] mx-auto md:w-1/2 w-full"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold font-Abril text-lg text-color-gray-300">
              Name:
            </label>
            <input
              type="text"
              className="w-full border border-color-gray-400 h-12 rounded-md font-Playfair"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold font-Abril text-lg text-color-gray-300">
              Email:
            </label>
            <input
              type="email"
              className="w-full border border-color-gray-400 h-12 rounded-md font-Playfair"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold font-Abril text-lg text-color-gray-300">
              Phone:
            </label>
            <input
              type="text"
              className="w-full border border-color-gray-400 h-12 rounded-md font-Playfair"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold font-Abril text-lg text-color-gray-300">
              Message:
            </label>
            <textarea
              className="w-full  border border-color-gray-400 h-40 rounded-md font-Playfair"
            />
          </div>
          <button className="mt-3 py-3 bg-color-gray-400 text-color-gray-100 font-Abril font-medium text-lg tracking-wide">
            Submit
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mt-5 pb-5">
          <address className="h-fit text-color-gray-400 font-medium font-Playfair">
            Morgan & Associates 584 North Fletcher Road, Gibsons, BC, V0N 1V9
          </address>
          <p className="h-fit text-color-gray-400 font-medium font-Playfair">
            T (604) 925 3850
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
