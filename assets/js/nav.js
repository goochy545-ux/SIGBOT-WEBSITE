/* Shared nav + footer behaviour for all marketing pages. */
(function () {
  // Footer year
  var year = document.getElementById('y');
  if (year) year.textContent = new Date().getFullYear();

  // Hamburger toggle
  var hamburger = document.querySelector('.nav-hamburger');
  var navlinks = document.querySelector('.navlinks');
  if (hamburger && navlinks) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = navlinks.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
  }

  // Products dropdown toggle
  var toggle = document.querySelector('.nav-dropdown-toggle');
  var menu = document.querySelector('.nav-dropdown-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
    });
    // Prevent clicks inside the menu from bubbling to the document handler
    // so the link navigates before the menu is torn down
    menu.addEventListener('click', function (e) {
      e.stopPropagation();
    });
    document.addEventListener('click', function () {
      menu.classList.remove('open');
      toggle.classList.remove('open');
    });
  }
})();
