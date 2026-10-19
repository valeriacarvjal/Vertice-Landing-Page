<<<<<<< HEAD

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

const contactCharacter = document.querySelector(".contact-character");

if (contactCharacter) {
  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactCharacter.classList.add("is-visible");
          contactObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25
    }
  );

  contactObserver.observe(contactCharacter.closest(".contact"));
}

const verticeFace = document.querySelector(".vertice-face");

if (verticeFace) {
  const faceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          verticeFace.classList.add("is-visible");
          faceObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  faceObserver.observe(verticeFace);
}

const faceCharacter = document.querySelector(".face-character");
const contactSection = document.querySelector("#contact");

if (faceCharacter && contactSection) {
  const faceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          faceCharacter.classList.add("is-visible");
          faceObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  faceObserver.observe(contactSection);
}
=======

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
>>>>>>> de6172fe08eca6155370648d028c3e1e021dcbbb
