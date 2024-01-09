import React from "react";
import SectionHead from "./section-head";
import { Mail, MapPin, Smartphone } from "lucide-react";
import Button from "./button";

const Contact = () => {

  return (
    <section id="contact">
      <SectionHead>Contact</SectionHead>
      <p className="text-center">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas
      </p>
      <div className="md:flex  mt-6 items-center gap-4 ">
        <div className="border-y-4 border-y-main-color md:w-[40%] shadow-lg  p-4">
          <div className="flex flex-col gap-y-3">
            <div className="flex  group gap-4">
              <div className="w-12 flex justify-center  items-center h-12 opacity-40 group-hover:opacity-100 rounded-full bg-pink-500">
                <MapPin color="white" />
              </div>
              <div>
                <b className="text-text-color inline">Location:</b>
                <p>A108 Adam Street, New York, <br /> NY 535022</p>
              </div>
            </div>

            <div className="flex w-full  items-center group gap-4">
              <div className="w-12 flex justify-center items-center opacity-40 group-hover:opacity-100 h-12 rounded-full bg-pink-500">
                <Mail color="white" />
              </div>
              <div>
                <b className="text-text-color inline">Email:</b>
                <p>muhsinjonmullajonov0@gmail.com</p>
              </div>
            </div>

            <div className="flex group items-center gap-4">
              <div className="w-12 flex justify-center opacity-40 group-hover:opacity-100 items-center h-12 rounded-full bg-pink-500">
                <Smartphone color="white" />
              </div>
              <div>
                <b className="text-text-color ">Call:</b>
                <p>+99891 058 88 72</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-y-4 md:w-[60%] border-y-main-color mt-8 shadow-lg p-4">
          <form>
            <div className="md:flex gap-4">
              <div className="w-full">
                <label className="block font-semibold" htmlFor="">Your Name</label>
                <input className="border-2 w-full outline-none focus:border-main-color mt-2 rounded-md py-1 indent-3" type="text" />
              </div>
              <div className="w-full">
                <label className="block font-semibold" htmlFor="">Your Email</label>
                <input className="border-2 w-full mt-2 rounded-md py-1 indent-3 outline-none focus:border-main-color" type="text" />
              </div>
            </div>
            <label className="block font-semibold m-2" htmlFor="#">Subject</label>
            <input type="text" className="w-full  rounded-md py-1 indent-3 border-2 outline-none focus:border-main-color" />
            <label className="block font-semibold m-2 " htmlFor="">Message</label>
            <textarea
              className="resize-none w-full  rounded-md py-1 indent-3 border-2 outline-none focus:border-main-color"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div className="text-center" >

            <Button >Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
