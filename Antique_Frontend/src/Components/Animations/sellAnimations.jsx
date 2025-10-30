import gsap from "gsap";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);
export const sellAnimations = () => {
    gsap.fromTo(
    ".sell-heading",
    { text: "" },              
    {
      duration: 2,             
      text: "Sell Your Antique Weapon",  // final text
    }
  );
};