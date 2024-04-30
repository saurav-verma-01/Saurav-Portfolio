"use strict";

// Light and Dark Mode

const $themeBtn = document.querySelector("[data-theme-btn]");

const $HTML = document.documentElement;

let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

console.log(isDark);

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "Light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {
  $HTML.dataset.theme =
    sessionStorage.getItem("theme") === "light" ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
};

$themeBtn.addEventListener("click", changeTheme);
