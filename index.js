import { BlurScrollEffect as BlurScrollEffect1 } from './blurScrollEffect.js';
import { preloadFonts } from './utils.js';

// Registers the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const init = () => {
  const effects = [
    { selector: '[data-effect-1]', effect: BlurScrollEffect1 }
  ];

  // Iterate over each effect configuration and apply the effect to all matching elements
  effects.forEach(({ selector, effect }) => {
    document.querySelectorAll(selector).forEach(el => {
      new effect(el);
    });
  });
};

// Preload images and fonts and remove loader
preloadFonts('lnu1fpi').then(() => {
  document.body.classList.remove('loading');
  init();
});
