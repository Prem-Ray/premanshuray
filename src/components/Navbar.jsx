import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Optional: for hamburger icon


const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav id='navbar' className="bg-gray-800 p-4 portbox">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold italic"><span className='hover:text-blue-700'>ray</span><span className='hover:text-orange-500'>Premanshu</span></div>
                <div className="hidden md:flex space-x-4">
                    <a href="#home" className="text-gray-300 hover:text-rose-700 hover:font-bold">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-rose-700 hover:font-bold">About</a>
                    <a href="#education" className="text-gray-300 hover:text-rose-700 hover:font-bold">Education</a>
                    <a href="#experience" className="text-gray-300 hover:text-rose-700 hover:font-bold">Experience</a>
                    <a href="#skills" className="text-gray-300 hover:text-rose-700 hover:font-bold">Skills</a>
                    <a href="#projects" className="text-gray-300 hover:text-rose-700 hover:font-bold">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-rose-700 hover:font-bold">Contact</a>
                    {/* {props.searchBar? <div className="relative">
                        <input type="text" placeholder="Search..." className="border rounded-md py-2 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[32px]"/>
                        <span className="absolute left-3 top-1 text-gray-500">🔍</span>
                    </div> : " "} */}
                    
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-2 mt-2">
                    <a href="#home" className="text-gray-300 hover:text-rose-700 hover:font-bold">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-rose-700 hover:font-bold">About</a>
                    <a href="#education" className="text-gray-300 hover:text-rose-700 hover:font-bold">Education</a>
                    <a href="#experience" className="text-gray-300 hover:text-rose-700 hover:font-bold">Experience</a>
                    <a href="#skills" className="text-gray-300 hover:text-rose-700 hover:font-bold">Skills</a>
                    <a href="#projects" className="text-gray-300 hover:text-rose-700 hover:font-bold">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-rose-700 hover:font-bold">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;





