export const preloadFonts = (id) => {
  return new Promise((resolve) => {
    WebFont.load({
      custom: {
        families: ['Cera Pro:700,100'],
        urls: ['https://cdn.prod.website-files.com/66a8b5ee49d126b699969fd3/css/elana-braut--abendmoden.webflow.816e607d2.css']
      },
      active: () => {
        console.log("WebFont active"); // Log to verify WebFont is active
        resolve();
      },
      inactive: () => {
        console.error("WebFont inactive"); // Log if WebFont failed to load
        resolve();
      }
    });
  });
};
