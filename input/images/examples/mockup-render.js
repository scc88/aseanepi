(function () {
  'use strict';
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  var map = {};
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    if (document.getElementById(id)) map[id] = a;
  });
  var sections = Object.keys(map).map(function (id) { return document.getElementById(id); });

  function setActive(id) {
    links.forEach(function (a) { a.classList.remove('active'); a.removeAttribute('aria-current'); });
    if (map[id]) {
      map[id].classList.add('active');
      map[id].setAttribute('aria-current', 'true');
    }
  }

  if ('IntersectionObserver' in window && sections.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '0px 0px -72% 0px', threshold: 0 });
    sections.forEach(function (s) { io.observe(s); });
  }

  // mobile TOC toggle
  var toggle = document.getElementById('tocToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var on = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', on ? 'false' : 'true');
      document.body.classList.toggle('toc-open', !on);
    });
  }
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('toc-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
