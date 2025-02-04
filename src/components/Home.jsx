import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section 
      id="home" 
      className="portbox flex flex-col-reverse lg:flex-row items-center justify-center min-h-[78vh] bg-black text-white px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-12 md:pt-16"
    >
      <div className="text-center lg:text-left max-w-lg">
        <h3 className="font-semibold text-xl sm:text-2xl">
          <span className="text-orange-500 italic text-3xl sm:text-4xl">Hello,</span> 
          <span className="text-blue-700 italic text-2xl sm:text-3xl ml-2">It's Me</span> 
          <span className="wave text-4xl sm:text-5xl">👋</span>
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mt-2">
          Premanshu Ray <span className="ml-2 wave text-4xl">😊</span>
        </h1>
        <p className="mt-4 text-gray-300 text-base sm:text-lg text-justify">
          I am interested in the role of a Software Engineer where I can contribute my analytical skills and knowledge
          acquired by pursuing my degree in Software Engineering. Looking for a dynamic and progressive company where my
          skills are utilized in the maximum way possible.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4 mt-4">
          <a href="https://github.com/Prem-Ray" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-2xl border-4 rounded-full p-2 hover:border-green-600 hover:text-white">
            <FaGithub />
          </a>
          <a href="https://x.com/RayPremanshu" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-2xl border-4 rounded-full p-2 hover:border-orange-600 hover:text-blue-600">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/iampremray/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-2xl border-4 rounded-full p-2 hover:border-blue-600 hover:text-pink-700">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/premanshuray/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-2xl border-4 rounded-full p-2 hover:border-pink-600 hover:text-blue-600">
            <FaLinkedin />
          </a>
        </div>
        <a href="#about" className="mt-6 inline-block border-[4px] border-white bg-yellow-500 text-black px-6 py-2 font-bold hover:border-gray-600 hover:bg-orange-800 hover:text-white rounded-full">
          Read More <i className="fa-solid fa-turn-down"></i>
        </a>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-16">
        <img
          src="/premray.jpg"
          alt="Premanshu Ray"
          className="select-none rounded-full border-4 border-yellow-500 shadow-lg w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 object-cover grayscale hover:grayscale-0"
        />
      </div>
    </section>
  );
};

export default Home;
