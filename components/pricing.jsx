import React from "react";
import SectionHead from "./section-head";
import { Check } from "lucide-react";
import Button from "./button";

const Pricing = () => {
  const data = [
    {
      id: 0,
      name: "Bronza",
      price: 199,
      actives: [
        "Xona bezaklari - sharlar, bannerlar",
        "Stol bezaklari - markazdagi gullar, sovg'alar",
        "DJ hizmati",
        "Sovuq taomlar",
      ],
    },
    {
      id: 1,
      name: "Kumush",
      price: 499,
      actives: [
        "Xona bezaklari - sharlar, bannerlar",
        "Stol bezaklari - markazdagi gullar, sovg'alar",
        "DJ hizmati",
        "Sovuq taomlar",
        "Taklifnomani loyihalash",
        "Jonli ijro guruhi",
        "Sovuq taomlar va turli sharbatlar",
      ],
    },
    {
      id: 2,
      name: "Oltin",
      price: 999,
      actives: [
        "Xona bezaklari - sharlar, bannerlar",
        "Stol bezaklari - markazdagi gullar, sovg'alar",
        "DJ hizmati",
        "  Issiq va sovuq taomlar. Turli sharbatlar",
        "Taklifnomani loyihalash",
        "Jonli ijro guruhi va fokuschi",
        "Sovuq taomlar va turli sharbatlar",
        "To'liq mukammallikni ta'minlash uchun ishtirok etadigan xodimlar",
        "Mehmonlar uchun turar joy topish, transportni bron qilish",
      ],
    },
  ];

  return (
    <section id="pricing">
      <SectionHead>Pricing</SectionHead>
      <p className="text-center text-sm">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="md:flex gap-3 mt-6 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="border-t-4 border-white px-4 even:border-main-color py-8 shadow-lg w-full h-auto rounded-xl"
          >
            <b className="font-semibold text-text-color text-xl">{item.name}</b>
            <h2 className="text-3xl my-5 text-text-color font-semibold">
              <sup>$</sup>
              {item.price}/oy
            </h2>
            <ul>
              {item.actives.map((it, ind) => (
                <div key={ind} className="flex  mt-3 gap-2">
                  <span>
                    <Check className="text-green-500" />
                  </span>
                  <span>{it}</span>
                </div>
              ))}
            </ul>
            <div className="flex justify-center items-center h-16">
              <Button>Buy Now</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
