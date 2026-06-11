/* ============================================================
   Curated Travel by Crystal — V3 interactions (vanilla JS)
   ============================================================ */
(function () {
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Hero image fade-in / Ken Burns ---- */
  var heroMedia = document.querySelector('.hero-media');
  var heroImg = document.querySelector('.hero-img');
  if (heroMedia && heroImg) {
    if (heroImg.complete && heroImg.naturalWidth > 0) {
      heroMedia.classList.add('is-loaded');
    } else {
      heroImg.addEventListener('load', function () { heroMedia.classList.add('is-loaded'); });
      heroImg.addEventListener('error', function () { heroMedia.classList.add('is-loaded'); });
    }
  }

  /* ---- Navbar scroll state + floating buttons ---- */
  var navbar = document.getElementById('navbar');
  var backTop = document.getElementById('backTop');
  var floatInquire = document.getElementById('floatInquire');
  function onScroll() {
    var y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);
    var showFloat = y > 640;
    backTop.classList.toggle('show', showFloat);
    floatInquire.classList.toggle('show', showFloat);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  backTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* ---- Mobile drawer ---- */
  var hamburger = document.getElementById('hamburgerBtn');
  var mobileNav = document.getElementById('mobileNav');
  var mobileClose = document.getElementById('mobileClose');
  function openNav() {
    mobileNav.hidden = false;
    requestAnimationFrame(function () { mobileNav.classList.add('open'); });
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(function () { if (!mobileNav.classList.contains('open')) mobileNav.hidden = true; }, 400);
  }
  hamburger.addEventListener('click', openNav);
  mobileClose.addEventListener('click', closeNav);
  mobileNav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeNav(); });

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(function (el) { revObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Stat count-up ---- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduceMotion) { el.textContent = target + suffix; return; }
    var dur = 1600, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var statNums = document.querySelectorAll('.stat-num[data-count]');
  if (statNums.length && 'IntersectionObserver' in window) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); countObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    statNums.forEach(function (el) { countObserver.observe(el); });
  } else {
    statNums.forEach(function (el) { el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || ''); });
  }

  /* ---- Scrollspy (active nav link) ---- */
  var spyLinks = document.querySelectorAll('.nav-links a[data-spy]');
  if (spyLinks.length && 'IntersectionObserver' in window) {
    var linkFor = {};
    spyLinks.forEach(function (a) { linkFor[a.getAttribute('data-spy')] = a; });
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          spyLinks.forEach(function (a) { a.classList.remove('is-active'); });
          var link = linkFor[entry.target.id];
          if (link) link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(linkFor).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) spyObserver.observe(sec);
    });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    var panel = item.querySelector('.faq-a');
    btn.addEventListener('click', function () {
      var isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      panel.style.maxHeight = isOpen ? panel.scrollHeight + 'px' : null;
    });
  });

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Inquiry form ---- */
  // To go live: replace YOUR_FORM_ID with your real Formspree ID (see CHANGEME.md).
  var FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  var form = document.getElementById('inquiryForm');
  var msgBox = document.getElementById('formMessage');

  function showMessage(type, text) {
    msgBox.className = 'form-message show ' + type;
    msgBox.innerHTML = text;
    msgBox.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
  }
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot — silently stop bots
      if (form.website_url && form.website_url.value) return;

      var required = [
        { el: form.firstName, label: 'First name' },
        { el: form.lastName, label: 'Last name' },
        { el: form.email, label: 'Valid email address', test: validEmail },
        { el: form.travelType, label: 'Type of trip' },
        { el: form.message, label: 'A note about your trip' }
      ];
      var missing = [];
      required.forEach(function (f) {
        var v = (f.el.value || '').trim();
        var ok = f.test ? f.test(v) : !!v;
        f.el.classList.toggle('invalid', !ok);
        if (!ok) missing.push(f.label);
      });
      if (missing.length) {
        showMessage('error', 'Please complete: ' + missing.join(', ') + '.');
        var firstBad = form.querySelector('.invalid');
        if (firstBad) firstBad.focus();
        return;
      }

      var btn = document.getElementById('submitBtn');
      btn.disabled = true;
      btn.textContent = 'Sending…';

      function onSuccess() {
        var name = form.firstName.value.trim();
        showMessage('success', 'Thank you, <strong>' + name + '</strong>! Your inquiry has been received. ' +
          'I\'ll personally reach out within 24 hours to begin planning your journey.');
        form.reset();
        btn.textContent = 'Inquiry Sent ✓';
      }
      function onError() {
        showMessage('error', 'Something went wrong sending your inquiry. Please email ' +
          '<a href="mailto:Crystal.santiago@fora.travel">Crystal.santiago@fora.travel</a> directly.');
        btn.disabled = false;
        btn.textContent = 'Send My Inquiry';
      }

      // Demo mode: if Formspree isn't configured yet, simulate a successful send
      // so the form works in preview. Wire up a real endpoint for live email delivery.
      if (FORMSPREE_ENDPOINT.indexOf('YOUR_FORM_ID') !== -1) {
        setTimeout(onSuccess, 900);
        return;
      }

      fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (res.ok) onSuccess(); else onError();
      }).catch(onError);
    });

    // clear invalid styling as the user fixes fields
    form.querySelectorAll('input, select, textarea').forEach(function (el) {
      el.addEventListener('input', function () { el.classList.remove('invalid'); });
    });
  }
})();
