/* ============================================================
   DALROD — homepage interactions (vanilla JS, no dependencies)
   - Mobile navigation (open / close / focus management)
   - Sticky header shadow on scroll
   - Scrollspy for primary nav
   - FAQ accordion (single open, animated)
   - Scroll reveal (IntersectionObserver)
   - Floating mobile call bar
   ============================================================ */
(function () {
  "use strict";

  var body = document.body;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");

  function setNav(open) {
    body.classList.toggle("nav-open", open);
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    body.style.overflow = open ? "hidden" : "";
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      setNav(!body.classList.contains("nav-open"));
    });

    // Close on link tap
    siteNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && body.classList.contains("nav-open")) {
        setNav(false);
        navToggle.focus();
      }
    });

    // Reset if resized up to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) setNav(false);
    });
  }

  /* ---------- Sticky header shadow ---------- */
  var header = document.getElementById("site-header");
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- Floating call bar (mobile) ---------- */
  var callBar = document.getElementById("call-bar");
  function onScrollCallBar() {
    if (!callBar) return;
    var show = window.scrollY > 420;
    callBar.classList.toggle("is-visible", show);
    body.classList.toggle("callbar-on", show);
  }
  window.addEventListener("scroll", onScrollCallBar, { passive: true });
  onScrollCallBar();

  /* ---------- FAQ accordion ---------- */
  var faqItems = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));

  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq-item__btn");
    var panel = item.querySelector(".faq-item__panel");
    if (!btn || !panel) return;

    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      // Close any other open item (single-open behaviour)
      faqItems.forEach(function (other) {
        if (other !== item && other.classList.contains("is-open")) {
          other.classList.remove("is-open");
          var otherBtn = other.querySelector(".faq-item__btn");
          var otherPanel = other.querySelector(".faq-item__panel");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          if (otherPanel) otherPanel.style.maxHeight = "0px";
        }
      });

      if (isOpen) {
        item.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        panel.style.maxHeight = "0px";
      } else {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // Keep open panel sized correctly on resize
  window.addEventListener("resize", function () {
    faqItems.forEach(function (item) {
      if (item.classList.contains("is-open")) {
        var panel = item.querySelector(".faq-item__panel");
        if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if ("IntersectionObserver" in window && !reduceMotion && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Scrollspy (primary nav) ---------- */
  var spyLinks = Array.prototype.slice.call(
    document.querySelectorAll(".site-nav__list a[href^='#']")
  );
  var spySections = spyLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && spyLinks.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            spyLinks.forEach(function (a) {
              a.classList.toggle(
                "is-active",
                a.getAttribute("href") === "#" + entry.target.id
              );
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    spySections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
