"use strict";
(function () {
  var locations = document.getElementById("locations");
  if (!locations) return;

  var homeLink = document.querySelector("header .home-link");
  var locationsLink = document.querySelector("header .locations-link");

  function updateActiveLink() {
    var atLocations = window.location.hash === "#locations";
    homeLink.classList.toggle("active", !atLocations);
    locationsLink.classList.toggle("active", atLocations);
    if (atLocations) {
      homeLink.removeAttribute("aria-current");
      locationsLink.setAttribute("aria-current", "location");
    } else {
      locationsLink.removeAttribute("aria-current");
      homeLink.setAttribute("aria-current", "page");
    }
  }

  updateActiveLink();
  window.addEventListener("hashchange", updateActiveLink);
  // Reposition after images load when arriving from another page.
  window.addEventListener("load", function () {
    if (window.location.hash === "#locations") locations.scrollIntoView();
  });
})();
