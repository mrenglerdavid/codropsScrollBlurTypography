/**
 * Preload fonts
 * @param {String} id
 */
export const preloadFonts = () => {
  return new Promise((resolve) => {
    WebFont.load({
      custom: {
        families: ['Cera Pro:700,100'],
        urls: ['https://cdn.prod.website-files.com/66a8b5ee49d126b699969fd3/css/elana-braut--abendmoden.webflow.816e607d2.css']
      },
      active: resolve
    });
  });
};
