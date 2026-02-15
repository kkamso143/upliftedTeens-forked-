window.addEventListener("scroll", function () {
  var nav = document.querySelector(".navigationBar");
  if (window.scrollY > 50) {
    // adjust scroll threshold as needed
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});
