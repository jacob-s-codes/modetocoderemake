"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Testimonials from "./components/Testimonials";

export default function Home() {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Get all elements with animateleft or animateright classes
    const elements = gsap.utils.toArray(".animateleft, .animateright") as HTMLElement[];
    
    // Create animations for each element
    const animations = elements.map(el => {
      const parent = (el as HTMLElement).closest(".parent-leftright") || el;
      
      return gsap.fromTo(el, 
        {
          x: el.classList.contains("animateleft") ? -200 : 200,
          opacity: 0
        }, 
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: parent, // Each element gets its own trigger
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            toggleActions: "play none none none",
          }
        }
      );
    });
    
    // Cleanup function
    return () => {
      animations.forEach(animation => {
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill();
        }
        animation.kill();
      });
    };
  }, []);
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <div className="homebg h-screen w-full bg-cover bg-center overflow-y-hidden">
        <div className="h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">MODE TO CODE</h1>
        </div>
      </div>
      <div className="w-full  bg-blue-200">
        <div className=" w-full max-w-[1800px] mx-auto px-8 flex flex-col gap-y-44 justify-between  pt-32 ">

          {/* Who we are */}
          <div className="flex lg:flex-row flex-col-reverse parent-leftright lg:items-center justify-between">
            <div className="flex flex-col xl:max-w-3xl max-w-xl animateleft">
              <h3 className="uppercase text-blue-900 text-3xl">About us</h3>
              <h2 className="uppercase text-4xl font-bold pb-2">Who we are</h2>
              <hr className="border-4 border-black mb-8" />
              <p className="text-2xl font-light mb-8">We are a team of dedicated professionals who are passionate about
                teaching the
                next generation valuable technological tools. We believe that the future of the world is in
                the
                hands of the young people and we are committed to ensuring that they are well equipped to
                take
                on the challenges of the future.</p>
              <a href="/about.html" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                <span
                  className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white ">LEARN MORE ABOUT
                  US</span>
              </a>
            </div>
            <div className="max-w-3xl relative animateright rounded-xl lg:ml-8 lg:pb-0 pb-8">
              <img src="/teachingimg1.jpg" alt="" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
            </div>
          </div>


          {/* Modes of teaching */}
          <div className="w-full ">
            <div className="text-center w-full">
              <h2 className="font-black uppercase text-5xl">Our modes of teaching</h2>
              <h3 className="text-2xl max-w-4xl mx-auto pt-2 font-light">Check out all the different ways that Mode to Code is teaching students around the world valuable technological concepts:</h3>
            </div>
            <div className="flex flex-row items-center  justify-center gap-x-6 gap-y-8 flex-wrap pt-16">
              <div className="flex flex-col items-center w-md">
                <img src="/teachingimg1.jpg" alt="" className="rounded-xl shadow-2xl shadow-darkbg" />
                <h3 className="text-center text-2xl font-bold pt-4 text-blue-900 uppercase">In-person</h3>
                <p className="text-center text-xl font-light pt-2">We offer in-person classes for students who prefer a more hands-on approach to learning.</p>
              </div>

              <div className="flex flex-col items-center w-md">
                <img src="/teachingimg1.jpg" alt="" className="rounded-xl shadow-2xl shadow-darkbg" />
                <h3 className="text-center text-2xl font-bold pt-4 text-blue-900 uppercase">online</h3>
                <p className="text-center text-xl font-light pt-2">We offer in-person classes for students who prefer a more hands-on approach to learning.</p>
              </div>

              <div className="flex flex-col items-center w-md">
                <img src="/teachingimg1.jpg" alt="" className="rounded-xl shadow-2xl shadow-darkbg" />
                <h3 className="text-center text-2xl font-bold pt-4 text-blue-900 uppercase">For seniors</h3>
                <p className="text-center text-xl font-light pt-2">We offer in-person classes for students who prefer a more hands-on approach to learning.</p>
              </div>
            </div>
          </div>


        </div>

        {/* Testimonials */}
        <div className="w-full pt-44">
          <Testimonials />
        </div>

        <div className=" w-full max-w-[1800px] mx-auto px-8 flex flex-col gap-y-44 justify-between  py-32 ">
          <div className="flex lg:flex-row flex-col-reverse parent-leftright lg:items-center justify-between">
            <div className="flex flex-col xl:max-w-3xl max-w-xl animateleft">
              <h3 className="uppercase text-blue-900 text-3xl">About us</h3>
              <h2 className="uppercase text-4xl font-bold pb-2">Who we are</h2>
              <hr className="border-4 border-black mb-8" />
              <p className="text-2xl font-light mb-8">We are a team of dedicated professionals who are passionate about
                teaching the
                next generation valuable technological tools. We believe that the future of the world is in
                the
                hands of the young people and we are committed to ensuring that they are well equipped to
                take
                on the challenges of the future.</p>
              <a href="/about.html" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                <span
                  className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white ">LEARN MORE ABOUT
                  US</span>
              </a>
            </div>
            <div className="max-w-3xl relative animateright rounded-xl lg:ml-8 lg:pb-0 pb-8">
              <img src="/teachingimg1.jpg" alt="" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
            </div>
          </div>


          <div className="flex lg:flex-row flex-col parent-leftright lg:items-center items-end justify-between ">
                    <img src="/teachingimg1.jpg" alt=""
                        className="animateright w-full rounded-xl shadow-2xl max-w-3xl shadow-darkbg lg:mb-0 mb-6 items-center"/>
                    <div className="text-3xl max-w-2xl text-right pl-8 animateleft">
                        <h3 className="font-semibold text-blue-900">BUILDING COMMUNITY</h3>
                        <h2 className="text-4xl font-bold uppercase pt-4 ">interested in teaching or having this free
                            program
                            offered at your school?</h2>
                        <hr className="w-full border-4"/>
                        <p className="pt-12 text-2xl font-light">Mode to Code is <span className="font-bold">completely
                                free </span>
                            for students and schools. We are always looking for new schools to partner with and teachers
                            to
                            help us teach our curriculum. If you are interested in having Mode to Code offered at your
                            school, please reach out to us!</p>
                        <a href="#_" className="relative inline-flex px-8 py-4 mt-12 font-medium group w-fit">
                            <span
                                className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                            <span
                                className="relative text-black group-hover:text-white text-lg uppercase">Contact
                                us</span>
                        </a>
                    </div>

                </div>
        </div>

      </div>

    </div >
  );
}
