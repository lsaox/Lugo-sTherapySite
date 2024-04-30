window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 2) {
      navbar.classList.add("shrink");
  } else {
      navbar.classList.remove("shrink");
  }
});