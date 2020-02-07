let last_known_scroll_position = 0;
let ticking = false;
const navbar = document.querySelector("#mainNavbar");
function doSomething(scroll_pos) {
  navbar.classList.add("paintBg");
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});