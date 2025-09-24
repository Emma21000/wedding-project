import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="lg:my-24 my-10 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="rounded-2xl lg:w-1/2 w-11/12 border-2 border-[#156064] shadow-xl bg-gradient-to-tl from-[#d3f6f3] via-[#a8dadc] to-[#457b9d] p-14 flex flex-col items-center justify-center gap-y-16">
        <div className="w-full flex flex-col items-center justify-center gap-y-4">
          <span className="border-b-2 border-[#156064] px-16 ml-34"></span>
          <p className="text-5xl font-serif tracking-widest text-white drop-shadow-lg">
            Contact Us
          </p>
          <span className="px-16 border-b-2 border-[#156064] mr-36"></span>
        </div>
        <form className="flex flex-col items-center gap-y-12 w-full">
          <input
            type="text"
            required
            placeholder="Name"
            className="text-gray-500 tracking-widest text-2xl w-full px-6 py-4 rounded-xl font-mono border-2 border-[#156064] focus:outline-none focus:border-3 focus:border-[#1d3557] focus:bg-white/80"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="text-gray-500 tracking-widest text-2xl w-full px-6 py-4 rounded-xl font-mono border-2 border-[#156064] focus:outline-none focus:border-3 focus:border-[#1d3557] focus:bg-white/80"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="text-gray-500 tracking-widest text-2xl w-full px-6 py-4 rounded-xl font-mono border-2 border-[#156064] focus:outline-none focus:border-3 focus:border-[#1d3557] focus:bg-white/80"
          />
          <textarea
            placeholder="Message"
            className="text-gray-500 tracking-widest text-2xl w-full px-6 py-4 h-36 rounded-xl font-mono border-2  border-[#156064] focus:outline-none focus:border-3 focus:border-[#1d3557] focus:bg-white/80"
          ></textarea>
          <button
            type="submit"
            className="cursor-pointer mt-4 rounded-xl bg-[#1d3557] hover:bg-[#457b9d] text-white text-2xl tracking-widest px-16 py-4 shadow-lg transition-all duration-200"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
