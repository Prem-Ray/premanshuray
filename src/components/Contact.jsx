import React from 'react';

function formSub(e){
  e.preventDefault();
}

function Contact() {

  return (
    <section
      id="contact"
      className="portbox py-14 px-7 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/bluesky.jpg')" }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          <i className="fa-solid fa-headphones"></i> Contact{' '}
          <span className="text-pink-500">Me!</span>
        </h2>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4 mb-8">
            <form onSubmit={formSub} action='#navbar'>
              <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full sm:w-1/2 mb-4 sm:mb-0 px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
                <input
                  type="number"
                  placeholder="Mobile Number*"
                  className="w-full sm:w-1/2 mb-4 sm:mb-0 px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Email Subject*"
                  className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Your Message*"
                className="w-full px-4 py-2 border text-gray-600 border-gray-300 rounded-lg mb-4"
              ></textarea>
              <input
                  type="submit"
                  value="Say Hello 👋🏿"
                  className="btn mx-[50px] md:mx-[120px] lg:mx-[140px] mt-6 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out cursor-pointer"
                />

            </form>
          </div>

          <div className="mt-[2rem] w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4 mb-8 text-white flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl text-yellow-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#8B1A10"><path d="M697-623h60v-60h-60v60Zm0 171h60v-60h-60v60Zm0 170h60v-60h-60v60Zm-56 162v-60h219v-600H465v112l-60-42v-130h515v720H641Zm-601 0v-390l271-194 270 194v390H364v-201H258v201H40Zm60-60h98v-201h226v201h97v-299L311-630 100-478.58V-180Zm541-365ZM424-180v-201H198v201-201h226v201Z"/></svg>
              </h2>
              <h4 className="text-xl font-bold mb-2">Address</h4>
              <p className="text-gray-600">Arambagh,</p>
              <p className="text-gray-600">West Bengal, India, 712616</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl text-yellow-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FB4C"><path d="M260-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18H260Zm0-150v90h440v-90H260Zm220.18 75q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM260-250h440v-520H260v520Zm0-580h440v-30H260v30Zm0 640v90-90Zm0-640v-30 30Z"/></svg>
              </h2>
              <h4 className="text-xl font-bold mb-2">Contact</h4>
              <p className="text-gray-600">+91 7047466142</p>
              <p className="text-gray-600">premanshuray981@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
