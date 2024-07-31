class BlurScrollEffect {
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
      splitTypeTypes: 'chars'
    });
    this.scroll();
  }

  scroll() {
    const chars = this.splitter.getChars();
    gsap.fromTo(chars, {
      filter: 'blur(10px) brightness(30%)',
      willChange: 'filter',
    }, {
      filter: 'blur(0px) brightness(100%)',
      stagger: 0.05,
      scrollTrigger: {
        trigger: this.textElement,
        start: 'top bottom-=15%',
        end: 'bottom center+=15%',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
    });
  }
}
