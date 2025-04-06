import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Effect to prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="sticky top-0 z-30">
            <div className="text-white w-full bg-darkbg relative overflow-visible">
                <ul className="max-w-[1800px] mx-auto flex flex-row items-center justify-between lg:text-xl text-lg">
                    <a href="./index.html">
                        <li className="text-2xl ml-8">
                            <img src="/horizontalmtclogo.jpg" alt="Logo" className="w-36" />
                        </li>
                    </a>

                    {/* Hamburger Icon */}
                    <button
                        className="flex flex-col justify-center items-center sm:hidden h-12 w-12 mr-8 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <span className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                        <span className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                    </button>

                    {/* Dropdown for Mobile Menu */}
                    <div
                        className={`absolute top-full right-0 w-3/4 sm:w-1/2 h-screen bg-darkbg text-white shadow-2xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}
                    >
                        <div className="p-4 flex flex-col gap-2">
                            <a href="./about.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200">ABOUT</a>
                            <a href="./theteam.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200 pl-8">MEET THE TEAM</a>
                            <a href="./casestudies.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200 pl-8">CASE STUDIES</a>
                            <div className="h-px bg-gray-700 my-2"></div>
                            <a href="./learn.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200">LEARN</a>
                            <a href="./learnai.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200 pl-8">LEARN AI</a>
                            <a href="./buildwebsites.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200 pl-8">BUILD WEBSITES</a>
                            <a href="./makegames.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200 pl-8">MAKE GAMES</a>
                            <div className="h-px bg-gray-700 my-2"></div>
                            <a href="./contact.html" className="block px-4 py-3 hover:bg-blue-800 hover:text-white rounded transition-colors duration-200">CONTACT</a>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden flex-row justify-between lg:gap-x-36 gap-x-12 sm:flex">
                        <div className="group relative">
                            <a href="./about.html" className="hover:underline">
                                <li>ABOUT</li>
                            </a>
                            <div className="invisible absolute top-full left-0 z-50 w-[300px] group-hover:visible group-hover:opacity-100 opacity-0 transition-all duration-300 bg-white text-black shadow-lg rounded-xl py-4 px-6">
                                <a href="./theteam.html" className="block py-2 text-sm hover:text-blue-600 transition-colors duration-200">Meet the Team</a>
                                <a href="./casestudies.html" className="block py-2 text-sm hover:text-blue-600 transition-colors duration-200">Case Studies</a>
                            </div>
                        </div>


                        <div className="group relative">
                            <a href="./learn.html" className="hover:underline">
                                <li>LEARN</li>
                            </a>
                            <div className="invisible absolute top-full left-0 z-50 w-[300px] group-hover:visible group-hover:opacity-100 opacity-0 transition-all duration-300 bg-white text-black shadow-lg rounded-xl py-4 px-6">
                                
                                <a href="./learnai.html" className="block py-2 text-sm hover:text-blue-600 transition-colors duration-200">Learn AI</a>
                                <a href="./buildwebsites.html" className="block py-2 text-sm hover:text-blue-600 transition-colors duration-200">Build Websites</a>
                                <a href="./makegames.html" className="block py-2 text-sm hover:text-blue-600 transition-colors duration-200">Make Games</a>
                            </div>
                        </div>

                        <a href="./contact.html" className="hover:underline mr-8">
                            <li>CONTACT</li>
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;