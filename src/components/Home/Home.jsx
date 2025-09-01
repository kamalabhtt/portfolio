import React from "react";
import avatarImg from "../../assets/image1.png";

const Home = () => {
  return (
    <section id="home" className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center min-h-screen pt-24 md:pt-32 px-6 md:px-20">
      {/* Left: Text */}
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tighter mb-4">
          Hello, I’m <span className="text-[#465697]">Kamala Bhatta</span>
        </h1>
        <p className="mt-4 text-sm md:text-xl tracking-tight text-gray-300 mb-8">
          I’m a passionate full stack developer focused on building intuitive front-end experiences and robust back-end systems. I turn ideas into seamless digital solutions with clean, maintainable code.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#contact" className="bg-[#465697] text-white py-2 px-4 md:py-3 md:px-6 rounded-3xl font-semibold text-sm md:text-lg hover:opacity-85 hover:scale-105 duration-300">Contact Me</a>
          <a href="/cv" download className="border border-[#465697] text-[#465697] py-2 px-4 md:py-3 md:px-6 rounded-3xl font-semibold text-sm md:text-lg hover:bg-[#465697] hover:text-white duration-300">Download CV</a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="md:w-2/4 flex justify-center mb-8 md:mb-0">
        <img src={avatarImg} alt="Kamala Bhatta" className="w-[350px] md:w-[400px]  rounded-full shadow-lg border-4 border-[#465697]" />
      </div>
    </section>
  );
};

export default Home;
