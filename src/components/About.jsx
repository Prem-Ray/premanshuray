import React from 'react';
import resume from './public/PREMANSHU_RAY_RESUME.pdf' ;

const About = () => {
  return (
    <section 
      id='about' 
      className="portbox min-h-[70vh] flex flex-col lg:flex-row items-center justify-center bg-black text-white py-4 px-6 sm:px-10 md:px-16 lg:px-20"
    >
      <div className="lg:w-1/3 flex justify-center mb-6 lg:mb-0">
        <img
          src="/premanshuray.jpg"
          alt="Profile"
          className="hover:border-2 hover:border-orange-600 rounded-xl shadow-lg w-40 sm:w-52 md:w-60 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-80 object-cover grayscale-0 hover:grayscale"
        />
      </div>
      <div className="lg:w-2/3 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center justify-center lg:justify-start">
          <span className="mr-2">📢</span> About <span className="text-orange-500">Me</span>
        </h2>
        <h3 className="text-lg sm:text-xl font-semibold mt-4 flex items-center justify-center lg:justify-start">
          <span className="mr-2">💡</span> Electronics & Communication Engineer
        </h3>
        <p className="mt-4 text-gray-300 text-base sm:text-lg text-justify">
          I am an enthusiastic fresher with a highly motivated attitude, holding
          a Bachelor's degree in Electronics & Communication Engineering from St.
          Thomas’ College of Engineering & Technology. My goal is to learn new
          technologies and kickstart my career by utilizing my skills and
          abilities. I aim to be resourceful, innovative, and flexible while
          working in a challenging position where I can apply my experiences in
          projects.
        </p>
        <div className="mt-6 flex justify-center lg:justify-start">
          <a 
            href="{resume}" 
            download="Premanshu_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button 
              className="border-gray-600 bg-orange-800 text-white hover:border-x-white border-[4px] rounded-full px-6 py-2 font-semibold shadow-md hover:bg-yellow-400 transition flex items-center"
            >
              Resume <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" id='cloud' fill="#75FB4C"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q17-72 85-137t145-65q33 0 56.5 23.5T520-716v242l64-62 56 56-160 160-160-160 56-56 64 62v-242q-76 14-118 73.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-48-22-89.5T600-680v-93q74 35 117 103.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm220-358Z"/></svg></span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
