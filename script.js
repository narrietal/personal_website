// Theme toggle: dark by default, choice remembered in localStorage.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var meta = document.querySelector('meta[name="theme-color"]');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f6f6f4' : '#161718');
    if (btn) btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  }

  apply(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      apply(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
})();
