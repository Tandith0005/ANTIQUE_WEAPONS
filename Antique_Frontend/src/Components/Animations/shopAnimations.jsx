import gsap from "gsap";

export const shopAnimations = (target) => {
    gsap.from(target, { autoAlpha: 0, duration: 1 });
};