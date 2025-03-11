document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    })
    gsap.ticker.lagSmoothing(0);
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".animatedown", // Main trigger element
        start: "top top",
        end: "+=300", // Shared scroll distance
        scrub: 1,
        markers: true,
    }
})
    .to(".animatedown", { y: -200 }, 0) // Move slower
    .to(".animatedownfaster", { y: -500 }, 0) // Move faster
    .to(".animateup", { y: 200, }, 0); // Move faster

gsap.utils.toArray(".animateleft, .animateright").forEach(el => {
    let parent = el.closest(".parent-leftright") || el;
    gsap.fromTo(el, 
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
                markers: true,
                toggleActions: "play none none none",
            }
        }
    );
});


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".reviews",
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
        markers: true,
    }
});

tl.fromTo(".rl", { y: '350%' }, { y: '-150%' }, 0);
tl.fromTo(".rr", { y: '300%' }, { y: '-50%' }, 0);

ScrollTrigger.batch(".animateup", {
    onEnter: batch => gsap.to(batch, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
    }),
    onLeaveBack: batch => gsap.to(batch, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.in"
    }),
    start: "top 60%",
    end: "top 50%",
    scrub: 1,
    markers: true // Remove after testing
});