// Subtle fade-in-on-scroll for cards (Direction A).
// Progressive enhancement: if IntersectionObserver is unavailable or the user
// prefers reduced motion, we never add the `.reveal` class, so content is fully
// visible by default and nothing is hidden behind JS.
(function () {
  "use strict";

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  if (!("IntersectionObserver" in window)) {
    return;
  }

  var selectors = [".publications ol.bibliography > li", ".grid-item", ".card", ".repo"];
  var els = document.querySelectorAll(selectors.join(","));
  if (!els.length) {
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach(function (el) {
    el.classList.add("reveal");
    observer.observe(el);
  });
})();
