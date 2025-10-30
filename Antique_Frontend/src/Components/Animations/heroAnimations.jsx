import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const heroAnimations = () => {
    const mm = gsap.matchMedia();

  gsap.from(".jobOffer-wrapper", {
    scrollTrigger: {
      trigger: ".jobOffer-wrapper",
      start: "top 80%",
    },
    duration: 1,
    opacity: 0,
    x: -200,
  });
  // 👇 For mobile screens (max-width: 767px) Icon
  mm.add("(max-width: 767px)", () => {
    gsap.fromTo(
      ".handIcon",
      { y: 0 },
      { y: 20, duration: 0.5, repeat: -1, yoyo: true, ease: "power1.inOut" }
    );
  });

  // 👇 For tablet and desktop screens Icon
  mm.add("(min-width: 768px)", () => {
    gsap.fromTo(
      ".handIcon",
      { x: 0 },
      { x: 30, duration: 0.5, repeat: -1, yoyo: true, ease: "power1.inOut" }
    );
  });

  // 👇 Buy / Sell / Exchange - Entrance animation
  gsap.from(".gun-buttons", {
    scrollTrigger: {
      trigger: ".gun-buttons",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2, 
    ease: "power2.out",
  });




};

