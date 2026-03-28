(function () {
  "use strict";

  /* ===== Utility helpers ===== */
  const select = (el, all = false) => {
    el = el.trim();
    return all
      ? [...document.querySelectorAll(el)]
      : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    const targets = select(el, all);
    if (!targets) return;
    if (all) {
      targets.forEach((t) => t.addEventListener(type, listener));
    } else {
      targets.addEventListener(type, listener);
    }
  };

  /* ===== Theme Toggle ===== */
  const initTheme = () => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  };

  initTheme();

  const themeBtn = select("#themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  /* ===== Navbar active on scroll ===== */
  const navLinks = select("#navbar .scrollto", true);
  const navbarActive = () => {
    const pos = window.scrollY + 200;
    navLinks.forEach((link) => {
      if (!link.hash) return;
      const section = select(link.hash);
      if (!section) return;
      if (pos >= section.offsetTop && pos <= section.offsetTop + section.offsetHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarActive);
  document.addEventListener("scroll", navbarActive);

  /* ===== Smooth scroll ===== */
  const scrollTo = (el) => {
    const target = select(el);
    if (!target) return;
    window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  };

  on("click", ".scrollto", function (e) {
    if (select(this.hash)) {
      e.preventDefault();
      const body = select("body");
      if (body.classList.contains("mobile-nav-active")) {
        body.classList.remove("mobile-nav-active");
      }
      scrollTo(this.hash);
    }
  }, true);

  window.addEventListener("load", () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollTo(window.location.hash);
    }
  });

  /* ===== Back to top ===== */
  const backToTop = select(".back-to-top");
  if (backToTop) {
    const toggleBtn = () => {
      backToTop.classList.toggle("active", window.scrollY > 100);
    };
    window.addEventListener("load", toggleBtn);
    document.addEventListener("scroll", toggleBtn);
  }

  /* ===== Mobile nav toggle ===== */
  on("click", ".mobile-nav-toggle", function () {
    select("body").classList.toggle("mobile-nav-active");
  });

  /* ===== Preloader ===== */
  const preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => preloader.remove());
  }

  /* ===== Typed.js hero effect ===== */
  const typedEl = select(".typed");
  if (typedEl) {
    const items = typedEl.getAttribute("data-typed-items").split(",");
    new Typed(".typed", {
      strings: items,
      loop: true,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      showCursor: false,
    });
  }

  /* ===== GLightbox ===== */
  GLightbox({ selector: ".portfolio-lightbox" });
  GLightbox({ selector: ".portfolio-details-lightbox", width: "90%", height: "90vh" });

  /* ===== Swiper — portfolio details ===== */
  if (select(".portfolio-details-slider")) {
    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
    });
  }

  /* ===== Swiper — testimonials ===== */
  if (select(".testimonials-slider")) {
    new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        768: { slidesPerView: 2 },
      },
      pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
    });
  }

  /* ===== AOS ===== */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      mirror: false,
    });
  });

  /* ===== PureCounter ===== */
  new PureCounter();

})();
