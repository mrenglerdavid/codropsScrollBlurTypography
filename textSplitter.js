import { TextSplitter } from '../textSplitter.js';

export class BlurScrollEffect {
  constructor(textElement) {
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error('Invalid text element provided.');
    }
    this.textElement = textElement;
    this.initializeEffect();
  }

  initializeEffect() {
    const textResizeCallback = () => this.scroll();
    this.splitter = new TextSplitter(this.textElement, {
      resizeCallback: textResizeCallback,
      splitTypeTypes: 'words, chars'
    });
    this.scroll();
  }

  scroll() {
    const chars = this.splitter.getChars();
    gsap.fromTo(chars, {
      opacity: 0,
      y: 10,
      willChange: 'opacity, transform'
    }, {
        opacity: 1,
        y: 0,
        ease: 'none',
        stagger: 0.02,
        scrollTrigger: {
          trigger: this.textElement,
          start: 'top bottom-=10%',
          end: 'bottom center+=10%',
          scrub: true,
        },
    });
  }
}
