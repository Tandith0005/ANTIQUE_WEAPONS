import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export const aboutAnimations = () => {

    let splitTitle = SplitText.create(".about-title", { type: "chars" });
    let splitDescription = SplitText.create(".about-description", { type: "lines" });
    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-title",
      start: "top 80%",
    }
  });

    // Title animation
    tl.from(splitTitle.chars , {
      x: -50,
      opacity: 0,
      duration: .1,
      stagger: 0.1,
    });

    // Paragraphs animation
    tl.from(splitDescription.lines, {
      y: -30,
      opacity: 0,
      duration: .3,
      stagger: 0.3,
      ease: "power3.out"
    }, "-=0.5");

    // Feature cards animation
    tl.from("#about .feature", {
      x: -50,
      opacity: 0,

      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=1");

};

