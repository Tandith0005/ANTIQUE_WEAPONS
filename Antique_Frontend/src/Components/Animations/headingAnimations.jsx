import gsap from 'gsap';
import { SplitText, TextPlugin } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(SplitText);
export const headingAnimations = () => {

    // Title Animation
    let split = SplitText.create(".headings h1", { type: "chars" });
    gsap.from(split.chars, { duration: .3, opacity: 0, y: 50, stagger: 0.1 });

    // Subtitle Animation
    let split2 = SplitText.create(".headings h2", { type: "words" });
    gsap.from(split2.words, {duration: .5, autoAlpha: 0, x:-50, stagger: 0.1});

    // Horizontal Line Animation
    gsap.from(".headings img", { autoAlpha: 0});
    
};

