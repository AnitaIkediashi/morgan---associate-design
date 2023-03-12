import React, { useEffect } from "react";
import Team1 from '../assets/images/team1.png'
import Team2 from '../assets/images/team2.png'
import Team3 from '../assets/images/team3.png'
import AOS from "aos";

const Teams = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="team" className="mb-20  xl:px-[5%] px-8 ">
      <h3
        className="mb-7 text-color-gray-400 font-Abril text-4xl text-center font-semibold"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Our Teams
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        <article className="p-0 h-fit" data-aos="fade-up" data-aos-delay="600">
          <div className="overflow-hidden bg-color-gray-100">
            <img src={Team1} alt="lawyer 1" />
          </div>
          <div className="bg-color-gray-200 flex items-center justify-center gap-2 py-3 rounded-bl-md rounded-br-md">
            <p className="font-semibold text-color-gray-400 font-Playfair text-lg">
              Jane Doe
            </p>
          </div>
        </article>
        <article className="p-0 h-fit" data-aos="fade-up" data-aos-delay="900">
          <div className="overflow-hidden bg-color-gray-100">
            <img src={Team2} alt="lawyer 1" />
          </div>
          <div className="bg-color-gray-200 flex items-center justify-center gap-2 py-3 rounded-bl-md rounded-br-md">
            <p className="font-semibold text-color-gray-400 font-Playfair text-lg">
              Jane Doe
            </p>
          </div>
        </article>
        <article className="p-0 h-fit" data-aos="fade-up" data-aos-delay="1200">
          <div className="overflow-hidden bg-color-gray-100">
            <img src={Team3} alt="lawyer 1" />
          </div>
          <div className="bg-color-gray-200 flex items-center justify-center gap-2 py-3 rounded-bl-md rounded-br-md">
            <p className="font-semibold text-color-gray-400 font-Playfair text-lg">
              Jane Doe
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Teams;
