import React, { useEffect } from "react";
import { services } from "../data";
import Card from "../utils/Card";
import AOS from "aos";

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="mb-20 section-gradient xl:px-[5%] px-8 " id="service">
      <h3
        className="mb-7 text-color-gray-400 font-Abril text-4xl text-center font-semibold"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Services we offer
      </h3>

      <div className="grid-fill w-full pb-10" data-aos="fade-up" data-aos-delay="600">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col items-center gap-3 ">
            <div className="grid place-items-center bg-color-gray-200 w-20 h-20 rounded-full">
              <img src={service.image} alt="services" />
            </div>
            <h4 className="text-lg font-semibold font-Abril text-color-gray-400">
              {service.Title}
            </h4>
            <p className="text-sm text-color-gray-400 font-medium font-Playfair text-center">
              {service.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Service;
