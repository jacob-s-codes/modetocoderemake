"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Animation for elements as they come into view
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animate-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Course data
  const courses = [
    {
      title: "Intro to Web Development",
      description: "Learn the fundamentals of HTML, CSS, and JavaScript to create your first website.",
      image: "/webdev.jpg",
      duration: "8 weeks"
    },
    {
      title: "Python Programming",
      description: "Master Python programming from basics to advanced concepts for data science and automation.",
      image: "/python.jpg",
      duration: "10 weeks"
    },
    {
      title: "Mobile App Development",
      description: "Build cross-platform mobile applications using modern frameworks and technologies.",
      image: "/mobileapp.jpg",
      duration: "12 weeks"
    },
    {
      title: "Game Development",
      description: "Create interactive games while learning essential programming and design principles.",
      image: "/gamedev.jpg",
      duration: "14 weeks"
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "High School Student",
      image: "/testimonial1.jpg",
      text: "Mode to Code completely changed my perspective on programming. The instructors are amazing and the curriculum is perfect for beginners!"
    },
    {
      name: "Michael Chen",
      role: "College Freshman",
      text: "I joined with zero coding experience and now I'm building my own apps. The hands-on approach really works!"
    },
    {
      name: "Emma Rodriguez",
      role: "Parent",
      text: "My daughter attended the summer bootcamp and couldn't stop talking about what she learned. Watching her confidence grow was incredible."
    }
  ];

  return (
    <div className="relative overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <span className={`transition-colors duration-300 ${scrollPosition > 50 ? 'text-blue-500' : 'text-white'}`}>MODE</span>
              <span className={`transition-colors duration-300 ${scrollPosition > 50 ? 'text-black' : 'text-white'}`}>TO</span>
              <span className={`transition-colors duration-300 ${scrollPosition > 50 ? 'text-blue-500' : 'text-white'}`}>CODE</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none ${scrollPosition > 50 ? 'text-black' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className={`transition-colors duration-300 ${scrollPosition > 50 ? 'text-black' : 'text-white'} hover:text-blue-300`}>Home</a>
            <a href="/courses" className={`transition-colors duration-300 ${scrollPosition > 50 ? 'text-black' : 'text-white'} hover:text-blue-300`}>Courses</a>
            <a href="/about" className={`transition-colors duration-300 ${scrollPosition > 50 ? 'text-black' : 'text-white'} hover:text-blue-300`}>About</a>
            <a href="/contact" className={`transition-colors duration-300 ${scrollPosition > 50 ? 'text-black' : 'text-white'} hover:text-blue-300`}>Contact</a>
            <a href="/register" className="relative inline-flex px-6 py-2 font-medium group">
              <span className="absolute inset-0 transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-blue-500 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 bg-white border-2 border-blue-500 group-hover:bg-blue-500"></span>
              <span className="relative text-blue-500 group-hover:text-white">Register Now</span>
            </a>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`lg:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 invisible'} overflow-hidden`}>
          <div className="px-4 py-6 space-y-4">
            <a href="/" className="block text-black hover:text-blue-500">Home</a>
            <a href="/courses" className="block text-black hover:text-blue-500">Courses</a>
            <a href="/about" className="block text-black hover:text-blue-500">About</a>
            <a href="/contact" className="block text-black hover:text-blue-500">Contact</a>
            <a href="/register" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center">Register Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="homebg h-screen w-full bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="h-full flex flex-col justify-center items-center text-white relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500 animate-fade-in-down">MODE TO CODE</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-center max-w-3xl mt-6 animate-fade-in-up">Empowering the next generation with coding skills and technological literacy</p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in">
            <a href="/courses" className="relative inline-flex px-8 py-4 font-medium group">
              <span className="absolute inset-0 transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-blue-500 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 bg-transparent border-2 border-white group-hover:bg-blue-500"></span>
              <span className="relative text-white">EXPLORE COURSES</span>
            </a>
            <a href="/about" className="relative inline-flex px-8 py-4 font-medium group">
              <span className="absolute inset-0 transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 bg-transparent border-2 border-white group-hover:bg-white"></span>
              <span className="relative text-white group-hover:text-blue-500">LEARN MORE</span>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#mission" className="text-white">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-blue-200">
        <div className="max-w-[1800px] w-full mx-auto px-4 md:px-8 flex flex-col gap-y-20 md:gap-y-32 justify-center items-center pt-20 md:pt-32 pb-20 md:pb-32">
          
          {/* Mission Section */}
          <div id="mission" className="flex lg:flex-row flex-col-reverse parent-leftright lg:items-center items-start justify-between animate-on-scroll">
            <div className="flex flex-col xl:max-w-3xl max-w-xl animateleft">
              <h2 className="uppercase text-3xl md:text-4xl font-bold pb-2">Who we are</h2>
              <hr className="border-4 border-black mb-8" />
              <p className="text-xl md:text-2xl font-thin mb-8">We are a team of dedicated professionals who are passionate about
                teaching the next generation valuable technological tools. We believe that the future of the world is in
                the hands of the young people and we are committed to ensuring that they are well equipped to
                take on the challenges of the future.</p>
              <a href="/about.html" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                <span className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">LEARN MORE ABOUT US</span>
              </a>
            </div>
            <div className="max-w-3xl relative animateright rounded-xl lg:ml-8 lg:pb-0 pb-8">
              <img src="/api/placeholder/600/400" alt="Teaching session" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
            </div>
          </div>

          {/* Our Approach Section */}
          <div className="flex lg:flex-row-reverse flex-col parent-leftright lg:items-center items-start justify-between animate-on-scroll">
            <div className="flex flex-col xl:max-w-3xl max-w-xl animateright">
              <h2 className="uppercase text-3xl md:text-4xl font-bold pb-2">Our Approach</h2>
              <hr className="border-4 border-black mb-8" />
              <p className="text-xl md:text-2xl font-thin mb-8">We believe in learning by doing. Our curriculum is designed to be hands-on, engaging, and relevant to today's technology landscape. Students work on real-world projects that challenge their creativity and problem-solving skills while building their confidence in using technology.</p>
              <a href="/approach.html" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                <span className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">OUR TEACHING PHILOSOPHY</span>
              </a>
            </div>
            <div className="max-w-3xl relative animateleft rounded-xl lg:mr-8 lg:pb-0 pb-8">
              <img src="/api/placeholder/600/400" alt="Student projects" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
            </div>
          </div>

          {/* Our Courses Section */}
          <div className="w-full animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="uppercase text-3xl md:text-4xl font-bold pb-2">Our Courses</h2>
              <hr className="border-4 border-black w-24 mx-auto mb-8" />
              <p className="text-xl md:text-2xl font-thin max-w-3xl mx-auto">Explore our range of courses designed to introduce students to various aspects of technology and programming.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="h-48 bg-blue-300 relative">
                    <img src="/api/placeholder/400/300" alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full">
                      {course.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-700 mb-4">{course.description}</p>
                    <a href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-500 font-medium hover:underline">
                      Learn more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="/courses" className="relative inline-flex px-8 py-4 font-medium group">
                <span className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-blue-500 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 bg-white border-2 border-blue-500 group-hover:bg-blue-500"></span>
                <span className="relative text-blue-500 group-hover:text-white">VIEW ALL COURSES</span>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full bg-blue-500 rounded-xl py-16 px-8 text-white animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
                <div className="text-xl">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">20+</div>
                <div className="text-xl">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">95%</div>
                <div className="text-xl">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">12</div>
                <div className="text-xl">Course Options</div>
              </div>
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="w-full animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="uppercase text-3xl md:text-4xl font-bold pb-2">What Our Students Say</h2>
              <hr className="border-4 border-black w-24 mx-auto mb-8" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-300 mr-4">
                      {testimonial.image && (
                        <img src="/api/placeholder/100/100" alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="w-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-8 md:p-16 text-white text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">Join our next session and take the first step toward mastering technology skills for the future.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/register" className="relative inline-flex px-8 py-4 font-medium group">
                <span className="absolute inset-0 transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 bg-transparent border-2 border-white group-hover:bg-white"></span>
                <span className="relative text-white group-hover:text-blue-500">REGISTER NOW</span>
              </a>
              <a href="/contact" className="relative inline-flex px-8 py-4 font-medium group">
                <span className="absolute inset-0 transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 bg-transparent border-2 border-white group-hover:bg-black"></span>
                <span className="relative text-white">CONTACT US</span>
              </a>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="w-full animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="uppercase text-3xl md:text-4xl font-bold pb-2">Frequently Asked Questions</h2>
              <hr className="border-4 border-black w-24 mx-auto mb-8" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  q: "Do students need prior coding experience?",
                  a: "No prior experience is required. Our courses are designed to accommodate complete beginners while still offering challenges for those with some experience."
                },
                {
                  q: "What age groups do you teach?",
                  a: "We offer courses for students aged 8-18, with different curriculum options tailored to specific age groups and skill levels."
                },
                {
                  q: "How long are the courses?",
                  a: "Course lengths vary from 8 to 14 weeks depending on the subject matter and complexity. We also offer shorter workshops and summer camps."
                },
                {
                  q: "What equipment do students need?",
                  a: "Students need access to a computer with internet connectivity. For specific courses, additional requirements will be communicated before registration."
                },
                {
                  q: "Are classes in-person or online?",
                  a: "We offer both in-person and online options to accommodate different preferences and situations."
                },
                {
                  q: "Do you offer any scholarships?",
                  a: "Yes, we have scholarship opportunities available for qualifying students. Please contact us for more information."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="/faq" className="text-blue-500 font-medium hover:underline">
                View all FAQs →
              </a>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="w-full bg-white rounded-xl p-8 shadow-lg animate-on-scroll">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-700 mb-8">Subscribe to our newsletter for updates on new courses, events, and coding resources.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">We respect your privacy and will never share your information.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">MODE TO CODE</h3>
              <p className="mb-4">Empowering young minds with technological skills for a brighter future.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.126 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v.801c.84-1.174 4-1.261 4 1.119v4.08z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-blue-300 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-blue-300 transition-colors">About Us</a></li>
                <li><a href="/courses" className="hover:text-blue-300 transition-colors">Courses</a></li>
                <li><a href="/contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
                <li><a href="/blog" className="hover:text-blue-300 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Courses</h3>
              <ul className="space-y-2">
                <li><a href="/courses/web-development" className="hover:text-blue-300 transition-colors">Web Development</a></li>
                <li><a href="/courses/python-programming" className="hover:text-blue-300 transition-colors">Python Programming</a></li>
                <li><a href="/courses/mobile-app-development" className="hover:text-blue-300 transition-colors">Mobile App Development</a></li>
                <li><a href="/courses/game-development" className="hover:text-blue-300 transition-colors">Game Development</a></li>
                <li><a href="/courses/game-development" className="hover:text-blue-300 transition-colors">Game Development</a></li>
                <li><a href="/courses/all" className="hover:text-blue-300 transition-colors">View All Courses</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Tech Street, Coding City, 12345</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@modetocode.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(123) 456-7890</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-blue-800 text-center md:flex md:justify-between md:text-left">
            <p>© {new Date().getFullYear()} Mode to Code. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="/terms" className="hover:text-blue-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-blue-500 text-white rounded-full p-3 shadow-lg transition-opacity duration-300 ${scrollPosition > 500 ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Animations CSS */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animateleft {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animateright {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .parent-leftright:hover .animateleft,
        .parent-leftright:hover .animateright,
        .animate-visible .animateleft,
        .animate-visible .animateright {
          opacity: 1;
          transform: translateX(0);
        }
        
        .homebg {
          background-image: url('/api/placeholder/1920/1080');
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}