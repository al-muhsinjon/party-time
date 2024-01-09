import React from "react";
import SectionHead from "./section-head";
import { CheckCheck } from "lucide-react";

const About = () => {
  return (
    <section className="bg-gray-200" id="about">
      <SectionHead>About</SectionHead>
      <div className="md:flex md:text-base text-sm gap-10 mt-12">
        <div>
          <p>
            Biz Sizlarga quyidagi xizmatlarimizni taklif qilamiz sizlar biz
            bilan birgalikda vaqtingzini unumli sarf qilishingizga ishonamiz
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            assumenda aperiam deleniti.
          </p>
          <ul>
            Bizning xizmatlar:
            <li className="flex gap-3">
              <CheckCheck className="text-main-color" />
              Tematik tadbirlar
            </li>
            <li className="flex gap-3">
              <CheckCheck className="text-main-color" />
              Chodir bazmlar
            </li>
            <li className="flex gap-3">
              <CheckCheck className="text-main-color" />
              Maxsus bayramlar
            </li>
            <li className="flex gap-3">
              <CheckCheck className="text-main-color" />
              O'yin kulgu tadbirlari
            </li>
          </ul>
        </div>
        <div className="md:mt-0 mt-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ut
            qui in quasi quidem pariatur veniam molestiae fuga soluta reiciendis
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          </p>
          <ul>
            Boshqa xizmatlar:
            <li className="flex gap-3">
              <CheckCheck className="text-main-color" />
              Xayriya jamg'armalari
            </li>
            <li className="flex gap-3">
              <CheckCheck className="text-main-color" />
              Bazmlarga taom eltib berish
            </li>
            <li className="flex gap-3">
              <CheckCheck className="text-main-color" />
              Bazm uchun joyni bezatish
            </li>
            <li className="flex gap-3">
              <CheckCheck className="text-main-color" />
              Bazm taklifnomalari
            </li>
            <li className="flex gap-3">
              <CheckCheck className="text-main-color" />
              Yoritish va musiqa uskunalar{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
