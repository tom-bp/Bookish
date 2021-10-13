// Client Side for library system
window.onload = function () {
  fetch("/account")
    .then((response) => response.json())

    .then((object) => {
      sites = object;
    });
};
