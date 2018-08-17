import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Ready to learn from the best", "Scroll down"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
