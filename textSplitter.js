// Import debounce utility function.
import { debounce } from './common.js';

// Defines a class to split text into lines, words and characters for animation.
export class TextSplitter {
  constructor(textElement, options = {}) {
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error('Invalid text element provided.');
    }

    const { resizeCallback, splitTypeTypes } = options;
    
    this.textElement = textElement;
    this.onResize = typeof resizeCallback === 'function' ? resizeCallback : null;
    const splitOptions = splitTypeTypes ? { types: splitTypeTypes } : {};
    this.splitText = new SplitType(this.textElement, splitOptions);

    if (this.onResize) {
      this.initResizeObserver();
    }

    // Ensure words are not cut off by setting minimum height for each word.
    this.adjustHeight();
  }

  initResizeObserver() {
    this.previousContainerWidth = null;
    let resizeObserver = new ResizeObserver(
      debounce((entries) => this.handleResize(entries), 100)
    );
    resizeObserver.observe(this.textElement);
  }

  handleResize(entries) {
    const [{ contentRect }] = entries;
    const width = Math.floor(contentRect.width);
    if (this.previousContainerWidth && this.previousContainerWidth !== width) {
      this.splitText.split();
      this.onResize();
    }
    this.previousContainerWidth = width;
  }

  adjustHeight() {
    const words = this.getWords();
    words.forEach(word => {
      const height = word.offsetHeight;
      if (height < 40) {
        word.style.height = '40px'; // Ensuring the height is sufficient
      }
    });
  }

  getLines() {
    return this.splitText.lines;
  }

  getWords() {
    return this.splitText.words;
  }

  getChars() {
    return this.splitText.chars;
  }
}
