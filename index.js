import { BlurScrollEffect as BlurScrollEffect1 } from 'https://cdn.jsdelivr.net/gh/mrenglerdavid/codropsScrollBlurTypography@cb69fbf/blurScrollEffect.js';
import { preloadFonts } from './utils.js';

gsap.registerPlugin(ScrollTrigger);

const init = () => {
  console.log("Init function called"); // Log to verify init is called
  const effects = [
    { selector: '[data-effect-1]', effect: BlurScrollEffect1 }
  ];

  effects.forEach(({ selector, effect }) => {
    document.querySelectorAll(selector).forEach(el => {
      console.log("Applying effect to element:", el); // Log each element the effect is applied to
      new effect(el);
    });
  });
};

preloadFonts('lnu1fpi').then(() => {
  console.log("Fonts loaded"); // Log to verify fonts are loaded
  document.body.classList.remove('loading');
  init();
});
