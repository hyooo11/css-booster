// src/index.js

function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += " " + className;
  }
}

module.exports = { addClass };
