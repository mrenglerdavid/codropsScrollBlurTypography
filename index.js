import { BlurScrollEffect as BlurScrollEffect1 } from './blurScrollEffect.js' ;
import { preloadFonts } from './utils.js';

gsap.registerPlugin(ScrollTrigger);

const init = () => {
  const effects = [
    { selector: '[data-effect-1]', effect: BlurScrollEffect1 }
  ];

  effects.forEach(({ selector, effect }) => {
    document.querySelectorAll(selector).forEach(el => {
      new effect(el);
    });
  });
};

preloadFonts('lnu1fpi').then(() => {
  document.body.classList.remove('loading');
  init();
});
