import Reveal from 'reveal.js';
window.addEventListener('DOMContentLoaded',()=>{
  const slides = new Reveal({})
  slides.initialize({});
  slides.configure({ pdfSeparateFragments: false });
})