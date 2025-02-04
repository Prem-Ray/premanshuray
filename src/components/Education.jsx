import React from 'react';

function Education() {
  return (
    <section 
      id='education' 
      className="portbox education pt-16 bg-transparent bg-cover bg-center bg-no-repeat min-h-[70vh] py-20" 
      style={{ backgroundImage: "url('/bluesky.jpg')" }}
    >
      <div className="container mx-auto text-center px-6 sm:px-10 md:px-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-50">
          <i className="fas fa-graduation-cap text-yellow-50"></i> My <span className="text-pink-500">Education</span>
        </h1>
        <p className="text-lg sm:text-xl font-semibold mb-12 text-yellow-50 tracking-wider">
          Education is not the learning of facts, but the training of the mind to think.
        </p>
        
        <div className="box-container flex flex-col items-center space-y-8">
          <div className="box hover:border-[2.5px] hover:border-orange-700 flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-md shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="image flex-1 lg:w-1/3">
              <img draggable="false" src="/stcet.jpg" alt="" className="w-full h-48 sm:h-64 object-cover rounded-md" />
            </div>
            <div className="content flex-1 lg:w-2/3 text-left px-4 mt-4 lg:mt-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">Bachelor of Technology in Electronics & Communication Engineering</h3>
              <p className="text-lg sm:text-xl text-black mb-2">St. Thomas’ College of Engineering & Technology</p>
              <h4 className="text-xl sm:text-2xl font-semibold text-green-700">2021-2025 | Pursuing</h4>
            </div>
          </div>
          
          <div className="box hover:border-[2.5px] hover:border-blue-700 flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-md shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="image flex-1 lg:w-1/3">
              <img draggable="false" src="/saorahs.jpg" alt="" className="w-full h-48 sm:h-64 object-cover rounded-md" />
            </div>
            <div className="content flex-1 lg:w-2/3 text-left px-4 mt-4 lg:mt-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">12th Science | Higher Secondary</h3>
              <p className="text-lg sm:text-xl text-black mb-2">Saora Union High School | WBCHSE</p>
              <h4 className="text-xl sm:text-2xl font-semibold text-green-700">2019-2021 | Completed</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
