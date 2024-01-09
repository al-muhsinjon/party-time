import About from "@/components/about";
import Button from "@/components/button";
import Contact from "@/components/contact";
import Pricing from "@/components/pricing";
import { Fredoka } from "next/font/google";
import Service from "@/components/service";
const fredoka = Fredoka({ weight: "700", preload: false });

export default function Home() {
  return (
    <>
      <main className="w-full md:h-screen  bg-[url(/images/main.webp)] bg-cover  bg-no-repeat bg-center ">
        <div className=" w-full md:h-screen py-28 bg-gradient-to-t flex-col mb-3 from-[#ff00006a] flex justify-center items-center backdrop-blur-sm to-[#c84a7855] relative z-10 ">
          <h1
            className={` ${fredoka.className} md:w-1/2 w-10/12 text-white text-3xl md:text-6xl mb-6 text-center`}
          >
            Do&apos;stlaringiz bilan eng maroqli vaqtingizni biz bilan yarating
          </h1>
          <Button>Buy Now</Button>
        </div>
      </main>
      <About />
      <Service />
      <Pricing />
      <Contact />
    </>
  );
}
