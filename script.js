document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    })
    gsap.ticker.lagSmoothing(0);
});



const footer = document.querySelector(".footer");
const main = document.querySelector(".main");
const body = document.querySelector("body");
const menu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');

main.addEventListener('click', () => {
    if (!menu.classList.contains("opacity-0")) {
        menu.classList.add('opacity-0', 'invisible');
        main.classList.remove("brightness-50");
        footer.style.backgroundColor = "rgba(0, 0, 0, 0)";
        hamburger.innerHTML = `<div class="flex sm:hidden text-4xl hamburger cursor-pointer">
                    &#9776;
                </div>`;
    }
});

footer.addEventListener('click', () => {
    if (!menu.classList.contains("opacity-0")) {
        menu.classList.add('opacity-0', 'invisible');
        main.classList.remove("brightness-50");
        footer.style.backgroundColor = "rgba(0, 0, 0, 0)";
        hamburger.innerHTML = `<div class="flex sm:hidden text-4xl hamburger cursor-pointer">
                    &#9776;
                </div>`;
    }
});

document.querySelector('.hamburger').addEventListener('click', function () {

    if (menu.classList.contains('opacity-0')) {
        menu.classList.remove('opacity-0', 'invisible');
        footer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        main.classList.add("brightness-50");
        footer.classList.add("overflow-hidden");
        main.classList.add("overflow-hidden");
        hamburger.innerHTML = `<div class="flex sm:hidden text-2xl hamburger cursor-pointer">
                    X
                </div>`;
    } else {
        menu.classList.add('opacity-0', 'invisible');
        footer.style.backgroundColor = "rgba(0, 0, 0, 0)";
        main.classList.remove("brightness-50");
        hamburger.innerHTML = `<div class="flex sm:hidden text-4xl hamburger cursor-pointer">
                    &#9776;
                </div>`;
    }
});



// gsap.fromTo(".animateleft, .animateright",
//     {
//         x: (i, el) => el.classList.contains("animateleft") ? -200 : 200,
//         opacity: 0
//     },
//     {
//         x: 0,
//         opacity: 1,
//         duration: 2,
//         ease: "power1.out", // Ensures smooth movement
//         scrollTrigger: {
//             trigger: ".animateleft", // Make sure both triggers are tied to the same element
//             start: "top 80%",
//             end: "top 50%",
//             scrub: 1, // Ties movement directly to scroll
//             markers: true,
//             toggleActions: "play none none none", // Ensures they don't replay incorrectly
//         },
//     }
// );



// gsap.fromTo(".rtitle", { x: '100%' }, {
//     x: '-120%', scrollTrigger: {
//         trigger: ".rtitle",
//         start: "top center",
//         end: "bottom center",
//         endTrigger: ".reviews",
//         pin: true,
//         scrub: 1,
//         markers: true,
//     }
// }, 0);

// gsap.to(".pin", {
//     scrollTrigger: {
//         trigger: ".pin",
//         start: "top 50%",
//         end: "+=1500",
//         pin: true,
//         pinSpacing: false,
//         markers: true,
//     }
// });

// const texts = [
//     "\"I enjoyed learning about all the ways that AI shows up in our lives.\" - Josie",
//     "\"I liked it was slower so that even if you are a beginner you can follow along.\" - Anonymous",
//     "\"I love how I learned a lot, even in the first class.\" - Renee",
//     "This is image 4 description"
// ];

// // Select all images
// const images = document.querySelectorAll(".testimonial");
// const textElement = document.querySelector(".pin h1"); // The text that will change

// images.forEach((img, index) => {
//     ScrollTrigger.create({
//         trigger: img,
//         start: "top center", // When the image reaches the center of the screen
//         end: "bottom bottom",
//         onEnter: () => textElement.textContent = texts[index], // Change text
//         onLeaveBack: () => {
//             if (index > 0) {
//                 textElement.textContent = texts[index - 1]; // Go back to previous text
//             }
//         }
//     });
// });

