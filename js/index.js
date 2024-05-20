/* ScrollReveal - Elementos da página aparece conforme rola-se a tela */
const scrollReveal = ScrollReveal({
  origin: 'left',
  distance: '20px',
  duration: 1000,
  reset: true
});

scrollReveal.reveal(
  `
  .sidenav img, .content img, 
  .content blockquote,
  .content strong,
  .content .attributes,
  aside img,
  .footer
`,
  { reveal: 100 }
);
