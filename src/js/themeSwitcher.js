const siteWrapper = document.getElementsByTagName("html")[0];
const themeSelect = document.querySelector(".switcher");
const preferTheme = localStorage.getItem("data-theme");

const setSystemTheme = () => {
  if (
    preferTheme === "dark" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    siteWrapper.setAttribute("data-theme", "dark");
    document.getElementsByClassName("switcher")[0].checked = true;
    document.getElementsByClassName("switcher")[0].classList.toggle("switched");
  } else {
    siteWrapper.setAttribute("data-theme", "light");
  }
};

setSystemTheme();

themeSelect.addEventListener("click", (event) => {
  const selectedTheme = event.target.checked;
  if (selectedTheme) {
    siteWrapper.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  } else {
    siteWrapper.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (themeSelect.value === "system") {
      setSystemTheme();
    }
  });

document.getElementById("switch").addEventListener("click", function () {
  document.getElementsByClassName("switcher")[0].classList.toggle("switched");
});
