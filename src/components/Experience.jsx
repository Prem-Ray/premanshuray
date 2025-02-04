import React from "react";

const Experience = () => {
  return (
    <section 
      id='experience' 
      className="portbox min-h-[80vh] pt-[5rem] pb-[4rem] flex flex-col items-center justify-center bg-black text-white py-10 px-5 sm:px-10 md:px-20"
    >
      <h2 className="text-2xl sm:text-3xl font-bold flex items-center">
        <span className="mr-2">📖</span> Professional<span className="text-orange-500"> {' '} Training</span>
      </h2>
      <div className="mt-10 bg-gray-900 border border-yellow-500 hover:border-orange-700 hover:bg-[#212121] rounded-3xl p-6 sm:p-10 w-full max-w-4xl text-center">
        <img
          src="/pblogo.png" 
          alt="Prasar Bharati Logo"
          className="mx-auto w-24 sm:w-32 h-24 sm:h-32 object-contain"
        />
        <h3 className="text-xl sm:text-2xl font-semibold text-orange-500 mt-4">PRASAR BHARATI</h3>
        <p className="mt-4 text-gray-300 text-xs sm:text-sm md:text-base text-justify">
          I have completed my industrial training at Prasar Bharati, India's esteemed
          Public Service Broadcaster, Akashvani, Kolkata. It gave me an opportunity to
          do a 4-week vocational training on "Radio Communication Systems or
          Transmission System of All India Radio." I have learned about AM and FM
          Transmission Systems. During this training, I was also trained in the
          installation of studios, High Power Medium Wave Transmitters, FM
          Transmitters, Captive Earth Stations, and became acquainted with different
          aspects of electronic and electrical equipment used in A.M/F.M and
          Satellite Broadcasting.
        </p>
        <div className="mt-6">
            <a
                href="https://drive.google.com/file/d/10MtDp_dGMDhRXGQnXzfMVh8eL6A_he4I/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:text-[1.1rem] hover:bg-white hover:text-gray-800 border-[4px] border-x-white border-gray-600 rounded-2xl text-black font-bold px-4 sm:px-6 py-2 shadow-md  transition flex items-center justify-center"
            >
            Certificate  <i className='bx bx-expand-vertical bx-flip-horizontal bx-burst icon font-bold' ></i>

        </a>


          
        </div>
      </div>
    </section>
  );
};

export default Experience;