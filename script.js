
const revealElements = document.querySelectorAll(".reveal");

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (
  reduceMotion ||
  !("IntersectionObserver" in window)
) {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay =
      `${(index % 3) * 100}ms`;

    observer.observe(element);
  });
}

// Movimiento sutil de las formas al desplazarse.
const parallaxElements = document.querySelectorAll(
  ".orb-one, .orb-two, .floating-shape, .manifesto-shape"
);

let ticking = false;

function updateParallax() {
  parallaxElements.forEach((element) => {
    const section = element.closest("section");
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const offset =
      window.innerHeight / 2 -
      (rect.top + rect.height / 2);

    const movement = Math.max(
      -35,
      Math.min(35, offset * 0.08)
    );

    element.style.setProperty(
      "--parallax-y",
      `${movement}px`
    );
  });

  ticking = false;
}

function onScroll() {
  if (ticking || reduceMotion) return;

  ticking = true;
  window.requestAnimationFrame(updateParallax);
}

if (!reduceMotion) {
  window.addEventListener("scroll", onScroll, {
    passive: true
  });

  window.addEventListener("resize", onScroll);
  updateParallax();
}
