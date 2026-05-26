const cards = document.querySelectorAll(".provincias .container_img a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

cards.forEach((card, i) => {
  // alterna esquerda/direita
  if (i % 2 === 0) {
    card.classList.add("left");
  }

  // leve atraso para efeito um por um
  setTimeout(() => {
    observer.observe(card);
  }, i * 120);
});